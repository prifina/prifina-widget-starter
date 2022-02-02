import React from "react";
import App from "../src/App";
import MyWidget from "../src/MyWidget";

export default { title: "MyWidget" };

export const app = () => <MyWidget />;

app.story = {
  name: "MyWidget",
};
