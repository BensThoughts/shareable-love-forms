import {forwardRef, MouseEventHandler} from 'react';
import AnimatedUnderline from './AnimatedUnderline';

type AProps = {
  children: React.ReactNode;
  // className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const AnimatedLink = forwardRef<HTMLAnchorElement, AProps>(({
  children,
  onClick,
  href,
  ...rest
}, ref) => {
  return (
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
  );
});

AnimatedLink.displayName = 'AnimatedLink';

export default AnimatedLink;
