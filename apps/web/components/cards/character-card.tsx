"use client";
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
} from "@repo/ui/src/components";
import { AspectRatio } from "@repo/ui/src/components/aspect-ratio";
import { MessageSquare, MessagesSquare, Repeat, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { nFormatter } from "../../app/lib/utils";
import ModelBadge from "../characters/model-badge";
import DraftBadge from "../characters/draft-badge";
import { useTranslation } from "react-i18next";
import { useNsfwPreference } from "../../app/lib/hooks/use-nsfw-preference";
import posthog from "posthog-js";
import {
  useMachineTranslation,
  useTranslationStore,
} from "../../app/lib/hooks/use-machine-translation";
import useMediaQuery from "@repo/ui/src/hooks/use-media-query";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const CharacterCard = (props: {
  id: string;
  name: any;
  description: any;
  numChats?: number;
  cardImageUrl?: string;
  model?: any;
  isDraft?: boolean;
  isNSFW?: boolean;
  showEdit?: any;
  showRemix?: boolean;
  showHides?: boolean;
}) => {
  const { t } = useTranslation();
  const { translations } = useTranslationStore();
  const { mt } = useMachineTranslation();
  const { nsfwPreference } = useNsfwPreference();
  const { isMobile, isTablet } = useMediaQuery();
  const insert = useMutation(api.hides.insert);
  const hide = props.showHides && (isMobile || isTablet);

  return (
    <>
      <AspectRatio
        ratio={1 / 1.75}
        className="group h-full w-full place-content-center overflow-hidden rounded-lg duration-200 hover:shadow-lg"
      >
        <Link
          href={`/character/${props?.id}`}
          onClick={() => posthog.capture("click-character-card")}
        >
          <Card className="flex h-full w-full items-end rounded-lg p-2">
            {props.showEdit && (
              <Link
                href={`/my-characters/create${
                  props.id ? `?id=${props.id}` : ""
                }${props.model ? `&model=${props.model}` : ""}`}
                className="absolute right-4 top-4 z-[4] hidden items-center group-hover:flex"
              >
                <Button
                  variant="outline"
                  className="h-5 rounded-full border-none text-xs md:text-[10px]"
                >
                  {t("Edit")}
                </Button>
              </Link>
            )}
            {props.showRemix && (
              <Tooltip
                content={
                  <TooltipContent
                    title={"Create new character by remixing this character"}
                  />
                }
              >
                <Link
                  href={`/my-characters/create${
                    props.id ? `?remixId=${props.id}` : ""
                  }`}
                  className="absolute right-4 top-4 z-[4] hidden items-center group-hover:flex"
                >
                  <Button
                    variant="outline"
                    className="h-5 rounded-full border-none text-xs md:text-[10px]"
                  >
                    <Repeat className="h-3 w-3 p-0.5" />
                    {t("Remix")}
                  </Button>
                </Link>
              </Tooltip>
            )}
            <div className="absolute top-4 z-[3] hover:z-[4]">
              <ModelBadge modelName={props.model as string} />
            </div>
            <CardHeader
              className={`relative z-[2] w-full p-4 ${hide ? "pb-24" : ""}`}
            >
              {props.cardImageUrl && (
                <div
                  className={`absolute -bottom-[9px] -left-[10px] ${
                    hide ? "h-[calc(100%+4rem)]" : "h-[calc(100%+2rem)]"
                  } w-[calc(100%+20px)] rounded-b-lg bg-gradient-to-b from-transparent via-black/60 to-black`}
                />
              )}
              <CardTitle
                className={`${
                  props.cardImageUrl ? "text-white" : "text-foreground"
                } z-[3] line-clamp-1 flex select-none justify-between text-base duration-200 group-hover:opacity-80`}
              >
                <div className="w-[80%] truncate">
                  {mt(props.name, translations)}
                </div>
                <div className="flex gap-1 font-normal">
                  {(props?.numChats as number) > 10 && (
                    <Tooltip content={`Number of chats with ${props.name}`}>
                      <div className="z-[3] flex items-center gap-0.5 rounded-full text-xs text-white duration-200 group-hover:opacity-80">
                        <MessagesSquare className="aspect-square h-5 w-5 p-1" />
                        {nFormatter(props?.numChats as number)}
                      </div>
                    </Tooltip>
                  )}
                </div>
                {props.isDraft && <DraftBadge />}
              </CardTitle>
              <CardDescription
                className={`${
                  props.cardImageUrl ? "text-white" : "text-foreground"
                } z-[3] line-clamp-2 select-none text-xs duration-200 hover:line-clamp-none group-hover:opacity-80`}
              >
                {mt(props.description, translations)}
              </CardDescription>
            </CardHeader>
            {props.cardImageUrl && (
              <>
                {props?.isNSFW && nsfwPreference !== "allow" ? (
                  <Image
                    src={props.cardImageUrl}
                    alt={""}
                    width={7.5}
                    height={13}
                    quality={25}
                    className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-lg object-cover blur-md"
                  />
                ) : (
                  <Image
                    src={props.cardImageUrl}
                    alt={""}
                    width={300}
                    height={525}
                    quality={60}
                    className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-full rounded-lg object-cover"
                  />
                )}
              </>
            )}
          </Card>
        </Link>
        {hide && (
          <div className="absolute bottom-0 left-0 z-50 flex w-full items-center justify-center">
            <div className="flex w-full justify-between rounded-lg p-5">
              <Button
                className="h-12 w-12 rounded-full border-none bg-red-500 text-white hover:bg-red-400 hover:text-white dark:hover:bg-red-600"
                variant="outline"
                size="icon"
                onTouchStart={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  insert({
                    type: "characters",
                    elementId: props.id,
                  });
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  insert({
                    type: "characters",
                    elementId: props.id,
                  });
                }}
              >
                <X />
              </Button>
              <Button
                className="h-12 w-12 rounded-full border-none bg-green-500 text-white hover:bg-green-400 hover:text-white dark:hover:bg-green-600"
                variant="outline"
                size="icon"
              >
                <MessageSquare className="fill-white" />
              </Button>
            </div>
          </div>
        )}
      </AspectRatio>
    </>
  );
};

export default CharacterCard;
