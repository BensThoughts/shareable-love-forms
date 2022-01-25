import React, {forwardRef} from 'react';
import Link from 'next/link';
import AnimatedUnderline from './AnimatedUnderline';

type NextAnimatedLinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const NextAnimatedLink = forwardRef<
  HTMLAnchorElement,
  NextAnimatedLinkProps
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
        className={`rounded-sm outline-none focus-visible:border-opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80 focus-visible:ring-offset-4 focus-visible:ring-offset-app-bg ${className}`}
        {...rest}
      >
        <AnimatedUnderline>
          {children}
        </AnimatedUnderline>
      </a>
    </Link>
  );
});

NextAnimatedLink.displayName = 'NextAnimatedLink';

export default NextAnimatedLink;
