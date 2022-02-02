import React from "react";
import MyWidget from "../src/MyWidget";

export default { title: "MyWidget" };

export const app = () => <MyWidget />;

app.story = {
  name: "MyWidget",
};
