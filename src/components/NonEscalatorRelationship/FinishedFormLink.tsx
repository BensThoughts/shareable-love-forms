import {selectFormById} from '@app/utils/store/features/forms/formsSlice';
import {useAppSelector} from '@app/utils/store/hooks';
// import useFormCache from '@app/utils/hooks/useFormCache';
import {PDFDownloadLink} from '@react-pdf/renderer';
import LoadingSpinner from '../LoadingSpinner';
import FinishedFormPDF from './FinishedFormPDF';

export default function FinishedFormLink({
  formId,
}: {
  formId: string
}) {
  const formState = useAppSelector((state) => selectFormById(state, formId));
  if (!formState) {
    return null;
  }
  // const [formState] = useFormCache();

  return (
    <div className="flex justify-center">
      <PDFDownloadLink document={<FinishedFormPDF formData={formState} />} fileName="NonEscalator Relationship Menu.pdf">
        {({blob, url, loading, error}) =>
      loading ?
      <div className="flex items-center justify-center border-2 border-secondary rounded-md w-[170px] h-[40px] py-1 px-2">
        <div className="flex items-center justify-center gap-4">
          <div className="">Loading Results</div>
          <LoadingSpinner />
        </div>
      </div> :
        <a
          href={url as string}
          target="_blank"
          rel="noreferrer noopener"
          className="">
          <div className="flex items-center justify-center border-2 border-secondary rounded-md w-[170px] h-[40px] py-1 px-2">
            Download Results
          </div>
        </a>
        }
      </PDFDownloadLink>
    </div>
  );
}
