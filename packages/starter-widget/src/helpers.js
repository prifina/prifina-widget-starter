export const stepsToKilometer = (steps) => {
  return steps / 1312.33595801;
};

// Formula to calculate the average amount of calories a person burns per minute by walking
export const caloriesBurnedWalkingPerMinute = (
  userWeight,
  userHeight,
  velocity,
  result
) => {
  let userWeight2 = userWeight * 0.035;
  let velocity2 = velocity * velocity;
  let divideResultByVelocity = velocity2 / userHeight;
  let weightPlusVelocity2 = userWeight2 + divideResultByVelocity;
  result = weightPlusVelocity2 * 0.029 * userWeight;
  return result;
};

// Formula to calculate the average amount of calories a person burns per hour

export const caloriesBurnedWalking = (perMinute, estimatedTimeToReachGoal) => {
  return perMinute * estimatedTimeToReachGoal;
};

export const calculateTimeToWalk = (speed, distance, time) => {
  time = distance / speed;
  return time * 60;
};

export const convertMinsToHours = (minutes) => {
  let h = Math.floor(minutes / 60);
  let m = (minutes % 60).toFixed(0);
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return h + ":" + m;
};
