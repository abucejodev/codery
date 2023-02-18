import Indicator, { type Status } from "@/core/components/fragments/indicator";
import { Menu } from "@headlessui/react";
import { cx } from "class-variance-authority";

type Props = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  status?: Extract<Status, "warning">;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Option = ({
  Icon,
  name,
  status,
  isDisabled = false,
  onClick = () => {},
}: Props) => {
  return (
    <Menu.Item disabled={isDisabled}>
      {({ active, disabled }) => (
        <button
          onClick={onClick}
          className={cx([
            "flex w-full items-center gap-2 rounded p-2 text-sm text-obsidian",
            "dark:text-quartz",
            "transition-all duration-100 ease-in",
            // prettier-ignore
            `${active ? "bg-obsidian/10 dark:bg-quartz/10 dark:text-quartz" : ""}`,
            `${
              disabled
                ? "text-obsidian/50 dark:text-quartz/50"
                : "active:bg-obsidian/20 dark:active:bg-quartz/20"
            }`,
          ])}>
          {Icon ? <Icon className="h-4 w-4 stroke-2" /> : <></>}
          <span>{name}</span>
          <Indicator status={status} className="ml-auto" />
        </button>
      )}
    </Menu.Item>
  );
};

export default Option;
