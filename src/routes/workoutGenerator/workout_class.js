import capitalize from "../../utils/capitalize";
const woData = require("./woData.json");

function filterWOs(targets) {
  let possibleWorkoutsObj = {};
  targets.map((c) => (possibleWorkoutsObj[c] = []));
  const targetString = targets.join(",");
  return woData.reduce(
    (a, c) => {
      const thisTarget = capitalize(c.target);
      if (targetString.includes(thisTarget)) {
        let tempArr = [...a[thisTarget]];
        tempArr.push(c);
        let tempObj = { ...a };
        tempObj[thisTarget] = tempArr;
        return tempObj;
      } else {
        return a;
      }
    },
    { ...possibleWorkoutsObj }
  );
}

function getRandomWorkouts(filteredWOs, woTargets) {
  let randomWorkouts = [];
  for (let i in woTargets) {
    const thisTarget = woTargets[i];
    const randomIndex = Math.floor(
      Math.random() * filteredWOs[thisTarget].length
    );
    randomWorkouts.push(filteredWOs[thisTarget][randomIndex]);
  }
  return randomWorkouts;
}

export default class WorkoutRoutine {
  constructor(targets) {
    console.log("TARRGESRS", targets);
    this.possibleWorkouts = filterWOs(targets);
    this.currentRandomWorkout = getRandomWorkouts(
      this.possibleWorkouts,
      targets
    );
  }
  getPossibleWorkouts() {
    return this.possibleWorkouts;
  }
  getCurrentWOrkouts() {
    return this.currentRandomWorkout;
  }
}
