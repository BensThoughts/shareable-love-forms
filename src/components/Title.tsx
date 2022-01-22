import React from 'react';

export default function Title({
  children,
  className,
}: React.HTMLAttributes<HTMLHtmlElement>) {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className={`text-3xl font-bold ${className ? className : ''}`}>
        {children}
      </h1>
    </div>

  );
}
