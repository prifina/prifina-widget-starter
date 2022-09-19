import React from "react";
import styled from "styled-components";

const ShowWeightHeight = ({ userWeight, userHeight, handleBodyInfoUpdate }) => {
  return (
    <WeightHeight>
      <h4>{userWeight}kg</h4>
      <h4>{userHeight}cm</h4>
      <button className="submit" onClick={handleBodyInfoUpdate}>
        Change
      </button>
    </WeightHeight>
  );
};

const WeightHeight = styled.div`
  color: #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -20px;
  text-transform: uppercase;
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 30px;
    width: 100px;
`;

export default ShowWeightHeight;
