import { ChangeEvent, FocusEvent } from "react";
import { ZodError } from "zod";

type TInputType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "date"
  | "time"
  | "range"
  | "file";

type FieldChangeHandler = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
type FieldBlurHandler = (
  event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

type TField = {
  id?: string;
  name?: string;
  type?: TInputType;
  value?: string;
  defaultValue?: string;
  defaultChecked?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
  accept?: string;
  isMultiple?: boolean;
  capture?: boolean | "user" | "environment";
  onChange?: FieldChangeHandler;
  onBlur?: FieldBlurHandler;
  className?: string;
  errors?: ZodError;
  children?: React.ReactNode;
};

export default TField;
