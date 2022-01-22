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
      <a href={href} className={`block border-2 border-secondary border-solid rounded-md px-2 py-1 ${className ? className : ''}`} {...rest}>
        {children}
      </a>
    </Link>

  );
}
