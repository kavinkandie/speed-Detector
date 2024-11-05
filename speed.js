const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator(speed) {
  if (speed <= 70) {
    return "OK";
  } else {
    let newSpeed = speed - 70;
    let demeritPoints = Math.floor(newSpeed / 5);
    if (demeritPoints <= 12) {
      return demeritPoints;
    } else {
      return "License suspended";
    }
  }
}

rl.question("Enter speed: ", (input) => {
  const speed = parseInt(input);
  console.log(calculator(speed));
  rl.close();
});
