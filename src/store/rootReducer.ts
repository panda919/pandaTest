import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@modules/auth/slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
