import TField from "@/core/types/field";

const CheckBox = ({ name, ...props }: TField) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={props.id}
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
      {props.children}
    </div>
  );
};

export default CheckBox;