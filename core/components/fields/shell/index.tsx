import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

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
        {description ? (
          <p className="text-xs  text-obsidian/50">{description}</p>
        ) : (
          <></>
        )}
      </div>
      {children}
      {errors ? (
        <div className="flex items-center gap-1">
          <ExclamationCircleIcon className="h-3 w-3 text-ruby/75" />
          <span className="text-ms text-ruby">{errors}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Shell;
