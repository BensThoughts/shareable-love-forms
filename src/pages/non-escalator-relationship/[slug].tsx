import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import type {ReactElement} from 'react';
import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';
import {useAppSelector} from '@app/utils/store/hooks';
import {selectFormById} from '@app/utils/store/features/forms/formsSlice';
import LoadingSpinner from '@app/components/LoadingSpinner';
import Title from '@app/components/Title';

import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import {NON_ESCALATOR_FORM_ID, NON_ESCALATOR_FORM_NAME} from './index';
import {getForm} from '@app/utils/store/data/nonEscalatorFormData';
import FieldGroupLayout from '@app/components/Form/FieldGroupLayout';

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

export const getStaticProps: GetStaticProps = async ({params}) => {
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
      <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
        <GridWrapper>
          <FlexSection>
            <Title className="text-center">Loading Form</Title>
            <LoadingSpinner size='large' />
          </FlexSection>
        </GridWrapper>
      </BootstrapForm>
    );
  }

  const fieldGroup = form.fieldGroups[fieldGroupId];
  const fieldGroupLabel = fieldGroup.fieldGroupLabel;

  return (
    <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
      <GridWrapper>
        <FlexSection>
          <Title className="text-center">
            {NON_ESCALATOR_FORM_NAME}
          </Title>
          <h2 className="text-2xl text-center">
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
  );
}

NonEscalatorRelationshipPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SlideAnimationProvider>
      {page}
    </SlideAnimationProvider>
  );
};
