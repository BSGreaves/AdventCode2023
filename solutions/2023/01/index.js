export const parseInput = (input) => input.split('\n')

export const part1 = (input) => {
  console.log(input);
  const numbers = input.map(i => {
    let n = i.match(/(\d+)/g).flatMap(x => x.split(''));
    if (n.length === 1) n[1] = n[0];
    n = n[0].toString() + n[n.length - 1].toString();
    return n;
  });
  return numbers.reduce((current, next) => current + parseInt(next), 0)
}

export const part2 = (input) => {
  // console.log("Input 2", input);
  return
}
