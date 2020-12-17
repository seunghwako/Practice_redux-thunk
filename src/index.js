// 프로젝트에 리덕스 적용
// 프로젝트에 리덕스를 적용할 때는 src 디렉토리에 index.js에서
// 루트 리듀서를 불러와서 이를 통해 새로운 스토어를 만들고 Provider를 사용하여 적용한다
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

// logger를 사용하는 경우 logger가 가장 마지막에 와야함
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
