"use client";

import { Switch } from "@headlessui/react";
import { cx } from "class-variance-authority";

type Props = {
  isEnabled?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({ isEnabled = false, onChange = () => {} }: Props) => {
  return (
    <Switch
      checked={isEnabled}
      onChange={onChange}
      className={cx([
        "h-6 w-10 cursor-pointer rounded-full border-2 border-transparent focus:outline-none",
        "flex-none transition-colors duration-200 ease-in-out",
        `${isEnabled ? "bg-emerald" : "bg-obsidian dark:bg-quartz"}`,
      ])}>
      <span
        aria-hidden="true"
        className={cx([
          "pointer-events-none inline-block h-5 w-5 rounded-full bg-quartz ring-0",
          "dark:bg-obsidian",
          "transition duration-100 ease-in-out",
          `${isEnabled ? "translate-x-2" : "-translate-x-2"}
        `,
        ])}
      />
    </Switch>
  );
};

export default Toggle;
