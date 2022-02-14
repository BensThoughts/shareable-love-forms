import {
  createSlice,
  // createAsyncThunk,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import { AppState } from '@app/utils/store/store';

export type FieldType = 'selectField' | 'inputField';
export interface IField {
  id: string;
  label: string;
  tooltipText?: string;
  type: FieldType;
  value: string; // | number
}
export interface FormSelectField extends IField {
  valueOptions: string[];
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
  formVersion: number;
  formLastUpdatedDate: string;
  formName: string;
  formDescription: string;
  fieldGroups: {
    [fieldGroupId: string]: FormFieldGroup;
  }
};

export const formsAdapter = createEntityAdapter<FormState>({
  selectId: (form) => form.formId,
  // sortComparer: (a, b) => b.formName.localeCompare(a.formName),
});

const initialState = formsAdapter.getInitialState({
  schemaVersion: 0,
  schemaVersionDate: '2022-01-23',
});

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    updateFieldGroup(state, action: PayloadAction<{
      formId: string,
      fieldGroup: FormFieldGroup,
    }>) {
      const fieldGroup = action.payload.fieldGroup;
      const formId = action.payload.formId;

      formsAdapter.updateOne(state, {
        id: action.payload.formId,
        changes: {
          fieldGroups: {
            ...state.entities[formId]?.fieldGroups,
            [fieldGroup.fieldGroupId]: {
              ...fieldGroup,
            },
          },
        },
      });
    },
    upsertForm(state, action: PayloadAction<{
      form: FormState
    }>) {
      formsAdapter.upsertOne(state, action.payload.form);
    },
    setOneForm(state, action: PayloadAction<{
      form: FormState
    }>) {
      formsAdapter.setOne(state, action.payload.form);
    },
  },
});

export const {
  updateFieldGroup,
  upsertForm,
  setOneForm,
} = formsSlice.actions;

const {
  // selectAll: selectAllMyForms,
  selectById: selectFormById,
  // selectEntities: selectFormEntities,
  // selectIds: selectFormIds,
} = formsAdapter.getSelectors((state: AppState) => state.forms);

export { selectFormById };

export default formsSlice.reducer;

export type FormsSlice = ReturnType<typeof formsSlice.getInitialState>;
