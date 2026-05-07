/* tslint:disable-next-line */
const input = await Bun.file(new URL("./input.txt", import.meta.url)).text();

const IdPairs: string[] = input.replace(/(\r\n|\n|\r)/gm, "").split(",");

let invalidIDs = 0;

function findInvalidSequence() {
  for (let i = 0; i < IdPairs.length; i++) {
    const [x, y] = IdPairs[i].split("-");

    const regExp = /^(.+?)( ?\1)+$/;

    const ID1 = Number(x);
    const ID2 = Number(y);

    for (let i = ID1; i <= ID2; i++) {
      const currentID = i.toString();
      if (regExp.test(currentID)) {
        invalidIDs += i;
      }
    }
  }
  console.log(invalidIDs);
}

findInvalidSequence();
