

import {FormState} from '@app/utils/store/features/forms/formsSlice';
// import useFormCache from '@app/utils/hooks/useFormCache';
import {
  // PDFDownloadLink,
  BlobProvider,
} from '@react-pdf/renderer';
import DownloadButtonPDF from './DownloadButtonPDF';
import FinishedFormPDF from './FinishedFormPDF';

export default function FinishedFormLink({
  // formId,
  form,
}: {
  // formId: string
  form: FormState
}) {
  // const formState = useAppSelector((state) => selectFormById(state, formId));
  // if (!formState) {
  //   return null;
  // }
  // const [formState] = useFormCache();

  return (
    <BlobProvider document={<FinishedFormPDF formData={form} />}>
      {({blob, url, loading, error}) =>
      loading ?
        <DownloadButtonPDF isLoading /> :
        <a
          href={url as string}
          target="_blank"
          rel="noreferrer noopener"
          // download="NonEscalator Relationship Menu.pdf"
          className=""
        >
          <DownloadButtonPDF isLoading={false} />
        </a>
      }
    </BlobProvider>
  );
}
