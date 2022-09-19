import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import WeightHeightForm from "./WeightHeightForm";

const validInput = (value) => /^\d+$/.test(value);

const BodyInfoForm = ({
  userWeight,
  userHeight,
  setUserWeight,
  setUserHeight,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const weightRef = useRef("");
  const heightRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserWeight(weightRef.current.value);
    setUserHeight(heightRef.current.value);
    weightRef.current.value = "";
    heightRef.current.value = "";
    const weightIsValid = validInput(userWeight);
    const heightIsValid = validInput(userHeight);
    if (weightIsValid && heightIsValid) {
      setFormIsValid(true);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(true);
    }
  };

  console.log(formIsValid);

  return (
    <Content>
      {!formSubmitted && (
        <WeightHeightForm
          handleSubmit={handleSubmit}
          weightRef={weightRef}
          heightRef={heightRef}
        />
      )}
      {formSubmitted && !formIsValid && <WeightHeightForm />}
    </Content>
  );
};

const Content = styled.div``;

export default BodyInfoForm;
