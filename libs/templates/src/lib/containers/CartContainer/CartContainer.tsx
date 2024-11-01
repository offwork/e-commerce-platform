import { ReactNode } from 'react';

type CartContainerProps = {
  children?: ReactNode;
  className?: string;
  title: string;
};

export function CartContainer({
  children,
  className,
  title,
}: CartContainerProps) {
  return (
    <div className={`${className} || container w-full`}>
      <h1 className="text-4xl">{title}</h1>
      {children}
    </div>
  );
}

export default CartContainer;
