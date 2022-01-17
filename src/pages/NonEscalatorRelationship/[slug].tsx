import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import {nonEscalatorMenu} from '../../utils/store/questions';
import FormLayout from '@app/components/Form/FormLayout';
import FlexSection from '@app/components/FlexSection';
import type {ReactElement} from 'react';
import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';
import FormCacheProvider from '@app/utils/context/FormCacheContext';
// import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';

import dynamic from 'next/dynamic';

const FinishedFormLink = dynamic(() => import('@app/components/NonEscalatorRelationship/FinishedFormLink'), {
  ssr: false,
});

export const getStaticPaths: GetStaticPaths = (params) => {
  const paths = Object.keys(nonEscalatorMenu.fieldGroups).map((fieldGroupId) => {
    return {
      params: {
        slug: fieldGroupId,
      },
    };
  });

  paths.push({
    params: {
      slug: 'FinishedForm',
    },
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

  return (
    // <GridWrapper key={fieldGroupId}>
    <GridWrapper>
      <FlexSection>
        <h1 className="font-bold text-4xl">
          {formName}
        </h1>
        {nonEscalatorMenu.fieldGroups[fieldGroupId] && <h2 className="text-2xl">
          {nonEscalatorMenu.fieldGroups[fieldGroupId].fieldGroupLabel}
        </h2>
        }
      </FlexSection>
      <FlexSection>
        {fieldGroupId === 'FinishedForm' ?
          <FinishedFormLink /> :
          <FormLayout
            formId={formId}
            fieldGroupId={fieldGroupId}
          />
        }

      </FlexSection>
    </GridWrapper>
  );
}

NonEscalatorRelationshipPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <FormCacheProvider initialState={nonEscalatorMenu}>
      <SlideAnimationProvider>
        {page}
      </SlideAnimationProvider>
    </FormCacheProvider>
  );
};
