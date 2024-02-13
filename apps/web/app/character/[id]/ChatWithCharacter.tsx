"use client";
import {
  Authenticated,
  useConvexAuth,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tooltip,
} from "@repo/ui/src/components";
import Image from "next/image";
import { Dialog } from "../../dialog";
import Spinner from "@repo/ui/src/components/spinner";
import useStoreChatEffect from "../../lib/hooks/use-store-chat-effect";
import { BookMarked, MessagesSquare, Share } from "lucide-react";
import { FadeInOut, nFormatter } from "../../lib/utils";
import { SignIn, useUser } from "@clerk/nextjs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/src/components/drawer";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { Story } from "./story/[storyId]/story";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AgeRestriction from "../../../components/characters/age-restriction";
import useMediaQuery from "@repo/ui/src/hooks/use-media-query";
import { useNsfwPreference } from "../../lib/hooks/use-nsfw-preference";
import {
  useStablePaginatedQuery,
  useStableQuery,
} from "../../lib/hooks/use-stable-query";
import AddToHomeScreen from "../../../components/pwa/add-to-homescreen";
import {
  useMachineTranslation,
  useTranslationStore,
} from "../../lib/hooks/use-machine-translation";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export const Stories = ({
  characterId,
  name,
  cardImageUrl,
  isHorizontal = false,
}: {
  characterId: Id<"characters">;
  name: string;
  cardImageUrl: string;
  isHorizontal?: boolean;
}) => {
  const { nsfwPreference } = useNsfwPreference();
  const { results } = useStablePaginatedQuery(
    api.stories.list,
    { characterId, nsfwPreference },
    { initialNumItems: 5 },
  );
  return (
    <section className="flex flex-col gap-4">
      <div className="font-medium">Stories</div>
      <div
        className={`flex h-full flex-col gap-4 ${
          isHorizontal ? "grid md:grid-cols-2 lg:grid-cols-3" : ""
        }`}
      >
        {results?.length > 0 ? (
          results.map((story, i) => (
            <Link
              href={`/character/${characterId}/story/${story._id}`}
              className="h-96 rounded-lg border p-4 shadow-lg"
            >
              <Story
                name={name}
                cardImageUrl={cardImageUrl as string}
                storyId={story._id}
              />
            </Link>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No stories yet.</div>
        )}
      </div>
    </section>
  );
};

export default function ChatWithCharacter({
  params,
}: {
  params: { id: string; storyId?: string };
}) {
  const { user } = useUser();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { isMobile } = useMediaQuery();
  const { translations } = useTranslationStore();
  const { mt } = useMachineTranslation();
  const data = useStableQuery(api.characters.get, {
    id: params.id as Id<"characters">,
  });
  const creatorName = useStableQuery(api.users.getUsername, {
    id: data?.creatorId as Id<"users">,
  });
  const searchParams = useSearchParams();
  const urlChatId = searchParams.get("chatId");
  const { chatId, isUnlocked } = useStoreChatEffect(
    params.id as Id<"characters">,
    params.storyId ? (params.storyId as Id<"stories">) : undefined,
    urlChatId as Id<"chats">,
  );
  const content = (
    <>
      {params.storyId && !isUnlocked ? (
        <Story
          name={data?.name as string}
          storyId={params.storyId as Id<"stories">}
          chatId={chatId ? chatId : undefined}
          cardImageUrl={data?.cardImageUrl}
        />
      ) : chatId ? (
        <Authenticated>
          <Dialog
            name={data?.name as string}
            description={data?.description as string}
            model={data?.model as string}
            chatId={chatId}
            characterId={data?._id as any}
            cardImageUrl={data?.cardImageUrl}
          />
        </Authenticated>
      ) : isAuthenticated && !isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex h-full min-h-[60vh] w-full flex-col items-center justify-center gap-8 lg:min-h-fit">
          <AnimatePresence>
            {data?.name && (
              <motion.span
                {...FadeInOut}
                className="mt-16 font-medium lg:mt-0"
              >{`Sign in and start chat with ${data?.name}`}</motion.span>
            )}
          </AnimatePresence>
          {!user && <SignIn />}
        </div>
      )}
    </>
  );
  return (
    <div className="flex w-full flex-col justify-self-start lg:pr-6">
      {data?.isNSFW && <AgeRestriction />}
      <ErrorBoundary children={content} errorComponent={() => ""} />
      <AddToHomeScreen />
    </div>
  );
}
