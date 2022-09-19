import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePrifina } from "@prifina/hooks";

import { Container } from "./components/Container";

import DailyMessage from "./components/DailyMessage";

// unique appID for the app....
const appID = "snPAnMTrYtkgfzzPFoqXzz";

const MyWidget = (props) => {
  return (
    <Container variant="small" style={{ border: "1px solid" }}>
      <div className="main">
        <DailyMessage />
      </div>
    </Container>
  );
};

export default MyWidget;
