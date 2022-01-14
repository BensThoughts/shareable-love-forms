import React, {useReducer, useEffect} from 'react';
import SelectMenu from './SelectMenu';
import {FormFieldGroup, FormSelectField, FormInputField} from '@app/utils/store/formsSlice';
import Link from 'next/link';
import FormInput from './Input';
import RoundedButton from '../RoundedButton';

type UpdateFieldAction = {
  type: 'UpdateField',
  payload: {
    fieldId: string,
    value: string,
  }
};
type SetFieldGroupAction = {
  type: 'SetFieldGroup',
  payload: {
    fieldGroup: FormFieldGroup | undefined
  }
}

type FormUpdateAction = UpdateFieldAction | SetFieldGroupAction;

function fieldGroupReducer(state: FormFieldGroup, action: FormUpdateAction): FormFieldGroup {
  switch (action.type) {
    case 'UpdateField': {
      const fieldId = action.payload.fieldId;
      const value = action.payload.value;
      return {
        ...state,
        fields: {
          ...state.fields,
          [fieldId]: {
            ...state.fields[fieldId],
            value,
          },
        },
      };
    }

    case 'SetFieldGroup': {
      const fieldGroup = action.payload.fieldGroup;
      if (fieldGroup === undefined) {
        return state;
      }
      return {
        ...fieldGroup,
      };
    }
  }
}

export default function FieldGroupLayout({
  fieldGroup,
  onSubmit,
}: {
  onSubmit(fieldGroup: FormFieldGroup): void;
  fieldGroup: FormFieldGroup | undefined,
}) {
  const initialState: FormFieldGroup = {
    fieldGroupId: 'none',
    fieldGroupLabel: 'loading',
    fields: {},
  };

  useEffect(() => {
    fieldGroupDispatch({type: 'SetFieldGroup', payload: {fieldGroup}});
  }, [fieldGroup]);


  const [fieldGroupState, fieldGroupDispatch] = useReducer(fieldGroupReducer, initialState);

  if (!fieldGroup) {
    return null;
  }

  const fields = fieldGroupState.fields;
  const nextFieldGroupId = fieldGroupState.nextFieldGroupId;
  const previousFieldGroupId = fieldGroupState.previousFieldGroupId;

  function getField(id: string): React.ReactNode {
    const type = fields[id].type;
    switch (type) {
      case 'selectField': {
        const field = fields[id] as FormSelectField;
        return (
          <SelectMenu
            label={field.label}
            options={field.valueOptions}
            initialValue={field.value}
            onChange={(e) => {
              fieldGroupDispatch({type: 'UpdateField', payload: {fieldId: id, value: e}});
            }}
          />
        );
      }
      case 'inputField': {
        const field = fields[id] as FormInputField;
        return (
          <FormInput
            wasSubmitted={false}
            getFieldError={() => null}
            type={'text'}
            name={field.id}
            placeholder={field.label}
          />
        );
      }
    }
  }


  return (
    // <form className="w-full" onSubmit={formSubmit}>
    <div className="mb-32">
      <div className="flex flex-col gap-y-12 justify-center items-center mb-6">
        {fields && Object.keys(fields).map((id) => (
          <div key={id}>
            {getField(id)}
          </div>
        ))}
        <div className="flex w-full justify-between gap-6">
          {previousFieldGroupId &&
          <Link href={`/NonEscalatorRelationship/${previousFieldGroupId}`} passHref>
            <RoundedButton onClick={() => onSubmit(fieldGroupState)}>
              Previous
            </RoundedButton>
          </Link>
          }
          {nextFieldGroupId &&
          <div className="ml-auto">
            <Link href={`/NonEscalatorRelationship/${nextFieldGroupId}`} passHref>
              <RoundedButton onClick={() => onSubmit(fieldGroupState)}>
              Next
              </RoundedButton>
            </Link>
          </div>
          }
        </div>
      </div>

    </div>
    // </form>
  );
}
