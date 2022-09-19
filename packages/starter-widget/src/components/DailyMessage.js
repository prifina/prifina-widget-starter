import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  calculateTimeToWalk,
  convertMinsToHours,
  stepsToKilometer,
} from "../helpers";
import BodyInfoForm from "./BodyInfoForm";
import YouCanBurnThisManyCalories from "./YouCanBurnThisManyCalories";
import { Getactivity, Getgoals, getUser } from "../data";
import RemainingStepsMessage from "./RemainingStepsMessage";
import ShowWeightHeight from "./ShowWeightHeight";

// Get Withings data
const { firstname } = getUser;
const { steps: dailySteps } = Getactivity;
const { steps: dailyGoal } = Getgoals;

// Average walking speeds

const averageSpeedPerHour = 5;
const validInput = (value) => /^\d+$/.test(value);

const DailyMessage = () => {
  // Store the current weight / height of the user in states
  const [userWeight, setUserWeight] = useState(() => {
    const savedWeight = localStorage.getItem("userWeight");
    const initialWeight = JSON.parse(savedWeight);
    return initialWeight || "";
  });
  const [userHeight, setUserHeight] = useState(() => {
    const savedHeight = localStorage.getItem("userHeight");
    const initialHeight = JSON.parse(savedHeight);
    return initialHeight || "";
  });

  // Get the user input from localStorage
  useEffect(() => {
    localStorage.setItem("userWeight", JSON.stringify(userWeight));
    localStorage.setItem("userHeight", JSON.stringify(userHeight));
  }, [userWeight, userHeight]);

  const handleBodyInfoUpdate = () => {
    setUserWeight("");
    setUserHeight("");
  };

  const validValues = (weight, height) => {
    if (validInput(weight) && validInput(height)) {
      return true;
    } else {
      return false;
    }
  };

  // HELPER FUNCTIONS

  // Calculate how many steps the user still has to reach their goals and estimate the distance in kilometers

  let dailyDifference = dailyGoal - dailySteps;
  let dailyDifferenceInKilometer = stepsToKilometer(dailyDifference).toFixed(1);
  let content;

  // Estimate how long it would take the user to reach their goals
  const estimatedTimeToReachGoal = calculateTimeToWalk(
    averageSpeedPerHour,
    dailyDifferenceInKilometer
  );

  // Estimate, on the basis of speed, weight, time, how many additional calories the user could burn if they were to reach their goals

  const calculateBurnedCalories = (kPH, weight, time) => {
    time = time / 60;
    let kPH3 = kPH * kPH * kPH;
    let kPH2 = kPH * kPH;
    return (
      (0.0215 * kPH3 - 0.1765 * kPH2 + 0.871 * kPH + 1.4577) * weight * time
    );
  };
  const caloriesYouCanBurn = calculateBurnedCalories(
    averageSpeedPerHour,
    userWeight,
    estimatedTimeToReachGoal
  );

  // estimatedTimeToReachGoal variable only shows the duration in minutes. This is to show the duration in HH:MM format to the user.

  const convertMinutesToHours = convertMinsToHours(estimatedTimeToReachGoal);

  return (
    <MainDisplay>
      <div className="greet-message">
        <h3>Hello, {firstname}</h3>
      </div>
      <div className="form">
        {!validValues(userWeight, userHeight) && (
          <BodyInfoForm
            userWeight={userWeight}
            userHeight={userHeight}
            setUserWeight={setUserWeight}
            setUserHeight={setUserHeight}
          />
        )}
      </div>
      {validValues(userWeight, userHeight) && (
        <div className="body-info">
          <ShowWeightHeight
            userWeight={userWeight}
            userHeight={userHeight}
            handleBodyInfoUpdate={handleBodyInfoUpdate}
          />
        </div>
      )}

      <RemainingStepsMessage
        dailyGoal={dailyGoal}
        dailySteps={dailySteps}
        dailyDifference={dailyDifference}
        dailyDifferenceInKm={dailyDifferenceInKilometer}
        content={content}
      />

      {validValues(userWeight, userHeight) && (
        <YouCanBurnThisManyCalories
          userWeight={userWeight}
          userHeight={userHeight}
          dailyDifference={dailyDifference}
          caloriesYouCanBurn={caloriesYouCanBurn}
          estimatedTimeToReachGoal={convertMinutesToHours}
        />
      )}
    </MainDisplay>
  );
};

const MainDisplay = styled.div`
  .greet-message {
    color: #eee;
    height: 10px;
    width: 100%;
    margin-top: -40px;
    margin-bottom: 50px;

    font-size: 20px;
    font-weight: 700;
  }
`;

export default DailyMessage;
