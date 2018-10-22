import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./Reducer";
import sagas from "./Saga";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];
if (__DEV__ === true) {
  middlewares.push(createLogger({}));
}

function configureStore(onCompletion: () => void): any {
  const store = createStore(reducer, compose(
    applyMiddleware(...middlewares)
  ));

  sagaMiddleware.run(sagas);

  return store;
}

export default store = configureStore(() => {});
