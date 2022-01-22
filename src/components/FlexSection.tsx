import React from 'react';

export default function FlexSection({
  children,
  className,
}: React.HTMLAttributes<HTMLHtmlElement>) {
  return (
    <section className={`flex flex-col items-center gap-6 w-full ${className ? className : ''}`}>
      {children}
    </section>
  );
}
