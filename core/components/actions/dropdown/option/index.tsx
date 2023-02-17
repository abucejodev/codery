import { Menu } from "@headlessui/react";
import { cx } from "class-variance-authority";

type Props = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
};

const Option = ({ Icon, name }: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={cx([
            "flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm",
            "dark:text-day",
            `${active ? "bg-day text-night" : "text-night"}`,
            `${active ? "dark:bg-day/20 dark:text-day" : "text-day"}`,
          ])}>
          {Icon ? <Icon className="h-4 w-4 stroke-2" /> : <></>}
          <span>{name}</span>
        </button>
      )}
    </Menu.Item>
  );
};

export default Option;
