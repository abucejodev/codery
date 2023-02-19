type TFieldProps = {
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  className?: string;
};

export default TFieldProps;
