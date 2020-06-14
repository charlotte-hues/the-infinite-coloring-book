import React from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./shared/localStorage";

import authReducer from "./store/reducers/auth";
import savedPatternsReducer from "./store/reducers/savedPatterns";
import currentPatternReducer from "./store/reducers/currentPattern";
import patternEditingReducer from "./store/reducers/patternEditing";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootReducer = combineReducers({
  auth: authReducer,
  savedPatterns: savedPatternsReducer,
  currentPattern: currentPatternReducer,
  patternEditing: patternEditingReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    currentPattern: store.getState().currentPattern,
    auth: store.getState().auth
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
