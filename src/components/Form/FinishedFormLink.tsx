import {formSelectors} from '@app/utils/store/formsSlice';
import {useAppSelector} from '@app/utils/store/hooks';
import {PDFDownloadLink} from '@react-pdf/renderer';
import FinishedFormPDF from './FinishedFormPDF';

export default function FinishedFormLink({
  formId,
}: {
  formId: string
}) {
  const formState = useAppSelector((state) => formSelectors.selectById(state, formId));
  if (!formState) {
    return null;
  }

  return (
    <PDFDownloadLink document={<FinishedFormPDF formData={formState} />} fileName="NonEscalator Relationship Menu.pdf">
      {({blob, url, loading, error}) =>
      loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  );
}
