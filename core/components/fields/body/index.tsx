import { ZodError } from "zod";

type Props = {
  label?: string;
  name: string;
  children: React.ReactNode;
  errors: ZodError;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; //icon for error if preferred
  tooltip?: string;
};

const Body = ({ label, name, children, errors, Icon, tooltip }: Props) => {
  return (
    <div className="flex flex-col gap-1 border-4">
      <div className="flex items-center gap-3">
        <label>{label}</label>
        {/* tool tip here */}
      </div>
      {/* field */}
      <div>{children}</div>
      {/* <ErrorMessage
        message={errors[name].message}
        Icon={Icon}
      /> */}
    </div>
  );
};

export default Body;
