import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";

import { Container } from "./components/Container";

// unique appID for the app....
const appID = "1u3f465t4cNSWYiyKFVwBG";

const MyWidget = () => {
  // init hook and get provider api services...

  return (
    <Container variant="small" style={{ border: "1px solid blue" }}>
      <div>Stage 1 </div>
    </Container>
  );
};

export default MyWidget;
