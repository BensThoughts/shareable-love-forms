import dynamic from 'next/dynamic';

const FinishedFormLink = dynamic(() => import('@app/components/NonEscalatorRelationship/FinishedFormLink'), {
  ssr: false,
});

// import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';
import GridWrapper from '../../components/GridWrapper';
// import {nonEscalatorMenu} from '@app/utils/store/questions';
import FlexSection from '@app/components/FlexSection';
import TitleCard from '@app/components/Card/TitleCard';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import {NON_ESCALATOR_FORM_ID} from './index';
// import useFormCache from '@app/utils/hooks/useFormCache';
// import {nonEscalatorMenu} from '@app/utils/store/questions';
// import FinishedFormPDF from '@app/components/NonEscalatorRelationship/FinishedFormPDF';
// import {useAppSelector} from '@app/utils/store/hooks';
// import {formSelectors} from '@app/utils/store/formsSlice';

export default function NonEscalatorRelationshipFinishedFormPage() {
  // const formState = useAppSelector((state) => formSelectors.selectById(state, formId));
  // if (!formState) {
  //   return null;
  // }
  return (
    <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
      <GridWrapper>
        {/* <FinishedFormLink formId={formId} /> */}
        <FlexSection>
          <TitleCard title="Results" className="flex flex-col gap-4">
            <div>
          Click the button below after your results have been processed to open
          a PDF that displays your answers. The PDF can be downloaded from there.
            </div>

            <FinishedFormLink formId={NON_ESCALATOR_FORM_ID}/>

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
