import React from "react";
import styled from "styled-components";

const YouCanBurnThisManyCalories = ({
  userHeight,
  userWeight,
  dailyDifference,
  estimatedTimeToReachGoal,
  caloriesYouCanBurn,
}) => {
  let message;
  if (userHeight && userWeight && dailyDifference > 0) {
    message = (
      <div>
        <div className="paragraph">
          <p>Estimated time it would take: {estimatedTimeToReachGoal}</p>
        </div>
        <div className="paragraph">
          <p>
            By reaching your goal, you can burn ≈{caloriesYouCanBurn.toFixed(0)}{" "}
            calories.
          </p>
        </div>
      </div>
    );
  } else if (userHeight && userWeight && dailyDifference < 0) {
    message = (
      <p>
        Congrats! You may have burned around{" "}
        {Math.abs(caloriesYouCanBurn.toFixed(0))} calories more!
      </p>
    );
  } else {
    return null;
  }
  return <Message>{message}</Message>;
};

const Message = styled.div`
  color: #eee;
  margin-top: 10px;

  .paragraph {
    margin-top: 10px;
  }
`;

export default YouCanBurnThisManyCalories;
