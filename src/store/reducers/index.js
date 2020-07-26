import { combineReducers } from 'redux';

import repositoriesReducer from './repositories.reducer';

const appStore = combineReducers({
  repos: repositoriesReducer,
});

export default appStore;
