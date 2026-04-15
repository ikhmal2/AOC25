import { input } from "./input";

const dial: number[] = Array.from({ length: 99 }, (val, idx) => idx + 1);
dial.unshift(0);
let currentPos = 50;
let counter = 0;

function addCounter() {
  counter++;
  console.log(`\nCounter: ${counter}\n`);
}

function moreThan100(): number {
  let tempPos = currentPos;
  do {
    tempPos = tempPos - 100;
  } while (tempPos > 99);

  return tempPos;
}

function lessThan100(): number {
  let tempPos = currentPos;
  do {
    tempPos = tempPos + 100;
  } while (tempPos < 0);

  return tempPos;
}

function rotate(rotation: string) {
  let direction = rotation.charAt(0);
  let clicks = Number(rotation.substring(1));

  if (direction === "L") {
    if (currentPos - clicks < 0) {
      currentPos = 100 + (currentPos - clicks);
      if (currentPos < 0) {
        currentPos = lessThan100();
      }
    } else {
      currentPos = currentPos - clicks;
    }
  } else if (direction === "R") {
    if (currentPos + clicks > 99) {
      currentPos = currentPos + clicks - 100;

      if (currentPos > 99) {
        currentPos = moreThan100();
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

// TODO: kena tambah extra check untuk nombor besar contoh kalau dia lebih dari 99 macam 600 takleh la tolak sekali je sebab nanti dapat 500 butoh pak hang
