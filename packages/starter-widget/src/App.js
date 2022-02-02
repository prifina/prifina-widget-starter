import React from "react";
import styled from "styled-components";

import { Container } from "./components/Container";

// unique appID for the app....
const appID = "1u3f465t4cNSWYiyKFVwBG";

const App = () => {
  return (
    <Container
      variant="small"
      style={{
        border: "1px solid blue",
      }}
    >
      Your widget
    </Container>
  );
};

export default App;
