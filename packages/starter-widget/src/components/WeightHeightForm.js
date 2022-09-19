import React from "react";
import styled from "styled-components";

const WeightHeightForm = ({ handleSubmit, weightRef, heightRef }) => {
  return (
    <SubmitForm onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="input"
          ref={weightRef}
          type="text"
          id="weight"
          name="weight"
          placeholder=" "
        />
        <div className="cut"> </div>
        <label htmlFor="weight" className="placeholder">
          Weight in KG (e.g. 76)
        </label>
      </div>

      <div className="input-container">
        <input
          className="input"
          ref={heightRef}
          type="text"
          id="height"
          name="height"
          placeholder=" "
        />
        <div className="cut"> </div>
        <label htmlFor="weight" className="placeholder">
          Height in CM (e.g. 175)
        </label>
      </div>
      <button className="submit">Save</button>
    </SubmitForm>
  );
};

const SubmitForm = styled.form`
  background-color: #100f0f;
  border-radius: 20px;
  box-sizing: border-box;
  height: 190px;
  padding: 20px;
  width: 275px;
  margin-top: -20px;

  margin-bottom: -5px;

  .input-container {
    height: 40px;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 10px 0;
    width: 100%;
  }
  .cut {
    border-radius: 10px;
    height: 10px;
    left: 10px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }
  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 12px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 15px;
  }
  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }

  .input:focus ~ .placeholder {
    color: #dc2f55;
  }
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 30px;

    // outline: 0;
    text-align: center;
    width: 100%;
    margin-top: -4px;
  }

  .submit:active {
    background-color: #06b;
  }
`;

export default WeightHeightForm;
