type TitleCardProps = {
  header?: React.ReactChild;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>

function TitleHeader({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`flex items-center px-4 py-4 rounded-t sm:px-8 sm:py-6 ${className}`}>{children}</div>
  );
}

const TitleCard = ({
  header = undefined,
  footer = undefined,
  title,
  description,
  className,
  children,
}: TitleCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {header && <>{header}</>}
      <div className="px-2 py-4 sm:px-8 sm:pb-8">
        {title && <div className="mb-4 text-2xl font-bold">{title}</div>}
        {description && <div className="text-base text-secondary">{description}</div>}
        {children}
      </div>
      {footer && <>{footer}</>}
    </div>
  );
};

TitleCard.TitleHeader = TitleHeader;

export default TitleCard;
