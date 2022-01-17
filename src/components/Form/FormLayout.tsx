// import {useFormQuery} from '@app/utils/hooks/query';
// import useFormCache from '@app/utils/hooks/useFormCache';

import {formSelectors, updateFieldGroup, upsertForm} from '@app/utils/store/formsSlice';
import {useAppDispatch, useAppSelector} from '@app/utils/store/hooks';
import {relationshipForms} from '@app/utils/store/questions';

import FieldGroupLayout from './FieldGroupLayout';

export default function FormLayout({
  formId,
  fieldGroupId,
}: {
  formId: string,
  fieldGroupId: string,
}) {
  // const [formState, formDispatch] = useFormCache();
  // console.log(tState);

  const formDispatch = useAppDispatch();
  const formState = useAppSelector((state) => formSelectors.selectById(state, formId));

  if (!formState) {
    formDispatch(upsertForm({form: relationshipForms[formId]}));
    // throw new Error(`Error form not found with id: ${formId}`);
  }

  const fieldGroup = formState?.fieldGroups[fieldGroupId];
  // const fieldGroup = formState.fieldGroups[fieldGroupId];

  return (
    <>
      {fieldGroup ?
      <FieldGroupLayout
        fieldGroup={fieldGroup}
        onSubmit={(fieldGroup) => {
          // formDispatch({
          //   type: 'UpdateFormFields',
          //   payload: {
          //     fieldGroupId: fieldGroup.fieldGroupId,
          //     fields: fieldGroup.fields,
          //   },
          // });
          formDispatch(updateFieldGroup({formId, fieldGroup}));
        }}
      /> :
      <div>loading</div>}
    </>
  );
}
