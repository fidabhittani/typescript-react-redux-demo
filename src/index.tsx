import "semantic-ui-css/semantic.min.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";

const WrapApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<WrapApp />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
