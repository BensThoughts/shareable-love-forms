import {useFormQuery} from '@app/utils/hooks/query';
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
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => formSelectors.selectById(state, formId));

  const [isLoading, error, data] = useFormQuery(formId);

  console.log(isLoading);
  console.log(error);
  console.log(data);

  if (!formState) {
    dispatch(upsertForm({form: relationshipForms[formId]}));
    // throw new Error(`Error form not found with id: ${formId}`);
  }

  const fieldGroup = formState?.fieldGroups[fieldGroupId];

  return (
    <FieldGroupLayout
      fieldGroup={fieldGroup}
      onSubmit={(fieldGroup) => dispatch(updateFieldGroup({formId, fieldGroup}))}
    />
  );
}
