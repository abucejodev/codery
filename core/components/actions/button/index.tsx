"use client";

import purge from "@/core/libraries/purge";
import Spinner from "../../fragments/spinner";
import variants, { type Variants } from "../variants";

type Props = Variants & {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name?: string;
  isFull?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  Icon,
  name,
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
      {name ? <span>{name}</span> : <></>}
    </button>
  );
};

export default Button;
