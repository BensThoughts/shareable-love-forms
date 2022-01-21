import {useAppDispatch, useAppSelector} from '@app/utils/store/hooks';
import {selectFormById, setOneForm} from './formsSlice';

import {relationshipForms} from '../../questions'; // This will eventually be async on a server

export default function BootstrapForm({
  formId,
  children,
}: {
  formId: string;
  children: React.ReactNode;
}) {
  const reduxForm = useAppSelector((state) => selectFormById(state, formId));
  const dispatch = useAppDispatch();

  if (!relationshipForms[formId]) {
    console.error('Form not found: ' + formId);
    return (
      <div>
        Error, form not found {formId}
      </div>
    );
  }
  const serverForm = relationshipForms[formId];

  if (!reduxForm || reduxForm.formVersion != serverForm.formVersion) {
    // dispatch(upsertForm({form: serverForm}));
    dispatch(setOneForm({form: serverForm}));
  }

  return (
    <>
      {children}
    </>
  );
}
