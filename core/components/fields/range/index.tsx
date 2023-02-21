import TField from "@/core/types/field";
import { useId } from "react";
import Fields from "..";

const Range = ({ name, ...props }: TField) => {
  const id = useId();

  return (
    <Fields.Body
      id={id}
      label={props.label}
      description={props.description}
      errors={props.errors}
      tooltip={props.tooltip}>
      <div
        className="group grid w-fit cursor-pointer place-items-center rounded border border-transparent transition-all duration-300 hover:border-obsidian/20 hover:bg-obsidian/20 active:border-obsidian/20 active:bg-obsidian/20
  ">
        <input
          type="range"
          id={props.id}
          name={name}
          value={props.value}
          defaultValue={props.defaultValue}
          defaultChecked={props.defaultChecked}
          min={props.min}
          max={props.max}
          step={props.step}
          placeholder={props.placeholder}
          required={props.isRequired}
          disabled={props.isDisabled}
          readOnly={props.readOnly}
          onChange={props.onChange}
          onBlur={props.onBlur}
          className={`${
            props.className ? props.className : ""
          } cursor-pointer rounded border border-transparent bg-obsidian/5 p-2 text-sm  font-semibold text-obsidian/60 outline-none transition-all duration-300 focus:border-obsidian/20 focus:bg-white group-hover:border-obsidian/20 group-hover:bg-white`}
        />
      </div>
    </Fields.Body>
  );
};

export default Range;