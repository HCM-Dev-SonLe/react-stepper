import React from "react";
import ReactDOM from "react-dom";

import MainPage from "containers/MainPage";
import "./index.css";

const App = () => {
  return <MainPage />;
};

ReactDOM.render(<App />, document.getElementById("root"));
