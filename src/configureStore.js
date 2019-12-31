import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducers'

export default function configureStore(client, history, initialState) {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const middlewares = [thunk];

  const store = createStore(
    reducers,
    initialState,
    /* preloadedState*/
    composeEnhancers(
      applyMiddleware(...middlewares),
      // applyMiddleware(client.middleware()),
      // autoRehydrate(),
    ),
  );
  return store;
}