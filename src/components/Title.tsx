import React from 'react';

export default function Title({
  children,
  className,
}: React.HTMLAttributes<HTMLHtmlElement>) {
  return (
    <h1 className={`text-3xl font-bold ${className}`}>
      {children}
    </h1>
  );
}
