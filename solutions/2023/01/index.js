export const parseInput = (input) => input.split('\n')

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

export const part1 = (input) => {
  const numbers = input.map(i => {
    let n = i.match(/(\d+)/g).flatMap(x => x.split(''));
    if (n.length === 1) n[1] = n[0];
    n = n[0].toString() + n[n.length - 1].toString();
    return n;
  });
  return numbers.reduce((current, next) => current + parseInt(next), 0)
}

export const part2 = (input) => {
  const numbers = input.map(i => {
    let output = [];
    let chars = i.split("");
    chars.forEach((c, index) => {
      if (parseInt(c) !== NaN && digits.includes(parseInt(c))) {
        output.push(c);
        return;
      }
      let remainingChars = (chars.length) - index;
      let maxPositionsToCheck = remainingChars < 5 ? remainingChars : 5;
      for (let position = 2; position <= maxPositionsToCheck; position++)
      {
        const wordToCheck = chars.slice(index, index + position).join('');
        const indexOfWord = words.indexOf(wordToCheck);
        if (indexOfWord < 0) continue;
        output.push(digits[indexOfWord].toString());      
      }
    })
    output = output = output[0] + output[output.length - 1];
    return output;
  })
  return numbers.reduce((current, next) => current + parseInt(next), 0)
}
