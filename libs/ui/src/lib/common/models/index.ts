import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
/////////////////          FORM FIELD TYPES          /////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
type FormFieldProps<T extends FieldValues> = {
  id?: string;
  label: Path<T>;
  register: UseFormRegister<T &{ [key: string]: unknown }>;
  required: boolean;
  error?: boolean;
  errors?: FieldErrors<T>;
  reset?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  className?: string;
  value?: string;
};

export { FormFieldProps };
