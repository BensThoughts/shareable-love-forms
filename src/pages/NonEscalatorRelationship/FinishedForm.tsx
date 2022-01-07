import FinishedFormLink from '@app/components/Form/FinishedFormLink';
import GridWrapper from '../../components/GridWrapper';
import {nonEscalatorMenu} from '@app/utils/store/questions';

export default function FinishedForm() {
  return (
    <GridWrapper>
      <FinishedFormLink formId={nonEscalatorMenu.formId} />
    </GridWrapper>
  );
}
