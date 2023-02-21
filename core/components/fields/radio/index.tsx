import type TField from "@/core/types/fields";
import { useId } from "react";
import Fields from "..";
import Shell from "../_shell";

type Props = TField<{
  value?: string;
  placeholder?: string;
}>;

const Radio = ({ label, description, errors, tooltip, ...props }: Props) => {
  const id = useId();

  return (
    <Shell
      id={id}
      label={label}
      description={description}
      errors={errors}
      tooltip={tooltip}>
      <div className="group grid w-fit cursor-pointer place-items-center rounded border border-transparent transition-all duration-300 hover:border-obsidian/20 hover:bg-obsidian/20 active:border-obsidian/20 active:bg-obsidian/20">
        <input
          {...props}
          id={id}
          type="radio"
          className={`${
            props.className ? props.className : ""
          } cursor-pointer rounded border border-transparent bg-obsidian/5 p-2 text-sm  font-semibold text-obsidian/60 outline-none transition-all duration-300 focus:border-obsidian/20 focus:bg-white group-hover:border-obsidian/20 group-hover:bg-white`}
        />
      </div>
    </Shell>
  );
};

export default Radio;
