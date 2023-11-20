const woData = require("../woData.json");

export default class WorkoutRoutine {
  constructor(targets) {
    this.targets = [...targets].map((c) => c.toLowerCase());
    this.possibleWorkouts = this.filterWOs();
    this.currentRoutine = this.getRandomWorkouts();
  }

  newRoutine() {
    this.currentRoutine = this.getRandomWorkouts();
  }

  filterWOs() {
    let possibleWorkoutsObj = {};
    this.targets.map((c) => (possibleWorkoutsObj[c] = []));
    return woData.reduce(
      (a, c) => {
        if (this.targets.includes(c.target)) {
          let tempArr = [...a[c.target]];
          tempArr.push(c);
          let tempObj = { ...a };
          tempObj[c.target] = tempArr;
          return tempObj;
        } else {
          return a;
        }
      },
      { ...possibleWorkoutsObj }
    );
  }

  getRandomWorkouts() {
    let randomWorkouts = [];
    for (let i in this.targets) {
      const thisTarget = this.targets[i];
      const randomIndex = Math.floor(
        Math.random() * this.possibleWorkouts[thisTarget].length
      );
      randomWorkouts.push(this.possibleWorkouts[thisTarget][randomIndex]);
    }
    return randomWorkouts;
  }

  reroll(current, index) {
    let randomWorkouts = [...this.currentRoutine];
    const possibleWorkouts = this.possibleWorkouts[current.target];
    const newIndex = Math.floor(Math.random() * possibleWorkouts.length);
    const newExercise = possibleWorkouts[newIndex];
    randomWorkouts[index] = newExercise;
    this.currentRoutine = randomWorkouts;
  }
}
