import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';

// import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';
import GridWrapper from '../../components/GridWrapper';
// import {nonEscalatorMenu} from '@app/utils/store/questions';
import FlexSection from '@app/components/FlexSection';
import TitleCard from '@app/components/Card/TitleCard';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import {NON_ESCALATOR_FORM_ID} from './index';
import {selectFormById} from '@app/utils/store/features/forms/formsSlice';
import {useAppSelector} from '@app/utils/store/hooks';
import LoadingSpinner from '@app/components/LoadingSpinner';
import Title from '@app/components/Title';
// import useFormCache from '@app/utils/hooks/useFormCache';
// import {nonEscalatorMenu} from '@app/utils/store/questions';
// import FinishedFormPDF from '@app/components/NonEscalatorRelationship/FinishedFormPDF';
// import {useAppSelector} from '@app/utils/store/hooks';
// import {formSelectors} from '@app/utils/store/formsSlice';

export default function NonEscalatorRelationshipFinishedFormPage() {
  const form = useAppSelector((state) => selectFormById(state, NON_ESCALATOR_FORM_ID));

  if (!form) {
    return (
      <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
        <GridWrapper>
          <FlexSection>
            <Title>Loading Form</Title>
            <LoadingSpinner size='large' />
          </FlexSection>
        </GridWrapper>
      </BootstrapForm>
    );
  }

  return (
    <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
      <GridWrapper>
        {/* <FinishedFormLink formId={formId} /> */}
        <FlexSection>
          <TitleCard title="Results">
            <div className="flex flex-col gap-4">
              <div>
                Click the button below after your results have been processed to open
                a PDF that displays your answers. The PDF can be downloaded from there.
              </div>
              <div>
                <FinishedFormLink form={form}/>
              </div>
            </div>
          </TitleCard>
        </FlexSection>

        {/* <FinishedFormPDF formData={formState}/> */}
      </GridWrapper>
    </BootstrapForm>
  );
}

// NonEscalatorRelationshipFinishedFormPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <BootstrapForm formId={nonEscalatorMenu.formId}>
//       {page}
//     </BootstrapForm>
//   );
// };

// NonEscalatorRelationshipFinishedFormPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <FormContextLayout
//       initialFormState={nonEscalatorMenu}
//       page={page}
//     />
//   );
// };
