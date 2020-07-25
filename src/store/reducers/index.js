import { combineReducers } from 'redux';

// Importing the baseReducer. Later on we can create multiple reducers and those can
// be combined together to creat the `appStore` for the overall application.

import baseReducer from './base.reducer';

const appStore = combineReducers({
  base: baseReducer,
});

export default appStore;
