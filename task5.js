class Hobby {
  constructor(name, isIndoor, weeklyHours) {
    this.name = name;
    this.isIndoor = isIndoor;
    this.weeklyHours = weeklyHours;
  }

  describe() {
    let activityType = this.isIndoor ? "indoor" : "outdoor";
    console.log(`My hobby is ${this.name}. It's an ${activityType} activity, and I spend ${this.weeklyHours} hours a week on it.`);
  }
}

let hobby1 = new Hobby("running", true, 4);
let hobby2 = new Hobby("gaming", false, 8);

hobby1.describe();
hobby2.describe();