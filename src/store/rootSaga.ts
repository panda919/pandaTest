import { all, call, AllEffect, CallEffect } from 'redux-saga/effects';

import authSaga from '@modules/auth/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield all([call(authSaga)]);
}
