let favoriteHobby = {
  name: "drawing",
  isIndoor: true,
  weeklyHours: 5,
  tools: ["pen", "tablet"],
  
  getHobbySummary: function() {
    return `My favorite hobby is ${this.name}, and I spend ${this.weeklyHours} hours a week doing it.`;
  }
};

console.log(favoriteHobby.getHobbySummary());

let locationType = favoriteHobby.isIndoor ? "indoor" : "outdoor";

console.log(`I enjoy ${favoriteHobby.name}. It's an ${locationType} hobby. I spend about ${favoriteHobby.weeklyHours} hours per week using tools like: ${favoriteHobby.tools.join(", ")}.`);