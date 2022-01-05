import React, {MouseEventHandler, ReactNode} from 'react';
import Link from 'next/link';
// import Link from '@app/components/Link';
import AnimatedLink from '../../AnimatedLink';
// import AnimatedUnderline from '@app/components/AnimatedUnderline';
// import AnimatedLink from '@app/components/AnimatedLink';

type MenuItemsProps = {
  href: string,
  animatedLink?: boolean,
  className?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode,
  key: string,
}

const MenuItem = ({
  href = '/',
  animatedLink = false,
  className = '',
  onClick,
  children,
  ...rest
}: MenuItemsProps) => {
  return (
    <Link passHref href={href} scroll={true}>
      {animatedLink ?
        <AnimatedLink className={className} onClick={onClick}>
          {children}
        </AnimatedLink> :
        <a href={href} onClick={onClick} className={`text-primary ${className}`}>
          {children}
        </a>
      }
    </Link>
  );
};

export default MenuItem;
