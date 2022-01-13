import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';
import GridWrapper from '../../components/GridWrapper';
import {nonEscalatorMenu} from '@app/utils/store/questions';
import FinishedFormPDF from '@app/components/NonEscalatorRelationship/FinishedFormPDF';
import {useAppSelector} from '@app/utils/store/hooks';
import {formSelectors} from '@app/utils/store/formsSlice';

export default function FinishedForm() {
  const formId = nonEscalatorMenu.formId;
  const formState = useAppSelector((state) => formSelectors.selectById(state, formId));
  if (!formState) {
    return null;
  }
  return (
    <GridWrapper>
      <FinishedFormLink formId={formId} />
      <FinishedFormPDF formData={formState}/>
    </GridWrapper>
  );
}
