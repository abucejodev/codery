import TField from "@/core/types/field";
import Description from "../description";
import ErrorMessage from "../error-message";
import Label from "../label";

const Body = ({
  id,
  children,
  label,
  errors,
  description,
  tooltip,
}: TField) => {
  return (
    <div className="flex max-w-lg flex-col gap-1">
      {/* label and descriptionon */}
      <div className="flexflex-col gap-1">
        {/* label and tooltip */}
        <div className="grid grid-cols-[auto,1fr] gap-2">
          {label ? <Label name={label} id={id} /> : null}
          {tooltip ? <div>{tooltip}</div> : null}
        </div>
        {description ? <Description paragraph={description} /> : null}
      </div>
      {children}
      <ErrorMessage message={errors?.message} />
    </div>
  );
};

export default Body;