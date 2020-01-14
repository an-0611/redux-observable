import { createStore, applyMiddleware, compose } from 'redux'

// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import { fetchHero } from './components/fetchHero';
import { fetchHeroDetail } from './components/fetchHeroDetail';

import reducers from './reducers'

export default function configureStore(client, history, initialState) {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  // const middlewares = [thunk];
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    initialState,
    /* preloadedState*/
    composeEnhancers(
      // applyMiddleware(...middlewares), // thunk
      applyMiddleware(sagaMiddleware)
      // applyMiddleware(client.middleware()),
      // autoRehydrate(),
    ),
  );

  sagaMiddleware.run(fetchHero);
  sagaMiddleware.run(fetchHeroDetail);

  return store;
}