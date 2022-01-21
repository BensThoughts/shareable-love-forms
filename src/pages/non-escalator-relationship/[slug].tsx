import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import FormLayout from '@app/components/Form/FormLayout';
import FlexSection from '@app/components/FlexSection';
import type {ReactElement} from 'react';
import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';
import {useAppSelector} from '@app/utils/store/hooks';
import {selectFormById} from '@app/utils/store/features/forms/formsSlice';
import LoadingSpinner from '@app/components/LoadingSpinner';
import Title from '@app/components/Title';

// import {nonEscalatorMenu} from '../../utils/store/questions'; // Will get moved to async server calls
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import {NON_ESCALATOR_FORM_ID, NON_ESCALATOR_FORM_NAME} from './index';
import {getForm} from '@app/utils/store/questions';

// import FormCacheProvider from '@app/utils/context/FormCacheContext';
// import FinishedFormLink from '@app/components/NonEscalatorRelationship/FinishedFormLink';

// import dynamic from 'next/dynamic';
// import useFormCache from '@app/utils/hooks/useFormCache';

// const FinishedFormLink = dynamic(() => import('@app/components/NonEscalatorRelationship/FinishedFormLink'), {
//   ssr: false,
// });

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

// (parameter) Component: NextComponentType<NextPageContext, any, {}>

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
            <Title>Loading Form</Title>
            <LoadingSpinner
              // className="w-10 h-10"
              // borderSize={4}
            />
          </FlexSection>
        </GridWrapper>
      </BootstrapForm>
    );
  }

  const fieldGroupLabel = form.fieldGroups[fieldGroupId].fieldGroupLabel;

  return (
    // <GridWrapper key={fieldGroupId}>
    <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
      <GridWrapper>
        <FlexSection>
          <h1 className="text-4xl font-bold">
            {NON_ESCALATOR_FORM_NAME}
          </h1>
          <h2 className="text-2xl">
            {fieldGroupLabel}
          </h2>
        </FlexSection>
        <FlexSection>
          {/* {fieldGroupId === 'FinishedForm' ?
          <FinishedFormLink /> : */}
          <FormLayout
            formId={NON_ESCALATOR_FORM_ID}
            fieldGroupId={fieldGroupId}
          />
          {/* } */}

        </FlexSection>
      </GridWrapper>
    </BootstrapForm>
  );
}

// NonEscalatorRelationshipPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <FormContextLayout page={page} initialFormState={nonEscalatorMenu} />
//   );
// };


NonEscalatorRelationshipPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SlideAnimationProvider>
      {page}
    </SlideAnimationProvider>
  );
};
