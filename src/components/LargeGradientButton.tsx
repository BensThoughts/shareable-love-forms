type CardProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function LargeGradientButton({
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <button
      className={`p-[3px] bg-gradient-to-tr from-primary to-secondary rounded-md shadow-md ${className ? className : ''}`}
      {...rest}
    >
      <div className="gap-2 flex-col flex justify-between p-4 h-full rounded-md bg-neutral-dark">
        <span className="text-neutral-lightest">
          {children}
        </span>
      </div>
    </button>
  );
}