import LoadingSpinner from '@app/components/LoadingSpinner';

export default function DownloadButtonPDF({
  isLoading,
}: {
  isLoading: boolean,
}) {
  return (
    <div className="flex items-center justify-center border-2 border-secondary rounded-md w-[170px] h-[40px] py-1 px-2">
      {isLoading ?
      <div className="flex gap-4 justify-center items-center">
        <div>Loading Results</div>
        <LoadingSpinner size='small' />
      </div> :
      <span className="text-neutral-lightest">Download Results</span>
      }
    </div>
  );
}
