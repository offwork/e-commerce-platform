import { ReactNode } from 'react';

type ProductsContainerProps = {
  children?: ReactNode;
  className?: string;
  title: string;
};

export function ProductsContainer({
  children,
  className,
  title,
}: ProductsContainerProps) {
  return (
    <div className={`${className} || container w-full`}>
      <h1 className="text-4xl">{title}</h1>
      {children}
    </div>
  );
}

export default ProductsContainer;
