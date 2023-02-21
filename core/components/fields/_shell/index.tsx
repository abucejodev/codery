import Description from "../description";
import ErrorMessage from "../error-message";

type Props = {
  children: React.ReactNode;
  id: string;
  label?: string;
  description?: string;
  errors?: string;
  tooltip?: string;
};

const Shell = ({
  id,
  children,
  label,
  errors,
  description,
  tooltip,
}: Props) => {
  return (
    <div className="flex max-w-lg flex-col gap-1">
      <div className="flexflex-col gap-1">
        <div className="grid grid-cols-[auto,1fr] gap-2">
          {label ? (
            <label id={id} className="text-sm font-semibold text-obsidian">
              {label}
            </label>
          ) : (
            <></>
          )}
          {tooltip ? <div>{tooltip}</div> : <></>}
        </div>
        {description ? <Description paragraph={description} /> : <></>}
      </div>
      {children}
      {errors ? <ErrorMessage message={errors} /> : <></>}
    </div>
  );
};

export default Shell;
