"use client";

import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import purge from "@/core/libraries/purge";
import variants, { type Variants } from "../../variants";
import { cx } from "class-variance-authority";
import Avatar from "@/core/components/figures/avatar";

type Props = Pick<Variants, "intent" | "volume" | "theme"> & {
  theme?: Extract<
    Variants["theme"],
    "neutral" | "inverse" | "quartz" | "obsidian"
  >;
  volume?: Extract<Variants["volume"], "base" | "none">;
  children: React.ReactNode;
  name: string;
  avatar?: string;
  position?: "top/left" | "top/right" | "bottom/left" | "bottom/right";
};

const Menu = ({
  children,
  name,
  avatar,
  position = "bottom/left",
  ...props
}: Props) => {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          {/* When avatar prop is passed volume and intent will defaulted to specific values */}
          <HeadlessMenu.Button
            className={purge(
              variants({
                ...props,
                volume: avatar ? "none" : props.volume,
                intent: avatar ? "tertiary" : props.intent,
              })
            )}>
            {avatar ? <Avatar alt="Me" src={avatar} /> : <></>}
            <span id="name">{name}</span>
          </HeadlessMenu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <HeadlessMenu.Items
              className={cx([
                "absolute z-10 w-64 divide-y divide-obsidian/10 rounded bg-quartz shadow-lg",
                "dark:divide-quartz/10 dark:bg-obsidian dark:text-quartz",
                "focus:outline-none",
                `${position === "top/left" ? "bottom-full left-0 mb-2" : ""}`,
                `${position === "top/right" ? "bottom-full right-0 mb-2" : ""}`,
                `${position === "bottom/left" ? "top-full left-0 mt-2" : ""}`,
                `${position === "bottom/right" ? "top-full right-0 mt-2" : ""}`,
              ])}>
              {children}
            </HeadlessMenu.Items>
          </Transition>
        </>
      )}
    </HeadlessMenu>
  );
};

export default Menu;
