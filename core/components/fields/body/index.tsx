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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {label ? <Label name={label} id={id} /> : null}
        {tooltip ? <div>{tooltip}</div> : null}
      </div>
      {description ? <Description paragraph={description} /> : null}
      {children}
      <ErrorMessage message={errors?.message} />
    </div>
  );
};

export default Body;

