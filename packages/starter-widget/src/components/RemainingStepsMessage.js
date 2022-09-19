import React from "react";
import styled from "styled-components";

const RemainingStepsMessage = ({
  content,
  dailyGoal,
  dailySteps,
  dailyDifference,
  dailyDifferenceInKm,
}) => {
  if (dailyDifference > 0) {
    content = (
      <p>
        You have {dailyDifference} steps (≈{dailyDifferenceInKm} km) to reach
        your daily goal.
      </p>
    );
  }
  if (dailyDifference < 0) {
    content = (
      <p>
        Seems like you've passed your daily goal by {Math.abs(dailyDifference)}{" "}
        steps !
      </p>
    );
  }
  if (dailyGoal === dailySteps) {
    content = <p>You've reached your daily goal!</p>;
  }
  return <Content>{content}</Content>;
};

const Content = styled.div`
  color: #eee;
`;

export default RemainingStepsMessage;
