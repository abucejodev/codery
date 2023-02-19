import TField from "@/core/types/field";
import { useId } from "react";
import Fields from "..";

const File = ({ name, ...props }: TField) => {
  const id = useId();

  return (
    <Fields.Body
      id={id}
      label={props.label}
      description={props.description}
      errors={props.errors}
      tooltip={props.tooltip}>
      <input
        type="file"
        id={props.id}
        name={name}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        required={props.isRequired}
        disabled={props.isDisabled}
        readOnly={props.readOnly}
        accept={props.accept}
        capture={props.capture}
        multiple={props.isMultiple}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`${
          props.className ? props.className : ""
        } placeholder:text-xs placeholder:font-semibold placeholder:text-obsidian/50`}
      />
    </Fields.Body>
  );
};

export default File;
