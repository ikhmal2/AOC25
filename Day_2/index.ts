/* tslint:disable-next-line */
const input = await Bun.file(new URL("./input.txt", import.meta.url)).text();

const IdPairs: string[] = input.replace(/(\r\n|\n|\r)/gm, "").split(",");

let invalidIDs = 0;

for (let i = 0; i < IdPairs.length; i++) {
  const [x, y] = IdPairs[i].split("-");

  const regExp = /^0[0-9].*$/;

  if (regExp.test(x) || regExp.test(y)) {
    invalidIDs++;
  }

  const ID1 = Number(x);
  const ID2 = Number(y);

  for (let i = ID1; i <= ID2; i++) {
    const currentID = i.toString();
    if (currentID.length % 2 === 0) {
      const x = currentID.slice(0, currentID.length / 2);
      const y = currentID.slice(currentID.length / 2);

      if (x === y) {
        const invalidID = Number(x.concat(y));
        invalidIDs += invalidID;
      }
    }
  }
}

console.log(invalidIDs);
