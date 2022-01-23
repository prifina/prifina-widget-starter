import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data as sleepData } from "./data";

const Container = styled.div`
  height: 300px;
  font-size: 14px;
  width: 300px;
  padding: 5px;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
`;

// unique appID for the widget....
const appID = "866fscSq5Ae7bPgUtb6ffB";

const MySleep = (props) => {
  const { data } = props;

  let heartRates = [];
  for (let i = 1; i < sleepData.length; i++) {
    heartRates.push({
      time: new Date(sleepData[i][1]).toLocaleTimeString(),
      ["value_" + sleepData[i][3]]: parseInt(sleepData[i][2]),
    });
  }
  console.log(heartRates);
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={heartRates}>
          <CartesianGrid />
          <XAxis dataKey="time" />
          <YAxis />
          <Legend />
          <Brush dataKey="time" height={30} stroke="#8884d8" />
          <Bar name="wake" dataKey="value_wake" fill="#8884d8" />
          <Bar name="light" dataKey="value_light" fill="#ff7300" />
          <Bar name="rem" dataKey="value_rem" fill="#82ca9d" />
          <Bar name="deep" dataKey="value_deep" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
MySleep.displayName = "MySleep";

export default MySleep;
