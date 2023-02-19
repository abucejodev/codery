import TField from "@/core/types/field";

const File = ({ name, ...props }: TField) => {
  return (
    <div className="flex items-center">
      {props.children}

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
    </div>
  );
};

export default File;
