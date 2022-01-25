import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  persistReducer,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import formsReducer from '@app/utils/store/features/forms/formsSlice';
import userReducer from '@app/utils/store/features/user/userSlice';

import {persistStore} from 'redux-persist';
import persistMigrations from './migrations';

const PERSISTED_KEYS: string[] = ['forms'];

const persistConfig = {
  key: 'root',
  version: 0,
  storage,
  whitelist: PERSISTED_KEYS,
  migrate: createMigrate(persistMigrations, {debug: true}),
  // stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  forms: formsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    immutableCheck: true,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);

export default store;

