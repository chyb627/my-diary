import { createSlice } from '@reduxjs/toolkit';
import { authTest } from '../actions/auth';

interface AuthState {
  token: string | null;
  authTestLoading: boolean;
  authTestDone: boolean;
  authTestError: Error | null;
}

export const initialState: AuthState = {
  token: null,
  authTestLoading: false,
  authTestDone: false,
  authTestError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // plus: (state) => {
    //   state.value += 1;
    // },
    // minus: (state) => {
    //   state.value -= 1;
    // },
  },
  extraReducers: (builder) =>
    builder
      // authTest
      .addCase(authTest.pending, (state) => {
        state.authTestLoading = true;
        state.authTestDone = false;
        state.authTestError = null;
      })
      .addCase(authTest.fulfilled, (state, action) => {
        state.authTestLoading = false;
        state.authTestDone = true;
        // state.authData = action.payload;
      })
      .addCase(authTest.rejected, (state, action: any) => {
        state.authTestLoading = false;
        state.authTestError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

// export const { plus, minus } = authSlice.actions;
export default authSlice;
