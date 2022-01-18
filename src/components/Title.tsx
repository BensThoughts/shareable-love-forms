import React from 'react';

export default function Title({
  children,
  className,
}: React.HTMLAttributes<HTMLHtmlElement>) {
  return (
    <span className={`text-3xl font-bold ${className}`}>
      {children}
    </span>
  );
}
