import React from "react";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";
import AvatarWidget from "./AvatarWidget";

// this is only for local webpack server test  => yarn start
export const LocalComponent = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <AvatarWidget stage={"dev"} score={78} {...props} />
    </PrifinaProvider>
  );
};
