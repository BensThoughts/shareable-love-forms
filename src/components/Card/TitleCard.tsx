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
      <div className="flex flex-col gap-2 p-4 bg-app-bg-primary">
        <div className="p-2 border-b-8 border-secondary">
          <Title className="text-neutral-lightest">{title}</Title>
        </div>
        <div className="p-2">
          <span className="text-neutral-lighter">
            {children}

          </span>
        </div>
        <div>
          {footer}
        </div>
      </div>
    </div>

  );
}
