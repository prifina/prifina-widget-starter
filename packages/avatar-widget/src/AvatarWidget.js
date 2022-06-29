import React, { useEffect, useState } from "react";

import { usePrifina, Op } from "@prifina/hooks";

import Oura from "@prifina/oura";

import { Container } from "./components/Container";
import ReactThreeVisor from "./components/ReactThreeVisor";

const appID = "ujWBeKugg514AVaE4UyaDq";

const AvatarWidget = (props) => {
  const stage = props.stage || "dev";

  const { onUpdate, API, registerHooks } = usePrifina();

  const [ouraScore, setOuraScore] = useState("");

  const processData = (data) => {
    console.log("OURA SCORE PROCESS DATA", data);
    setOuraScore(data);
  };

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    // if (
    //   payload.hasOwnProperty("data") &&
    //   payload.data.hasOwnProperty("content")
    // ) {
    //   // process async data
    //   if (
    //     payload.data.dataconnector === "Oura/queryReadinessSummary" &&
    //     payload.data.content.length > 1
    //   ) {
    //     processData(payload.data.content);
    //   }
    // }
  };

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [Oura]);

    const d = new Date();
    const dd = d.setDate(d.getDate() - 1);

    const dateStr = new Date(dd).toISOString().split("T")[0];

    const filter = {
      ["s3::date"]: {
        [Op.eq]: dateStr,
      },
    };

    const activityResult = await API[appID].Oura.queryReadinessSummary({
      filter: filter,
      fields: "score",
    });
    console.log("hehe", activityResult);

    if (stage === "dev") {
      processData(activityResult.data.getDataObject.content.score);
    }
  }, []);

  const superCharged =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/SurperCharged.fbx";
  const alertState =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/AlertState.fbx";
  const wellRecovered =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/WellRecovered.fbx";
  const idle =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/Idle.fbx";
  const payAttention =
    "https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/PayAttention.fbx";

  let status = idle;

  // ŌURA: 85 or higher: optimal - you’re ready for action >>> BODYGEE: SUPERCHARGED avatar
  // ŌURA: 70-84: Good, you’ve recovered well enough >>> BODYGEE: WELL-RECOVERED avatar
  // ŌURA: 69 - 65: Pay attention, you’re not fully recovered >>> BODYGEE: PAY ATTENTION avatar
  // ŌURA: <65: Alert state: this is an new stage we introduced >>> BODYGEE: ALERT STATE avatar

  let score = ouraScore;

  let color = "yellow";

  switch (true) {
    case score <= 64:
      status = alertState;
      color = "firebrick";
      break;
    case score >= 65 && score <= 69:
      status = payAttention;
      color = "khaki";
      break;
    case score >= 70 && score <= 84:
      status = wellRecovered;
      color = "mediumseagreen";
      break;
    case score >= 85:
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
        {ouraScore}
      </div>
    </Container>
  );
};

export default AvatarWidget;
