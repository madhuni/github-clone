import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

export default function configureAppStore(preloadedState) {
  const middleware = [...getDefaultMiddleware()];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState,
  });

  // this is done for hot module reloading
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
