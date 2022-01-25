import React, {forwardRef} from 'react';
import Link from 'next/link';

type NextLinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const NextLink = forwardRef<
  HTMLAnchorElement,
  NextLinkProps
>(({
  href,
  onClick,
  className,
  children,
  ...rest
}, ref) => {
  return (
    <Link passHref href={href} scroll={true}>
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`outline-none
        focus-visible:border-opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80
        focus-visible:ring-offset-1 focus-visible:ring-offset-primary/[.15]
        hover:border-opacity-80 hover:ring-2 hover:ring-primary hover:ring-opacity-80
        hover:ring-offset-1 hover:ring-offset-primary/[.15]
        ${className}`}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
});

NextLink.displayName = 'NextLink';

export default NextLink;
