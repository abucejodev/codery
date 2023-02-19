import TField from "@/core/types/field";
import { useId } from "react";
import Fields from "..";

const CheckBox = ({ name, ...props }: TField) => {
  const id = useId();

  return (
    <Fields.Body
      id={id}
      label={props.label}
      description={props.description}
      errors={props.errors}
      tooltip={props.tooltip}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={props.value}
        defaultValue={props.defaultValue}
        defaultChecked={props.defaultChecked}
        placeholder={props.placeholder}
        required={props.isRequired}
        disabled={props.isDisabled}
        readOnly={props.readOnly}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`${props.className ? props.className : ""}`}
      />
    </Fields.Body>
  );
};

export default CheckBox;
