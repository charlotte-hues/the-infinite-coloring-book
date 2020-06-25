import { createStore, applyMiddleware, compose } from "redux";

import { loadState, saveState } from "../shared/localStorage";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedState = loadState();

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
