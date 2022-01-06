import {formSelectors} from '@app/utils/store/formsSlice';
import {useAppSelector} from '@app/utils/store/hooks';

export default function FinishedForm({
  formId,
}: {
  formId: string,
}) {
  const formState = useAppSelector((state) => formSelectors.selectById(state, formId));

  if (!formState) {
    return null;
  }

  return (
    <div>{formState.formName}</div>
  );
}
