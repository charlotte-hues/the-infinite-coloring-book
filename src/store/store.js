import { createStore, applyMiddleware, compose } from "redux";

import { loadState, saveState } from "../shared/localStorage";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const persistedState = loadState();

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    currentPattern: store.getState().currentPattern,
    redirect: store.getState().redirect
  });
});

export default store;
