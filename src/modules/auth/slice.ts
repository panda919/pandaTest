import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CallbacksActionType } from '@models/utils';

export const INITIAL_STATE: LoginStateType = {
  loggingIn: false,
  loggingInError: false,
};

export type LoginStateType = {
  loggingIn: boolean;
  loggingInError: boolean;
};

export type LoginRequestActionType = PayloadAction<{
  email: string;
  password: string;
  onSuccess: () => void;
  onError: (err: string) => void;
}>;

export type RegisterRequestActionType = CallbacksActionType<{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsLetter: boolean;
  phone: string;
}>;

const loginSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    loginRequest(state, _action: LoginRequestActionType) {
      state.loggingIn = true;
      state.loggingInError = false;
    },
    registerRequest(state, _action: RegisterRequestActionType) {
      state.loggingIn = true;
      state.loggingInError = false;
    },
    loginSuccess(state) {
      state.loggingIn = false;
      state.loggingInError = false;
    },
    loginError(state) {
      state.loggingIn = false;
      state.loggingInError = true;
    },
    resetLoginStatus(state) {
      state.loggingIn = false;
      state.loggingInError = false;
    },
  },
});

export const { loginRequest, loginSuccess, registerRequest, loginError, resetLoginStatus } =
  loginSlice.actions;

export default loginSlice.reducer;
