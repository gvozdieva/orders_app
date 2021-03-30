import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/rootReducer';
import * as sagas from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const sagaConnect = () => Object.values(sagas).map(saga => sagaMiddleware.run(saga));

const composeEnhancers = (typeof window === 'object')
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
  applyMiddleware(
    sagaMiddleware
  )
);

const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(reducers);

sagaConnect();

export default store;