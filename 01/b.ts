export {};

const elves = Deno.readTextFileSync("./input.txt").split("\n\n");

const lines = elves.map((line, i) => {
  const data = line.split("\n").map((num) => parseInt(num));
  const sum = data.reduce((a, b) => a + b);
  return {
    i,
    data,
    sum,
  };
});

lines.sort((a, b) => b.sum - a.sum);

console.log(lines[0].sum + lines[1].sum + lines[2].sum);
