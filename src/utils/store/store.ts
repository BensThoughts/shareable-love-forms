import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  persistReducer,
  // createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import formsReducer from '@app/utils/store/formsSlice';

// export const migrations = {
//   0: (state: RootState) => {
//     return {...state};
//   },
// };

const persistConfig = {
  key: 'root',
  version: -1,
  storage,
  blacklist: [],
  // migrate: createMigrate(migrations, {debug: true})
  // stateReconciler: autoMergeLevel2,
};


const rootReducer = combineReducers({
  forms: formsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// export const store = configureStore({
//   reducer: {
//     forms: formsReducer,
//   },
// });


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
