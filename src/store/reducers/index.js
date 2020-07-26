import { combineReducers } from 'redux';

import profileReducer from './profile.reducer';
import repositoriesReducer from './repositories.reducer';

const appStore = combineReducers({
  profile: profileReducer,
  repos: repositoriesReducer,
});

export default appStore;
