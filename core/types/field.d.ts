import { type ZodFormattedError } from "zod";

type OnChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

type OnBlur = (
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
  onChange?: OnChange;
  onBlur?: OnBlur;
  errors?: ZodFormattedError;
  className?: string;
};

export default TField;
