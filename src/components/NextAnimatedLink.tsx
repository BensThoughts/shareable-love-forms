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

NextAnimatedLink.displayName = 'NextAnimatedLink';

export default NextAnimatedLink;
