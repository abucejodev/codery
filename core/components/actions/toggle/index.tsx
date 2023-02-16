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
        "h-6 w-12 cursor-pointer rounded-full border-2 border-transparent focus:outline-none",
        "flex-none transition-colors duration-200 ease-in-out",
        `${isEnabled ? "bg-night dark:bg-day" : "bg-night/20 dark:bg-day/20"}
      `,
      ])}>
      <span
        aria-hidden="true"
        className={cx([
          "pointer-events-none inline-block h-5 w-5 rounded-full bg-day ring-0",
          "dark:bg-night",
          "transition duration-200 ease-in-out",
          `${isEnabled ? "translate-x-3" : "-translate-x-3"}
        `,
        ])}
      />
    </Switch>
  );
};

export default Toggle;
