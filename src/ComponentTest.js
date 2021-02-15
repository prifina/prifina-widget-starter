import React, { useEffect } from "react";
import { useRemoteComponent } from "./useRemoteComponent";

//const url = "http://alpha.mobile-storybook.prifina.com/index.js";

export const ComponentTest = ({ url, ...props }) => {
  console.log("COMPONENT URL ", url);
  const [loading, err, Component] = useRemoteComponent(url);
  /*
  useEffect(() => {
    if (loading) {
      console.log("Still loading... ");
    } else {
      console.log("Componend loaded ");
    }
    if (err !== null) {
      console.log("ERRORS ", err);
    }
  }, [loading, err, Component]);

  return [];
  */

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err != null) {
    console.log("REMOTE ERROR ", err);
    return (
      <React.Fragment>
        <div>Unknown Error: {err.toString()}</div>
        <div>Invalid URL {url} or Possible CORS problem.</div>
        <div>Check Browser console for more informations...</div>
      </React.Fragment>
    );
  }
  //console.log("COMPONENT ", Component);
  return <Component {...props} />;
};
