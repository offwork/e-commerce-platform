import { ReactNode } from 'react';

type LoginContainerProps = {
  children?: ReactNode;
  className?: string;
  title: string;
};

export function LoginContainer({
  children,
  className,
  title,
}: LoginContainerProps) {
  return (
    <div className={`${className} || container w-full`}>
      <h1 className="text-4xl">{title}</h1>
      {children}
    </div>
  );
}

export default LoginContainer;
