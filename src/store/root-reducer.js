import { combineReducers } from '@reduxjs/toolkit';
import { reducer as connectReducer } from '../slices/connect';

export const rootReducer = combineReducers({
  connect: connectReducer,
});
