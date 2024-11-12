import { FormFieldProps } from '../models';
import { classNames, getInputTypeValidation } from '../utils';

export function Input({
  id,
  type,
  name,
  label,
  className,
  errors,
  placeholder,
  register,
  required,
}: FormFieldProps<{ [key: string]: unknown }>) {
  return (
    <div className="relative flex flex-col min-w-max space-y-1.5">
      <label htmlFor={id} className="indent-4 font-medium text-outer-space uppercase">{label}</label>
      <input
        id={id}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        className={classNames(
          className,
          errors && errors[label]
            ? 'focus:outline-none focus:border-red-500'
            : 'focus:outline-none focus:border-outer-space-700'
        )}
        {...register(label, {
          required: {
            value: required,
            message: getInputTypeValidation(type)?.message || '',
          },
          pattern: getInputTypeValidation(type),
        })}
      />
      {errors && errors[label] && (
        <span className="text-xs text-red-600 ml-2" role="alert">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default Input;
