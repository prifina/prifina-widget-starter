/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */
import React from "react";
import ReactDOM from "react-dom";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";

import { LocalComponent } from "./App.js";

const node = document.getElementById("app");

/*
// this is only for local webpack server test  => yarn start
export const LocalComponent = (props) => {
    return (
      <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
        <TimeLine {...props} />
      </PrifinaProvider>
    );
  };

  */
const App = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <LocalComponent data={{}} />
    </PrifinaProvider>
  );
};
ReactDOM.render(<App />, node);
