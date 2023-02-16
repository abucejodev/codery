"use client";

import purge from "@/core/libraries/purge";
import Spinner from "../../fragments/spinner";
import variants, { type Variants } from "./variants";

type Props = Variants & {
  children: React.ReactNode;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isFull?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  Icon,
  isLoading = false,
  isDisabled = false,
  onClick = () => {},
  ...props
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={purge(variants(props))}>
      {isLoading ? <Spinner /> : <></>}
      {Icon && !isLoading ? <Icon className="h-4 w-4 stroke-2" /> : <></>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
