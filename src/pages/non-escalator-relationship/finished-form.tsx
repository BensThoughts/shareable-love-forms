import {NextSeo} from 'next-seo';
import dynamic from 'next/dynamic';
const FinishedFormLink = dynamic(() => import('../../components/NonEscalatorRelationship/PDF/FinishedFormLink'), {
  ssr: false,
  loading: () => (
    <DownloadButtonPDF isLoading />
  ),
});
// import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';

import {selectFormById} from '@app/utils/store/features/forms/formsSlice';
import {useAppSelector} from '@app/utils/store/hooks';
import GridWrapper from '../../components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import Card from '@app/components/Card/Card';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import {NON_ESCALATOR_FORM_ID, NON_ESCALATOR_FORM_NAME} from './index';
import DownloadButtonPDF from '@app/components/NonEscalatorRelationship/PDF/DownloadButtonPDF';
import LoadingFormPage from '@app/components/NonEscalatorRelationship/LoadingFormPage';


export default function NonEscalatorRelationshipFinishedFormPage() {
  const form = useAppSelector((state) => selectFormById(state, NON_ESCALATOR_FORM_ID));

  if (!form) {
    return (
      <LoadingFormPage formId={NON_ESCALATOR_FORM_ID} formName={NON_ESCALATOR_FORM_NAME} />
    );
  }

  return (
    <>
      <NextSeo
        title={`${NON_ESCALATOR_FORM_NAME} | Finished Form`}
        description="The non-escalator relationship form is designed help you determine what you need, want, and will not accept in a romantic relationship."
      />
      <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
        <GridWrapper>
          {/* <FinishedFormLink formId={formId} /> */}
          <FlexSection>
            <Card
              title="Results"
              className="max-w-2xl rounded-md bg-neutral-dark text-neutral-lightest"
            >
              <div className="flex flex-col gap-4 text-neutral-lighter">
                <div>
                Click the button below after your results have been processed to open
                a PDF that displays your answers. The PDF can be downloaded from there.
                </div>
                <div className="flex justify-center w-full">
                  <FinishedFormLink form={form}/>
                </div>
              </div>
            </Card>
          </FlexSection>

          {/* <FinishedFormPDF formData={formState}/> */}
        </GridWrapper>
      </BootstrapForm>
    </>
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
