import { input } from "./input";

let currentPos = 50;
let counter = 0;

function addCounter() {
  counter++;
  console.log(`\nCounter: ${counter}\n`);
}

function checkWithin100(): number {
  let tempPos = currentPos;

  if (tempPos > 99) {
    do {
      tempPos = tempPos - 100;
    } while (tempPos > 99);

    return tempPos;
  } else if (tempPos < 0) {
    let tempPos = currentPos;
    do {
      tempPos = tempPos + 100;
    } while (tempPos < 0);

    return tempPos;
  } else {
    return 0;
  }
}

function rotate(rotation: string) {
  let direction = rotation.charAt(0);
  let clicks = Number(rotation.substring(1));

  if (direction === "L") {
    if (currentPos - clicks < 0) {
      currentPos = 100 + (currentPos - clicks);
      if (currentPos < 0) {
        currentPos = checkWithin100();
      }
    } else {
      currentPos = currentPos - clicks;
    }
  } else if (direction === "R") {
    if (currentPos + clicks > 99) {
      currentPos = currentPos + clicks - 100;

      if (currentPos > 99) {
        currentPos = checkWithin100();
      }
    } else {
      currentPos = currentPos + clicks;
    }
  }
  console.log(`Input: ${rotation}, Current Position: ${currentPos}`);
}

input.forEach((rot) => {
  rotate(rot);
  if (currentPos === 0) {
    addCounter();
  }
});

console.log(`\nPassword: ${counter}`);
