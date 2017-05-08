import * as React from "react";
import * as ReactDOM from "react-dom";

import "./assets/styles/base.scss";
import App from "./routes";

const { render } = ReactDOM;
const rootEl = document.getElementById("app");

const renderToDOM = (AppContainer?: any, AppComponent = App) => {
  if (AppContainer) {
    render(
      <AppContainer>
        <AppComponent />
      </AppContainer>,
      rootEl
    );
  } else {
    render(<App />, rootEl);
  }
};

renderToDOM();

if (__DEV__ && module.hot) {
  const { AppContainer } = require<any>("react-hot-loader");

  module.hot.accept("./routes/index.tsx", () => {
    const NextApp = require<any>("./routes/index.tsx").default;
    renderToDOM(AppContainer, NextApp);
  });
}
