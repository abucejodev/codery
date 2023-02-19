import { ChangeEvent, FocusEvent } from "react";

type TField = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  defaultChecked?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  children?: React.ReactNode;
  className?: string;
};

export default TField;
