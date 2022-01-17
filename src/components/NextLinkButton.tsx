import Link from 'next/link';

type NextLinkButton = {
  href: string,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function RoundedButton({
  href,
  className,
  children,
  ...rest
}: NextLinkButton) {
  return (
    <Link href={href} passHref scroll={true}>
      <a href={href} className={`block border-2 border-secondary border-solid rounded-md px-2 py-1 ${className}`} {...rest}>
        {children}
      </a>
    </Link>

  );
}
