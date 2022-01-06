import {
  createSlice,
  // createAsyncThunk,
  PayloadAction,
  createEntityAdapter,
  createAction,
} from '@reduxjs/toolkit';


import {RootState} from '@app/utils/store/store';

import { relationshipForms } from '@app/utils/store/questions';

export type FormSelectField = {
  fieldId: string;
  fieldLabel: string;
  fieldType: 'selectField',
  responseOptions: string[];
  selectedResponse: string;
  hoverOver?: string;
}

type Field = FormSelectField;

export type FormFields = {
  [fieldId: string]: Field;
}

export interface FormFieldsGroup {
  fieldGroupId: string;
  fieldGroupLabel: string;
  nextFieldGroupId?: string;
  previousFieldGroupId?: string;
  fields: FormFields;
}

export interface FormState {
  formId: string;
  formName: string;
  fieldGroups: {
    [fieldGroupId: string]: FormFieldsGroup;
  }
};

const formsAdapter = createEntityAdapter<FormState>({
  selectId: (form) => form.formId,
  // sortComparer: (a, b) => b.formName.localeCompare(a.formName),
});

const initialState = formsAdapter.getInitialState(relationshipForms);

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    updateFieldGroup(state, action: PayloadAction<{
      formId: string,
      fieldGroup: FormFieldsGroup,
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
          }
        }
      })
    },
    upsertForm(state, action: PayloadAction<{
      form: FormState
    }>) {
      formsAdapter.upsertOne(state, action.payload.form);
    }
  },
});

export const {
  updateFieldGroup,
  upsertForm,
} = formsSlice.actions;

// export const updateFormFields = createAction('forms/updateCategory', function prepare(formId: string, category: FormCategory) {
//   return {
//     payload: {
//       formId,
//       category,
//     }
//   }
// });


export const formSelectors = formsAdapter.getSelectors<RootState>(
  (state) => state.forms
)

// export const {
//   selectAll: selectAllMyForms,
//   selectById: selectMyFormById,
//   selectEntities: selectMyFormEntities,
//   selectIds: selectMyFormIds,
// } = formsAdapter.getSelectors((state: RootState) => state.forms);

export default formsSlice.reducer;
