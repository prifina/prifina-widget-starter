import React, { useState } from "react";
import "./App.css";
import { RemoteComponent } from "./RemoteComponent";
import { ComponentTest } from "./ComponentTest";

import { PrifinaProvider } from "@prifina/hooks";

export function checkUrl(url) {
  return new Promise(function (resolve, reject) {
    console.log("CHECK URL ", url);
    try {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      /*
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      );
      xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
    */
      xhr.onreadystatechange = function () {
        //console.log("XHR ", xhr);
        if (xhr.readyState === 4) {
          //console.log("XHR state 4 ", xhr);
          if (xhr.status >= 200 && xhr.status < 400) {
            //console.log(xhr.responseText);
            // this is commonjs ====require("react")
            resolve(true);
          } else {
            // status===0 is most likely invalid url...
            resolve(false);
          }
        }
      };
      xhr.onerror = function () {
        // this doesn't show any error msg
        resolve(false);
      };

      xhr.send();
    } catch (e) {
      console.log("ERR ", e);
      resolve(false);
    }
  });
}

function App() {
  //console.log("ENV ", process.env);
  const [remoteUrl, setRemoteUrl] = useState(
    process.env.REACT_APP_REMOTE_URL || ""
  );
  const [checkMsg, setCheckMsg] = useState("");
  console.log("REMOTE URL ", remoteUrl);
  return (
    <div className="App">
      <header className="App-header">Prifina app launcher</header>
      <div style={{ marginTop: "10px" }}>
        <PrifinaProvider>
          {remoteUrl !== "" && (
            <RemoteComponent url={remoteUrl} fallback={<div>Testing...</div>} />
          )}
          {remoteUrl === "" && (
            <React.Fragment>
              <div>No remote component....</div>
              <input
                type="text"
                id={"remoteComponent"}
                defaultValue={remoteUrl}
              />
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  const url = document.getElementById("remoteComponent").value;
                  //setRemoteUrl(e.target.value)
                  setCheckMsg("");
                  checkUrl(url)
                    .then((exists) => {
                      console.log("EXISTS ...", exists);
                      if (exists) {
                        setRemoteUrl(url);
                      } else {
                        setCheckMsg(
                          "Url is not valid, possible CORS problem..."
                        );
                      }
                    })
                    .catch((e) => {
                      setCheckMsg("Url is not valid, possible CORS problem...");
                    });
                }}
              >
                Get component
              </button>
              <div style={{ marginTop: "10px" }}>
                {checkMsg === "" && checkMsg}
              </div>
            </React.Fragment>
          )}
        </PrifinaProvider>
      </div>
    </div>
  );
}

export default App;
