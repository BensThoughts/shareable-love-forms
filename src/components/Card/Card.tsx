import CardFooter from './CardFooter';

type CardProps = {
  title: string,
  footer?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({
  title,
  footer,
  children,
}: CardProps) {
  return (
    <div className="p-[3px] bg-gradient-to-tr from-[#b500f2] to-[#8100f2] rounded-md shadow-md">
      <div className="flex flex-col gap-2 justify-between h-full bg-app-bg-primary rounded-md p-4">
        <h2 className="font-bold tex-xl">{title}</h2>
        <span className="">
          {children}
        </span>
        <div>
          <CardFooter href="NonEscalatorRelationship" />
        </div>
      </div>
    </div>
  );
}
