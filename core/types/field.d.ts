import { type ZodFormattedError } from "zod";

type Field<Extension> = Extension & {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  description?: string;
  value?: string;
  tooltip?: string;
  defaultValue?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  readOnly?: boolean;
  onChange?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;
  errors?: ZodFormattedError;
  className?: string;
};

export default Field;
