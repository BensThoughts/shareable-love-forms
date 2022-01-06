import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import {nonEscalatorMenu} from '../../utils/store/questions';
import FormPageLayout from '../../components/Form/FormPageLayout';

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

export default function NonEscalatorRelationshipForm({
  fieldGroupId,
}: {
  fieldGroupId: string
}) {
  const formId = nonEscalatorMenu.formId;
  const formName = nonEscalatorMenu.formName;
  const fieldGroupLabel = nonEscalatorMenu.fieldGroups[fieldGroupId].fieldGroupLabel;

  if (fieldGroupId === 'FinishedForm') {
    return (
      <GridWrapper>
        <div className="flex flex-col gap-y-6 items-center">
          <h1 className="font-bold text-4xl">
            {formName}
          </h1>
          <h2 className="text-2xl">
            {fieldGroupLabel}
          </h2>
          <FormPageLayout
            formId={formId}
            fieldGroupId={fieldGroupId}
          />
        </div>
      </GridWrapper>
    );
  }

  return (
    <GridWrapper>
      <div className="flex flex-col gap-y-6 items-center">
        <h1 className="font-bold text-4xl">
          {formName}
        </h1>
        <h2 className="text-2xl">
          {fieldGroupLabel}
        </h2>
        <FormPageLayout
          formId={formId}
          fieldGroupId={fieldGroupId}
        />
      </div>
    </GridWrapper>
  );
}
