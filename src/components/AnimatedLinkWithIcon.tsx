type AnimatedLinkWithIconProps = {
  text: string,
  href: string,
  icon: React.ReactNode,
  iconPosition?: 'left' | 'right';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function AnimatedLinkWithIcon({
  text,
  href,
  className,
  icon,
  iconPosition = 'right',
  ...rest
}: AnimatedLinkWithIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 text-primary items-center justify-center bg-growing-underline ${className ? className : ''}`}
      {...rest}
    >
      {iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      {/* <AnimatedUnderline
        className="animated-underline"
      > */}
      <span className="bg-growing-underline">
        {text}
      </span>
      {/* </AnimatedUnderline> */}
      {iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </a>
  );
}
