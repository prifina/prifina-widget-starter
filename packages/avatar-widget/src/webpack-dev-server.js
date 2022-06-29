/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import React from "react";
import ReactDOM from "react-dom";

import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";

import LocalComponent from "./index.js";

const node = document.getElementById("app");

const App = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <LocalComponent data={{}} />
    </PrifinaProvider>
  );
};
ReactDOM.render(<App />, node);
