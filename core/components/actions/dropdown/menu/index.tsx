"use client";

import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import purge from "@/core/libraries/purge";
import variants, { type Variants } from "../../variants";
import { cx } from "class-variance-authority";
import Character from "@/core/components/figures/character";

/* TODO:
 * Make this type that work something like this
 * When passing Custom component the Icon and label type must be excluded
 * And if Icon or Label is passed Custom component must be excluded
 */

type Props = Pick<Variants, "intent" | "volume" | "theme"> & {
  theme?: Extract<
    Variants["theme"],
    "neutral" | "inverse" | "quartz" | "obsidian"
  >;
  children: React.ReactNode;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  Custom?: React.ReactNode;
  position?: "top/left" | "top/right" | "bottom/left" | "bottom/right";
};

const Menu = ({
  children,
  Icon,
  label,
  Custom,
  position = "bottom/left",
  ...props
}: Props) => {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      {/* In order to apply the Custom component passed, Icon, and label must be excluded */}
      {Custom ? (
        <HeadlessMenu.Button className={purge(variants(props))}>
          {Custom}
        </HeadlessMenu.Button>
      ) : (
        <HeadlessMenu.Button className={purge(variants(props))}>
          {Icon ? <Icon className="h-4 w-4 stroke-2" /> : <></>}
          {label ? <span>{label}</span> : <></>}
        </HeadlessMenu.Button>
      )}
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
    </HeadlessMenu>
  );
};

export default Menu;
