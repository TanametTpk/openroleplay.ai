"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  CircleUserRound,
  LogIn,
  LogOut,
  Menu,
  Star,
  Store,
} from "lucide-react";
import { Discord } from "@repo/ui/src/components/social-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/src/components/popover";
import Link from "next/link";
import { SignedOut, useClerk, useUser } from "@clerk/nextjs";
import { Button } from "@repo/ui/src/components";
import { useTranslation } from "react-i18next";
import { Crystal } from "@repo/ui/src/components/icons";

type StyledLinkProps = {
  href: string;
  text: string;
  Icon: ReactElement; // This allows passing any React element as an icon
  onClick?: any;
};

type StyledButtonProps = {
  text: string;
  Icon: ReactElement; // This allows passing any React element as an icon
  onClick?: any;
};

const StyledLink: React.FC<StyledLinkProps> = ({
  href,
  text,
  Icon,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-secondary sm:p-1"
      onClick={onClick}
    >
      {Icon}
      <p className="text-sm">{text}</p>
    </Link>
  );
};

export const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  Icon,
  onClick,
}) => {
  return (
    <button
      className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-secondary sm:p-1"
      onClick={onClick}
    >
      {Icon}
      <p className="text-sm">{text}</p>
    </button>
  );
};

export default function UserDropdown() {
  const { t } = useTranslation();
  const { user } = useUser();

  const [openPopover, setOpenPopover] = useState(false);
  const { signOut } = useClerk();

  return (
    <div className="relative inline-block text-left">
      <Popover
        open={openPopover}
        onOpenChange={() => setOpenPopover(!openPopover)}
      >
        <PopoverContent asChild>
          <div className="w-full rounded-lg bg-background p-2 sm:w-40 sm:p-1">
            {user && (
              <div className="p-2">
                {user?.username && (
                  <p className="truncate text-sm font-medium text-foreground">
                    {`@${user?.username}`}
                  </p>
                )}
              </div>
            )}
            {user ? (
              <>
                <StyledButton
                  text={t("Logout")}
                  Icon={<LogOut className="h-4 w-4 text-muted-foreground" />}
                  onClick={() => {
                    setOpenPopover(false);
                    signOut();
                  }}
                />
                <StyledLink
                  text={t("Personas")}
                  Icon={
                    <CircleUserRound className="h-4 w-4 text-muted-foreground" />
                  }
                  href="/my-personas"
                />
              </>
            ) : (
              <div className="md:hidden">
                <StyledLink
                  text={t("Log in")}
                  Icon={<LogIn className="h-4 w-4 text-muted-foreground" />}
                  onClick={() => {
                    setOpenPopover(false);
                  }}
                  href="/sign-in"
                />
              </div>
            )}
            <StyledLink
              href="/github"
              text={t("Star on GitHub")}
              Icon={<Star className="h-4 w-4 text-muted-foreground" />}
              onClick={() => setOpenPopover(false)}
            />
            <StyledLink
              href="/discord"
              text={t("Join Discord")}
              Icon={<Discord className="h-4 w-4 text-muted-foreground" />}
              onClick={() => setOpenPopover(false)}
            />
            <StyledLink
              href="/crystals"
              text={t("Crystals")}
              Icon={<Crystal className="h-4 w-4 text-muted-foreground" />}
              onClick={() => setOpenPopover(false)}
            />
          </div>
        </PopoverContent>
        <PopoverTrigger
          onClick={() => setOpenPopover(!openPopover)}
          className={`flex items-center justify-center overflow-hidden rounded-full border-none outline-none transition-all duration-75 active:scale-95  ${
            user ? "h-8 w-8 border sm:h-9 sm:w-9" : ""
          }`}
        >
          {user ? (
            <button
              onClick={() => setOpenPopover(!openPopover)}
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
            >
              <Image
                alt={user?.primaryEmailAddress?.emailAddress as string}
                src={
                  user?.imageUrl ||
                  `https://avatars.dicebear.com/api/micah/${
                    user?.primaryEmailAddress?.emailAddress as string
                  }.svg`
                }
                width={40}
                height={40}
              />
            </button>
          ) : (
            <>
              <SignedOut>
                <Button
                  variant="ghost"
                  className="hidden items-center gap-2 rounded-full md:flex"
                >
                  {t("Join community")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </SignedOut>
              <Menu className="block h-4 w-4 md:hidden" />
            </>
          )}
        </PopoverTrigger>
      </Popover>
    </div>
  );
}
