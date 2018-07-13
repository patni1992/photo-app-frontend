import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

export const history = createHistory();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(routerMiddleware(history), thunk)
  );

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./redux/reducers", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
