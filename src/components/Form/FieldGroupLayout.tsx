import React, {useReducer} from 'react';
import SelectMenu from './SelectMenu';
import {FormFieldGroup, FormSelectField, FormInputField, updateFieldGroup} from '@app/utils/store/features/forms/formsSlice';
import FormInput from './Input';
import NextLinkButton from '../NextLinkButton';
import useSlideAnimation from '@app/utils/hooks/useSlideAnimation';
import PageTransition from '../Layout/PageTransition';
import Label from './Label';
import {useAppDispatch} from '@app/utils/store/hooks';
// import PageTransition from '../Layout/PageTransition';

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
  formId,
  fieldGroup,
}: {
  formId: string;
  fieldGroup: FormFieldGroup;
}) {
  const appDispatch = useAppDispatch();
  const [slideAnimationDirection, setSlideAnimationDirection] = useSlideAnimation();
  const [localFieldGroupState, localFieldGroupDispatch] = useReducer(fieldGroupReducer, fieldGroup);

  // useEffect(() => {
  //   fieldGroupDispatch({type: 'SetFieldGroup', payload: {fieldGroup}});
  // }, [fieldGroup]);

  if (!fieldGroup) {
    return null;
  }

  const fields = localFieldGroupState.fields;
  const nextFieldGroupId = localFieldGroupState.nextFieldGroupId;
  const previousFieldGroupId = localFieldGroupState.previousFieldGroupId;

  function getField(id: string): React.ReactNode {
    const type = fields[id].type;
    switch (type) {
      case 'selectField': {
        const field = fields[id] as FormSelectField;
        return (
          <>
            <Label label={field.label} tooltipText={field.tooltipText} />
            <SelectMenu
              options={field.valueOptions}
              initialValue={field.value}
              onChange={(e) => {
                localFieldGroupDispatch({type: 'UpdateField', payload: {fieldId: id, value: e}});
              }}
            />
          </>
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
    <PageTransition
      slideDirection={slideAnimationDirection}
    >
      <div className="flex flex-col gap-y-12 justify-center items-center mb-6">
        {fields && Object.keys(fields).map((id) => (
          <div key={id}>
            {getField(id)}
          </div>
        ))}
      </div>

      <div className="flex gap-6 justify-between w-full">
        {previousFieldGroupId &&
            <NextLinkButton
              href={`/non-escalator-relationship/${previousFieldGroupId}`}
              onClick={() => {
                setSlideAnimationDirection('right');
                appDispatch(updateFieldGroup({formId, fieldGroup: localFieldGroupState}));
              }}
            >
              Previous
            </NextLinkButton>
        }
        {nextFieldGroupId &&
          <div className="ml-auto">
            <NextLinkButton
              href={`/non-escalator-relationship/${nextFieldGroupId}`}
              onClick={() => {
                setSlideAnimationDirection('left');
                appDispatch(updateFieldGroup({formId, fieldGroup: localFieldGroupState}));
              }}
            >
              {nextFieldGroupId == 'finished-form' ? 'Submit' : 'Next'}
            </NextLinkButton>
          </div>
        }
      </div>
    </PageTransition>
  );
}
