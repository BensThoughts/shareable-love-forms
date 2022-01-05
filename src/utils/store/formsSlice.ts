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

export interface FormCategory {
  categoryId: string;
  categoryLabel: string;
  nextCategoryId?: string;
  previousCategoryId?: string;
  fields: FormFields;
}

export interface FormState {
  formId: string;
  formName: string;
  categories: {
    [categoryId: string]: FormCategory;
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
    updateCategory(state, action: PayloadAction<{
      formId: string,
      category: FormCategory,
    }>) {
      const category = action.payload.category;
      const formId = action.payload.formId;

      formsAdapter.updateOne(state, {
        id: action.payload.formId,
        changes: {
          categories: {
            ...state.entities[formId]?.categories,
            [category.categoryId]: {
              ...category,
            },
          }
        }
      })
    },

  },
});

export const updateFormFields = createAction('forms/updateCategory', function prepare(formId: string, category: FormCategory) {
  return {
    payload: {
      formId,
      category,
    }
  }
});

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
