import CardFooter from './CardFooter';

type CardProps = {
  title: string;
  href: string;
  footer?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({
  title,
  href,
  children,
  className,
}: CardProps) {
  return (
    <div className={`p-[3px] bg-gradient-to-tr from-primary to-secondary rounded-md shadow-md ${className}`}>
      <div className="flex flex-col gap-2 justify-between h-full bg-app-bg-primary rounded-md p-4">
        <h2 className="font-bold tex-xl">{title}</h2>
        <span className="">
          {children}
        </span>
        {href && <div>
          <CardFooter href={href} />
        </div>}
      </div>
    </div>
  );
}
