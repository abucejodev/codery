import { cx } from "class-variance-authority";

export type Status = "success" | "warning" | "error";

type Props = {
  status?: Status;
  className?: string;
};

const Indicator = ({ status, className }: Props) => {
  return (
    <div
      className={cx([
        "h-1 w-1 rounded-full",
        `${className ? className : ""}`,
        `${status === "success" ? " bg-emerald" : ""}`,
        `${status === "warning" ? " bg-amber" : ""}`,
        `${status === "error" ? " bg-ruby" : ""}`,
      ])}
    />
  );
};

export default Indicator;
