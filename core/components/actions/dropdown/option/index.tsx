import { Menu } from "@headlessui/react";
import { cx } from "class-variance-authority";

type Props = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Option = ({ Icon, name, onClick = () => {} }: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={cx([
            "flex w-full items-center gap-2 rounded p-2 text-sm",
            "dark:text-quartz",
            `${
              active
                ? "bg-obsidian/20 dark:bg-quartz/20 dark:text-quartz"
                : "text-obsidian dark:text-quartz"
            }`,
          ])}>
          {Icon ? <Icon className="h-4 w-4 stroke-2" /> : <></>}
          <span>{name}</span>
        </button>
      )}
    </Menu.Item>
  );
};

export default Option;
