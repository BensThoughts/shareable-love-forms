import {
  createSlice,
  // createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';

export type User = {
  userName: string;
  userId: string;
}

export type UserSlice = {
  schemaVersion: number;
  schemaVersionDate: string;
  user?: User;
};

const initialState: UserSlice = {
  schemaVersion: 0,
  schemaVersionDate: '2022-01-22',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserMetadata(state, action: PayloadAction<{
      userName: string;
      userId: string;
    }>) {
      const userName = action.payload.userName;
      const userId = action.payload.userId;
      return {
        ...state,
        userMetadata: {
          userName,
          userId,
        },
      };
    },
  },
});

export default userSlice.reducer;
