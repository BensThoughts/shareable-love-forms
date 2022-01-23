import Tooltip from './Tooltip';

export default function Label({
  label,
  tooltipText,
}: {
  label: string;
  tooltipText?: string;
}) {
  return (
    <div className="flex gap-2 items-center max-w-[280px] md:max-w-[380px]">
      <span className="align-middle">{label}</span>
      {tooltipText && <Tooltip text={tooltipText} />}
      {/* <DescriptionPopover title="Word" description="The definition of a word" /> */}
      {/* <InformationCircleIcon className='inline-block w-6 h-6 text-icon-secondary'/> */}
    </div>
  );
}
