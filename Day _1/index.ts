import { input } from "./input";
let currentPos = 50;
let counter = 0;

function addCounter() {
  counter++;
  console.log(`====Counter: ${counter}==== \n`);
}

function rotateWheel(rotation: string) {
  const click = Number(rotation.substring(1));
  for (let i = 0; i < click; i++) {
    if (rotation[0] === "L") {
      currentPos -= 1;
      if (currentPos < 0) {
        currentPos = 99;
      }
    } else {
      currentPos += 1;
      if (currentPos > 99) {
        currentPos = 0;
      }
    }

    if (currentPos === 0) {
      addCounter();
    }
  }

  console.log(currentPos);
}

input.forEach((rot) => {
  rotateWheel(rot);
});

console.log(`\nPassword: ${counter}`);
