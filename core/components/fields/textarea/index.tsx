import TFieldProps from "@/core/types/field";

const Textarea = ({ name, ...props }: TFieldProps) => {
  return (
    <div className="flex items-center">
      {props.children}

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
    </div>
  );
};

export default Textarea;
