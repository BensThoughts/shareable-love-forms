type CardProps = {
  title: string;
  href?: string;
} & React.HTMLAttributes<HTMLDivElement>

export default function GradientBorderCard({
  title,
  children,
  className,
}: CardProps) {
  return (
    <div className={`p-[3px] bg-gradient-to-tr from-primary to-secondary rounded-md shadow-md ${className ? className : ''}`}>
      <div className="flex flex-col gap-2 justify-between p-4 h-full rounded-md bg-neutral-dark">
        <h2 className="font-bold tex-xl text-neutral-lightest">{title}</h2>
        <span className="text-neutral-lighter">
          {children}
        </span>
      </div>
    </div>
  );
}
