import {GetStaticPaths, GetStaticProps} from 'next';
import GridWrapper from '../../components/GridWrapper';
import { nonEscalatorMenu } from '../../utils/store/questions';
import FormPageLayout from '../../components/FormPageLayout';
import { useAppDispatch, useAppSelector } from '@app/utils/store/hooks';
import { formSelectors, FormState, upsertForm } from '@app/utils/store/formsSlice';
import { useEffect, useState } from 'react';

export const getStaticPaths: GetStaticPaths = (params) => {
  const paths = Object.keys(nonEscalatorMenu.fieldGroups).map((fieldGroupId) => {
    return {
      params: {
        slug: fieldGroupId,
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) {
    throw new Error(`No params in getStaticProps: ${params}`)
  }
  const fieldGroupId = params.slug as string;
  return {
    props: {
      fieldGroupId
    }
  }
}

export default function NonEscalatorRelationshipForm({
  fieldGroupId,
}: {
  fieldGroupId: string
}) {
  const formId = nonEscalatorMenu.formId;
  const formName = nonEscalatorMenu.formName;
  const fieldGroupLabel = nonEscalatorMenu.fieldGroups[fieldGroupId].fieldGroupLabel;

  // const dispatch = useAppDispatch();
  // let formState = useAppSelector((state) => formSelectors.selectById(state, formId));
  // if (!formState) {
  //   dispatch(upsertForm({form: nonEscalatorMenu}));
  //   formState = nonEscalatorMenu;
  // }
  // const formName = formState.formName;

  // const [fieldGroup, setFieldGroup] = useState(formState.fieldGroups[fieldGroupId]);
  // const [fieldGroupLabel, setFieldGroupLabel] = useState(formState.fieldGroups[fieldGroupId].fieldGroupLabel);
  
  // useEffect(() => {
  //   if (!formState) {
  //     formState = nonEscalatorMenu;
  //   }
  //   setFieldGroup(formState.fieldGroups[fieldGroupId]);
  //   setFieldGroupLabel(formState.fieldGroups[fieldGroupId].fieldGroupLabel);
  // }, [fieldGroupId, formState, nonEscalatorMenu]);


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
              // fieldGroupId={fieldGroupId}
              // formState={formState}
              // category={nonEscalatorMenu.categories[categoryId]}
              // categoryLabel={nonEscalatorMenu.categories[categoryId].categoryLabel}
        />
      </div>
    </GridWrapper>
  )
}