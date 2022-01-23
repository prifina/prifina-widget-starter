import React from "react";
import { addDecorator, addParameters } from "@storybook/react";

import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";
/*
import { ThemeProvider } from "@blend-ui/core";

//<ThemeProvider mobileApp={true}>
const themeProviderDecorator = (story) => (
  <ThemeProvider>{story()}</ThemeProvider>
);

addDecorator(themeProviderDecorator);
*/

//<ThemeProvider mobileApp={true}>
const themeProviderDecorator = (story) => (
  <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
    {story()}
  </PrifinaProvider>
);

addDecorator(themeProviderDecorator);
