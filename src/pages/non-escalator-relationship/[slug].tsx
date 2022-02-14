import { GetStaticPaths, GetStaticProps } from 'next';
import GridWrapper from '../../components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import type { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';
import { useAppSelector } from '@app/utils/store/hooks';
import { selectFormById } from '@app/utils/store/features/forms/formsSlice';
import Title from '@app/components/Title';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import { getForm } from '@app/utils/store/data/nonEscalatorFormData';
import FieldGroupLayout from '@app/components/Form/FieldGroupLayout';
import { NON_ESCALATOR_FORM_ID, NON_ESCALATOR_FORM_NAME } from './index';
import LoadingFormPage from '@app/components/NonEscalatorRelationship/LoadingFormPage';

export const getStaticPaths: GetStaticPaths = (params) => {
  const form = getForm(NON_ESCALATOR_FORM_ID);
  if (!form) {
    throw new Error('Form ID not fount: ' + NON_ESCALATOR_FORM_ID);
  }

  const paths = Object.keys(form.fieldGroups).map((fieldGroupId) => {
    return {
      params: {
        slug: fieldGroupId,
      },
    };
  });

  // paths.push({
  //   params: {
  //     slug: 'FinishedForm',
  //   },
  // });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error(`No params in getStaticProps: ${params}`);
  }
  const fieldGroupId = params.slug as string;

  return {
    props: {
      fieldGroupId,
    },
  };
};
export default function NonEscalatorRelationshipPage({
  fieldGroupId,
}: {
  fieldGroupId: string,
}) {
  const form = useAppSelector((state) => selectFormById(state, NON_ESCALATOR_FORM_ID));

  if (!form) {
    return (
      <LoadingFormPage formId={NON_ESCALATOR_FORM_ID} formName={NON_ESCALATOR_FORM_NAME} />
    );
  }

  const fieldGroup = form.fieldGroups[fieldGroupId];
  const fieldGroupLabel = fieldGroup.fieldGroupLabel;

  return (
    <>
      <NextSeo
        title={`${NON_ESCALATOR_FORM_NAME} | ${fieldGroupLabel}`}
        description="The non-escalator relationship form is designed help you determine what you need, want, and will not accept in a romantic relationship."
      />
      <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
        <GridWrapper>
          <FlexSection>
            <Title className="text-center text-neutral-lightest">
              {NON_ESCALATOR_FORM_NAME}
            </Title>
            <h2 className="text-2xl text-center text-neutral-lighter">
              {fieldGroupLabel}
            </h2>
          </FlexSection>
          <FlexSection className="mb-[105px]">
            <FieldGroupLayout
              formId={NON_ESCALATOR_FORM_ID}
              fieldGroup={fieldGroup}
            />
          </FlexSection>
        </GridWrapper>
      </BootstrapForm>
    </>
  );
}

NonEscalatorRelationshipPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SlideAnimationProvider>
      {page}
    </SlideAnimationProvider>
  );
};
