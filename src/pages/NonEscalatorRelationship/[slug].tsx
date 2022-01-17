import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import {nonEscalatorMenu} from '../../utils/store/questions';
import FormLayout from '@app/components/Form/FormLayout';
import FlexSection from '@app/components/FlexSection';
import type {ReactElement} from 'react';
import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';

export const getStaticPaths: GetStaticPaths = (params) => {
  const paths = Object.keys(nonEscalatorMenu.fieldGroups).map((fieldGroupId) => {
    return {
      params: {
        slug: fieldGroupId,
      },
    };
  });

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

// (parameter) Component: NextComponentType<NextPageContext, any, {}>

export default function NonEscalatorRelationshipPage({
  fieldGroupId,
}: {
  fieldGroupId: string,
}) {
  const formId = nonEscalatorMenu.formId;
  const formName = nonEscalatorMenu.formName;
  const fieldGroupLabel = nonEscalatorMenu.fieldGroups[fieldGroupId].fieldGroupLabel;

  return (
    // <GridWrapper key={fieldGroupId}>
    <GridWrapper>
      <FlexSection>
        <h1 className="font-bold text-4xl">
          {formName}
        </h1>
        <h2 className="text-2xl">
          {fieldGroupLabel}
        </h2>
      </FlexSection>
      <FlexSection>
        <FormLayout
          formId={formId}
          fieldGroupId={fieldGroupId}
        />
      </FlexSection>
    </GridWrapper>
  );
}

NonEscalatorRelationshipPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SlideAnimationProvider>
      {page}
    </SlideAnimationProvider>
  );
};
