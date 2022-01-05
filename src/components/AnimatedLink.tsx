import {forwardRef, MouseEventHandler} from 'react';
import AnimatedUnderline from './AnimatedUnderline';

type AProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const AnimatedLink = forwardRef<HTMLAnchorElement, AProps>(({
  children,
  className = '',
  onClick,
  ...rest
}, ref) => {
  return (
    <a
      ref={ref}
      onClick={onClick}
      className={className}
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
