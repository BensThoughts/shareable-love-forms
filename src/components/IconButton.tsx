import React from 'react';

export default function IconButton({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`bg-secondary font-bold py-2 px-4 rounded inline-flex items-center ${className}`} {...rest}>
      {children}
    </button>
  );
}
