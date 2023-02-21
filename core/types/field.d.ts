import { type ZodFormattedError } from "zod";

type FieldChangeHandler = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

type FieldBlurHandler = (
  event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

type TField<Extension> = Extension & {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  tooltip?: string;
  defaultValue?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  readOnly?: boolean;
  onChange?: FieldChangeHandler;
  onBlur?: FieldBlurHandler;
  errors?: ZodFormattedError;
  className?: string;
};

export default TField;
