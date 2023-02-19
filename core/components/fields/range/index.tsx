import TField from "@/core/types/field";

const Range =({ name, ...props }: TField) => {
  return (
    <div className="flex items-center">
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
        className={`${props.className ? props.className : ""}`}
      />
      {props.children}
    </div>
  );
};

export default Range;
