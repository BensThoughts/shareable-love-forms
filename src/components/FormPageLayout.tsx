import React, {useReducer, useEffect} from 'react';
import SelectMenu from './SelectMenu';
import { useAppDispatch, useAppSelector } from '@app/utils/store/hooks';
import {formSelectors, FormCategory, updateFormFields} from '@app/utils/store/formsSlice';
import Link from 'next/link';

export default function FormPageLayout({
  formId,
  categoryId,
}: {
  formId: string,
  categoryId: string,
}) {
  const dispatch = useAppDispatch();
  const formCacheState = useAppSelector((state) => formSelectors.selectById(state, formId));
  // TODO: Dangerous use of !
  const currentCategory = formCacheState!.categories[categoryId];
  const fields = currentCategory?.fields;
  const nextCategoryId = currentCategory?.nextCategoryId;
  const previousCategoryId = currentCategory?.previousCategoryId;
  
  type UpdateFieldAction = {
    type: 'UpdateField',
    payload: {
      fieldId: string,
      selectedResponse: string,
    }
  };
  type SetFieldsAction = {
    type: 'SetFields',
  }
  type FormUpdateAction = UpdateFieldAction | SetFieldsAction;



  function formReducer(state: FormCategory, action: FormUpdateAction): FormCategory {

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

      case 'SetFields':
        return {
          ...currentCategory
        }
    }
  }

  const [currentFormState, currentFormDispatch] = useReducer(formReducer, currentCategory);

  // TODO: currentFormState doesn't update on page transition (initialState ===
  // TODO: currentCategory) doesn't update currentFormState.
  // TODO: For some reason currentFormState keeps the first page it ever lands
  // TODO: on. useEffect() is a hack to force the reducer to transition to the
  // TODO: current page/category in the form.
  
  useEffect(() => {
    currentFormDispatch({type: 'SetFields'});
  }, [currentCategory])


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
                currentFormDispatch({type: 'UpdateField', payload: {fieldId, selectedResponse: e}})
              }}
            />
          </div>
        ))}
        {previousCategoryId && 
          <Link href={`/NonEscalatorRelationship/${previousCategoryId}`} passHref>
            <a
              onClick={() => dispatch(updateFormFields(formId, currentFormState))}
              className="block border-2 border-secondary border-solid rounded-md px-2 py-1"
            >
              Previous
            </a>
          </Link>
          }
        {nextCategoryId && 
          <Link href={`/NonEscalatorRelationship/${nextCategoryId}`} passHref>
            <a
              onClick={() => dispatch(updateFormFields(formId, currentFormState))}
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
