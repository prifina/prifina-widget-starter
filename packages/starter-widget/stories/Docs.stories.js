import React from "react";

export default { title: "Documentation" };
import { Container } from "../src/components/Container";

const presentationStyle = {
  border: "1px solid blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
};

export const box = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <div style={{ fontSize: 45, marginBottom: 40 }}>
      Widget development process
    </div>
    <a href="https://www.notion.so/prifina/Widget-Development-19e49ad734d4428b9ffb9f0eaab8dcbb">
      Go to original documentation
    </a>
  </div>
);
box.story = {
  name: "Overview",
};

export const box2 = () => (
  <>
    <div style={{ flexDirection: "row", display: "flex" }}>
      <Container variant="small" style={presentationStyle}>
        <div style={{ fontSize: 72 }}>small</div>
      </Container>
      <Container variant="mediumHorizontal" style={presentationStyle}>
        <div style={{ fontSize: 72 }}>mediumHorizontal</div>
      </Container>
    </div>
    <div style={{ flexDirection: "row", display: "flex" }}>
      <Container variant="medium" style={presentationStyle}>
        <div style={{ fontSize: 72 }}>medium</div>
      </Container>
      <Container variant="mediumVertical" style={presentationStyle}>
        <div style={{ fontSize: 72, transform: "rotate(-90deg)" }}>
          mediumVertical
        </div>
      </Container>
    </div>
  </>
);
box2.story = {
  name: "Fixed Containers",
};
