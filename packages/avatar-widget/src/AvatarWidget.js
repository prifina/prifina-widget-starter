import React, { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { usePrifina, Op } from "@prifina/hooks";

import Oura from "@prifina/oura";

import { Container } from "./components/Container";
import ReactThreeVisor from "./components/ReactThreeVisor";

const appID = "ujWBeKugg514AVaE4UyaDq";

const AvatarWidget = (props) => {
  const [ouraScore, setOuraScore] = useState("");

  const processData = (data) => {
    console.log("OURA SCORE PROCESS DATA", data);
    setOuraScore(data);
  };

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/queryActivitySummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processData(payload.data.content);
      }
    }
  };

  // @ts-ignore
  const { onUpdate } = usePrifina();

  useEffect(async () => {
    // init callback function for background updates/notifications
    // onUpdate(appID, dataUpdate);
    // register datasource modules
    // registerHooks(appID, [Oura]);

    const d = new Date();
    const dd = d.setDate(d.getDate() - 14);
    const dateStr = new Date(dd).toISOString().split("T")[0];

    const filter = {
      ["s3::date"]: {
        [Op.gte]: dateStr,
      },
    };

    // const activityResult = await API[appID].Oura.querySleepSummariesAsync({
    //   filter: filter,
    //   fields: "score",
    // });
    // console.log(activityResult);
    // if (stage === "dev") {
    //   processData(activityResult.data.getDataObject.content[1]);
    // }
  }, []);

  const superCharged =
    "https://mytestingbucket12421512.s3.us-east-2.amazonaws.com/SurperCharged.fbx";

  const alertState =
    "http://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/9brToavkqopa3PzLcF2yBT/native-assets/AlertState.fbx";
  const wellRecovered =
    "https://mytestingbucket12421512.s3.us-east-2.amazonaws.com/WellRecovered.fbx";
  const idle =
    "https://mytestingbucket12421512.s3.us-east-2.amazonaws.com/Idle.fbx";
  const payAttention =
    "https://mytestingbucket12421512.s3.us-east-2.amazonaws.com/PayAttention.fbx";

  let status = idle;

  // ŌURA: 85 or higher: optimal - you’re ready for action >>> BODYGEE: SUPERCHARGED avatar
  // ŌURA: 70-84: Good, you’ve recovered well enough >>> BODYGEE: WELL-RECOVERED avatar
  // ŌURA: 69 - 65: Pay attention, you’re not fully recovered >>> BODYGEE: PAY ATTENTION avatar
  // ŌURA: <65: Alert state: this is an new stage we introduced >>> BODYGEE: ALERT STATE avatar

  let score = 68;

  let color = "yellow";

  switch (score) {
    case 64:
      status = alertState;
      color = "firebrick";
      break;
    case 68:
      status = payAttention;
      color = "khaki";
      break;
    case 82:
      status = wellRecovered;
      color = "mediumseagreen";
      break;
    case 90:
      status = superCharged;
      color = "powderblue";
      break;
    default:
      status = idle;
      color = "gray";
  }

  let cameraPosition = {
    x: 0,
    y: 95,
    z: 450,
  };
  console.log("SCORE", score);

  return (
    <Container
      variant="small"
      style={{
        border: `5px solid ${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <ReactThreeVisor
        id="canvas"
        cameraPosition={cameraPosition}
        url={status}
        backgroundColor={color}
      />
      <div
        style={{
          position: "absolute",
          left: 25,
          bottom: 25,
          fontSize: 32,
          fontWeight: 800,
        }}
      >
        62
      </div>
    </Container>
  );
};

export default AvatarWidget;
