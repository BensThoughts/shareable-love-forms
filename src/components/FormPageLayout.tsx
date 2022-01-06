import React, {useReducer, useEffect} from 'react';
import SelectMenu from './SelectMenu';
import { useAppDispatch, useAppSelector } from '@app/utils/store/hooks';
import {formSelectors, FormFieldsGroup, updateFieldGroup, upsertForm, FormState} from '@app/utils/store/formsSlice';
import Link from 'next/link';

type UpdateFieldAction = {
  type: 'UpdateField',
  payload: {
    fieldId: string,
    selectedResponse: string,
  }
};
type SetFieldGroupAction = {
  type: 'SetFieldGroup',
  payload: {
    fieldGroup: FormFieldsGroup | undefined
  }
}
type FormUpdateAction = UpdateFieldAction | SetFieldGroupAction;

export default function FormPageLayout({
  formId,
  fieldGroupId,
  // formState,
  // fieldGroup,
}: {
  formId: string,
  fieldGroupId: string,
  // formState: FormState,
  // fieldGroup: FormFieldsGroup,
}) {
  let formState = useAppSelector((state) => formSelectors.selectById(state, formId));

  function init(fieldGroupId: string): FormFieldsGroup {
    if (!formState) {
      // dispatch(upsertForm({form: relationshipForms.entities[formId]}))
      throw new Error(`Error form not found with id: ${formId}`);
    }
    return formState.fieldGroups[fieldGroupId];
  }

  function formReducer(state: FormFieldsGroup, action: FormUpdateAction): FormFieldsGroup {
    switch(action.type) {
      case 'UpdateField': {
        const fieldId = action.payload.fieldId;
        const selectedResponse = action.payload.selectedResponse;
        return {
          ...state,
          fields: {
            ...state.fields,
            [fieldId]: {
              ...state.fields[fieldId],
              selectedResponse,
            }
          }
        };
      }

      case 'SetFieldGroup': {
        const fieldGroup = action.payload.fieldGroup;
        if (fieldGroup === undefined) {
          return state;
        }
        return {
          ...fieldGroup
        }
      }
    }
  }
  const [fieldGroupState, fieldGroupDispatch] = useReducer(formReducer, fieldGroupId, init);

  const dispatch = useAppDispatch();

  const fields = fieldGroupState.fields;
  const nextFieldGroupId = fieldGroupState.nextFieldGroupId;
  const previousFieldGroupId = fieldGroupState.previousFieldGroupId;

  useEffect(() => {
    const fieldGroup = formState?.fieldGroups[fieldGroupId];
    fieldGroupDispatch({type: 'SetFieldGroup', payload: {fieldGroup}})
  }, [fieldGroupId, formState])

  return (
    // <form className="w-full" onSubmit={formSubmit}>
      <div className="flex flex-col gap-y-12 w-full justify-center items-center">
        {fields && Object.keys(fields).map((fieldId) => (
          <div key={fieldId}>
            <SelectMenu
              label={fields[fieldId].fieldLabel}
              options={fields[fieldId].responseOptions}
              selectedResponse={fields[fieldId].selectedResponse}
              onChange={(e) => {
                fieldGroupDispatch({type: 'UpdateField', payload: {fieldId, selectedResponse: e}})
              }}
            />
          </div>
        ))}
        {previousFieldGroupId && 
          <Link href={`/NonEscalatorRelationship/${previousFieldGroupId}`} passHref>
            <a
              onClick={() => dispatch(updateFieldGroup({formId, fieldGroup: fieldGroupState}))}
              className="block border-2 border-secondary border-solid rounded-md px-2 py-1"
            >
              Previous
            </a>
          </Link>
          }
        {nextFieldGroupId && 
          <Link href={`/NonEscalatorRelationship/${nextFieldGroupId}`} passHref>
            <a
              onClick={() => dispatch(updateFieldGroup({formId, fieldGroup: fieldGroupState}))}
              className="block border-2 border-secondary border-solid rounded-md px-2 py-1"
            >
              Next
            </a>
          </Link>
          }
      </div>
    // </form>
  );
}
