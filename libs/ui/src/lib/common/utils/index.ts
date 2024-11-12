import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const getInputTypeValidation = (type: string) => {
  return {
    email: {
      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Email address is incorrect',
    },
    text: {
      value: /^[a-zA-Z0-9- ]{3,}\b$/,
      message: 'This field cannot be less than 3 characters',
    },
    password: {
      value: /^[a-zA-Z0-9- ]{6,}\b$/,
      message: 'This field cannot be less than 6 characters',
    },
  }[type];
};

const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export { classNames, getInputTypeValidation };
