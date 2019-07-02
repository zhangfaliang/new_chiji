import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger'

import rootReducer from "../reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware,createLogger()];
export default function configStore() {
  // mount it on the Store
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  // then run the saga
  sagaMiddleware.run(rootSaga);
  return store;
}

