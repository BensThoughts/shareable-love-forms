import {createContext, ReactNode, useReducer} from 'react';

type UpdateFormFieldsAction = {
  type: 'UpdateFormFields';
  payload: {
    fieldGroupId: string;
    fields: FormFields;
  }
}

type FormCacheAction = UpdateFormFieldsAction;
type Dispatch = (action: FormCacheAction) => void;

export type FieldType = 'selectField' | 'inputField';
export interface IField {
  id: string;
  label: string;
  type: FieldType;
  value: string; // | number
}

export interface FormSelectField extends IField {
  valueOptions: string[];
  hoverOver?: string;
}

export type FormInputField = IField;

type Field = FormSelectField | FormInputField;

export type FormFields = {
  [id: string]: Field;
}

export interface FormFieldGroup {
  fieldGroupId: string;
  fieldGroupLabel: string;
  nextFieldGroupId?: string;
  previousFieldGroupId?: string;
  fields: FormFields;
}

export interface FormState {
  formId: string;
  formName: string;
  formDescription: string;
  fieldGroups: {
    [fieldGroupId: string]: FormFieldGroup;
  }
};

function FormCacheReducer(state: FormState, action: FormCacheAction): FormState {
  switch (action.type) {
    case 'UpdateFormFields': {
      const fieldGroupId = action.payload.fieldGroupId;
      const fields = action.payload.fields;
      return {
        ...state,
        fieldGroups: {
          ...state.fieldGroups,
          [fieldGroupId]: {
            ...state.fieldGroups[fieldGroupId],
            fields,
          },
        },
      };
    }
    default:
      return state;
  }
}

export const FormCacheContext = createContext<{
  state: FormState,
  dispatch: Dispatch
} | undefined>(undefined);

interface FormCacheProviderProps {
  children: ReactNode;
  initialState: FormState;
}

const FormCacheProvider = ({
  children,
  initialState,
}: FormCacheProviderProps) => {
  const [state, dispatch] = useReducer(FormCacheReducer, initialState);
  const value = {state, dispatch};
  return (
    <FormCacheContext.Provider value={value}>
      {children}
    </FormCacheContext.Provider>
  );
};

export default FormCacheProvider;
