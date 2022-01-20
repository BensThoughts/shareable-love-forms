import {MigrationManifest} from 'redux-persist';
import {PersistedState} from 'redux-persist/es/types';
import {AppState} from './store';

// type AppStateV0 = {
//   [P in keyof Omit<AppStateV1, 'forms'>]: AppStateV1[P]
// } & {
//   'formsV2': FormsSliceState
// };
//
// AppStateV1 = AppState

type AppStateV0 = AppState;

const persistMigrations: MigrationManifest = {
  0: (state: PersistedState): AppStateV0 => {
    console.log('Migrating to AppStateV0');
    const originState = state as AppStateV0;
    return {
      ...originState,
    };
  },
  // 1: (state: PersistedState): AppStateV1 => {
  //   console.log('Migrating to AppStateV1');
  //   const prevState = state as AppStateV0;
  //   return {
  //     ...prevState,
  //     forms: {
  //       ...prevState.formsV2,
  //     },
  //   };
  // },
};

export default persistMigrations;


/*
    Demo Migration States Below
 */

// type AppStateV0 = {
//   [P in keyof Omit<AppStateV1, 'form'>]: AppStateV1[P]
// } & {
//   forms: EntityState<FormState> & {
//     [formId: string]: FormState;
//   }
// };

// type AppStateV1 = {
//   [P in keyof Omit<AppState, 'formsV2'>]: AppStateV2[P]
// } & {
//   form: EntityState<FormState> & {
//     [formId: string]: FormState;
//   }
// }

// type AppStateV2 = AppState;

// {
//   [P in keyof Omit<AppState, 'formsV2'>]: AppStateV3[P]
// }

// type AppStateV3 = AppState;

// interface MigManifest extends MigrationManifest {
//   'forms': (state: FormState) => FormState
//   '_persist': (state: PersistedState) => PersistedState
// }

// const persistMigrations: MigrationManifest = {
//   1: (state: PersistedState): AppStateV1 => {
//     const pState = state as AppStateV0;
//     return {
//       ...pState,
//       form: {
//         ...pState.forms,
//       },
//        forms: {
//          'non-escalator-relationship': undefined,
//        },
//     };
//   },
//   2: (state: PersistedState): AppStateV2 => {
//     const prevState = state as AppStateV1;
//     const t = formsAdapter.removeAll(prevState.form);
//     return {
//       ...prevState,
//       formsV2: {
//         ...t,
//       },
//     };
//   },
//   3: (prevState: PersistedState): AppStateV3 => {
//     const pState = prevState as AppStateV2;
//     delete pState.formsV2['NonEscalatorRelationship'];
//     return {
//       ...pState,
//     };
//   },
// };
