import React from 'react';

export default function Title({
  children,
  className,
}: React.HTMLAttributes<HTMLHtmlElement>) {
  return (
    // <div className="flex justify-center items-center w-full text-center">
    <h1 className={`text-4xl font-bold ${className ? className : ''}`}>
      {children}
    </h1>
    // </div>

  );
}
