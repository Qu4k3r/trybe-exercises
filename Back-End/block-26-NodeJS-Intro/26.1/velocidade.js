const readline = require("readline-sync");

const findAvgSpeed = () => {
  const space = readline.questionFloat("Give me the distance please (meters): ", "\nPlease, enter a valid number");
  const time = readline.questionFloat("Now, I need the time spent in the process (seconds): ", "\nDude, I've already said it! Valid number! Are you death or something?! WTF!");

  try {
    const avgSpeed = Number(space / time).toFixed(2);
    return `I've found the average speed you asked me, here it is: ${avgSpeed} m/s.`;
  } catch (e) {
    return e;
  }
};

console.log(findAvgSpeed());
