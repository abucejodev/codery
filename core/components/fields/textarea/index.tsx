import TField from "@/core/types/field";
import { useId } from "react";
import Fields from "..";

const Textarea = ({ name, ...props }: TField) => {
  const id = useId();

  return (
    <Fields.Body
      id={id}
      label={props.label}
      description={props.description}
      errors={props.errors}
      tooltip={props.tooltip}>
      <textarea
        id={props.id}
        name={name}
        value={props.value}
        maxLength={props.maxLength}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        required={props.isRequired}
        disabled={props.isDisabled}
        readOnly={props.readOnly}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`${
          props.className ? props.className : ""
        } placeholder:text-xs placeholder:font-semibold placeholder:text-obsidian/50`}
      />
    </Fields.Body>
  );
};

export default Textarea;
