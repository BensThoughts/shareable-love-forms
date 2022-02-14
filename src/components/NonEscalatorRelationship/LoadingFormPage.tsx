import { NextSeo } from 'next-seo';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import GridWrapper from '../GridWrapper';
import FlexSection from '../FlexSection';
import Title from '../Title';
import LoadingSpinner from '../LoadingSpinner';

export default function LoadingFormPage({
  formName,
  formId,
}: {
  formName: string;
  formId: string;
}) {
  return (
    <>
      <NextSeo
        title={`${formName} | Loading Form`}
        description="The non-escalator relationship form is designed help you determine what you need, want, and will not accept in a romantic relationship."
      />
      <BootstrapForm formId={formId}>
        <GridWrapper>
          <FlexSection>
            <Title className="text-center">Loading Form</Title>
            <LoadingSpinner size='large' />
          </FlexSection>
        </GridWrapper>
      </BootstrapForm>
    </>
  );
}
