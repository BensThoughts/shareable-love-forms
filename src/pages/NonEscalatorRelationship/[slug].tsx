import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import { nonEscalatorMenu } from '../../utils/store/questions';
import FormPageLayout from '../../components/FormPageLayout';

export const getStaticPaths: GetStaticPaths = (params) => {
  const paths = Object.keys(nonEscalatorMenu.categories).map((categoryId) => {
    return {
      params: {
        slug: categoryId,
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  let categoryId = 'Error'
  if (params) {
    categoryId = params.slug as string;
  }
  return {
    props: {
      categoryId
    }
  }
}

export default function NonEscalatorRelationshipForm({
  categoryId,
}: {
  categoryId: string
}) {
  const categoryLabel = nonEscalatorMenu.categories[categoryId].categoryLabel;
  return (
    <GridWrapper>
      <div className="flex flex-col gap-y-6 items-center">
        <h1 className="font-bold text-4xl">
          {nonEscalatorMenu.formName}
        </h1>
        <h2 className="text-2xl">
          {categoryLabel}
        </h2>
        <FormPageLayout
              formId={nonEscalatorMenu.formId}
              categoryId={categoryId}
              // category={nonEscalatorMenu.categories[categoryId]}
              // categoryLabel={nonEscalatorMenu.categories[categoryId].categoryLabel}
        />
      </div>
    </GridWrapper>
  )
}