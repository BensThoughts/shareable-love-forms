import dynamic from 'next/dynamic';

const FinishedFormLink = dynamic(() => import('@app/components/NonEscalatorRelationship/FinishedFormLink'), {
  ssr: false,
});

// import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';
import GridWrapper from '../../components/GridWrapper';
import {nonEscalatorMenu} from '@app/utils/store/questions';
// import useFormCache from '@app/utils/hooks/useFormCache';
// import {nonEscalatorMenu} from '@app/utils/store/questions';
// import FinishedFormPDF from '@app/components/NonEscalatorRelationship/FinishedFormPDF';
// import {useAppSelector} from '@app/utils/store/hooks';
// import {formSelectors} from '@app/utils/store/formsSlice';

export default function NonEscalatorRelationshipFinishedFormPage() {
  const formId = nonEscalatorMenu.formId;
  // const formState = useAppSelector((state) => formSelectors.selectById(state, formId));
  // if (!formState) {
  //   return null;
  // }
  return (
    <GridWrapper>
      {/* <FinishedFormLink formId={formId} /> */}
      <FinishedFormLink formId={formId}/>

      {/* <FinishedFormPDF formData={formState}/> */}
    </GridWrapper>
  );
}

// NonEscalatorRelationshipFinishedFormPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <FormContextLayout
//       initialFormState={nonEscalatorMenu}
//       page={page}
//     />
//   );
// };
