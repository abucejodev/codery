"use client";

import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import purge from "@/core/libraries/purge";
import variants, { type Variants } from "../../variants";
import { cx } from "class-variance-authority";

type Props = Pick<Variants, "intent"> & {
  theme?: Extract<
    Variants["theme"],
    "neutral" | "inverse" | "quartz" | "obsidian"
  >;
  children: React.ReactNode;
  Button: React.ReactNode;
  position?: "top/left" | "top/right" | "bottom/left" | "bottom/right";
};

const Menu = ({
  children,
  Button,
  position = "bottom/left",
  ...props
}: Props) => {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <HeadlessMenu.Button className={purge(variants(props))}>
            {Button}
            <ChevronDownIcon
              className={cx([
                "h-4 w-4 stroke-2",
                "transition-transform duration-75 ease-in",
                `${open ? "rotate-180" : "rotate-0"}`,
              ])}
              aria-hidden="true"
            />
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
                "absolute z-10 w-56 divide-y rounded bg-quartz shadow-lg",
                "dark:divide-quartz/20 dark:bg-obsidian dark:text-quartz",
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
