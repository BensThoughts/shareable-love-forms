import Link from 'next/link';

type NextLinkButtonProps = {
  href: string,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NextLinkButton({
  href,
  className,
  children,
  ...rest
}: NextLinkButtonProps) {
  return (
    <Link href={href} passHref scroll={true}>
      <a
        href={href}
        // .rounded-button is defined in global
        className={`block border-2 border-secondary border-solid rounded-md px-2 text-neutral-lightest py-1
          outline-none focus-visible:border-opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80
          focus-visible:ring-offset-1 focus-visible:ring-offset-primary/[.15]
          hover:border-opacity-80 hover:ring-2 hover:ring-primary hover:ring-opacity-80
          hover:ring-offset-1 hover:ring-offset-primary/[.15]
          ${className ? className : ''}`}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
}
