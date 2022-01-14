import Title from '../Title';

type TitleCardProps = {
  title: string;
  footer?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>

export default function TitleCard({
  title,
  footer,
  children,
}: TitleCardProps) {
  return (
    <div className="max-w-3xl rounded-md p-[3px] ">
      <div className="flex p-4 flex-col gap-2 bg-app-bg-primary">
        <div className="border-b-8 border-secondary p-2">
          <Title>{title}</Title>
        </div>
        <div className="p-2">
          {children}
        </div>
        <div>
          {footer}
        </div>
      </div>
    </div>

  );
}
