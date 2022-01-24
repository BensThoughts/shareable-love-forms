import React, {forwardRef} from 'react';
import Link from 'next/link';
import AnimatedUnderline from './AnimatedUnderline';

type NextLinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const NextLink = forwardRef<
  HTMLAnchorElement,
  NextLinkProps
>(({
  href,
  onClick,
  children,
  ...rest
}, ref) => {
  return (
    <Link passHref href={href} scroll={true}>
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        <AnimatedUnderline>
          {children}
        </AnimatedUnderline>
      </a>
    </Link>
  );
});

NextLink.displayName = 'NextLink';

export default NextLink;
