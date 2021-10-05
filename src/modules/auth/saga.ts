import { takeLatest, ForkEffect, call, delay, put } from 'redux-saga/effects';

import { loginError, LoginRequestActionType, loginSuccess, loginRequest } from './slice';

export function* login(action: LoginRequestActionType): Generator {
  try {
    yield put(loginSuccess());
    yield delay(350);
    yield call(action.payload.onSuccess);

    // Initiate refresh token request.
  } catch (error) {
    yield put(loginError());
  }
}
export default function* authSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(loginRequest.type, login);
}
