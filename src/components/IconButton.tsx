import React from 'react';

export default function IconButton({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={`p-[2px] flex justify-center items-center bg-gradient-to-tr from-primary to-secondary rounded  ${className ? className : ''}`}>
      <button className={`bg-app-bg font-bold rounded`} {...rest}>
        {children}
      </button>
    </div>
  );
}
