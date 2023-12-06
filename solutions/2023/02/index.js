export const parseInput = (input) => input.split('\n')

const parseData = (input) => {
  const output = input.map(i => {
    const gameId = i.match(/([0-9]\w*(?=:))/);
    const gameResults = i.match(/([0-9]\w*)\s([a-z]\w*)/g);
    const parsedGameResults = gameResults.map(gr => {
      const splits = gr.split(' ');
      return {
       color: splits[1],
       number: parseInt(splits[0])
      }
     });
    const groups = {
      green: [],
      red: [],
      blue: []
    };
    parsedGameResults.forEach(gr => {
      groups[gr.color].push(gr.number);
    })

    return {
      id: parseInt(gameId[0]),
      results: groups
    }
  });
  return output;
}

export const part1 = (input) => {
  const rules = {
    red: 12,
    green: 13,
    blue: 14
  };
  const games = parseData(input);
  const totalScore = games.reduce((total, currentGame) => {
    if (currentGame.results.red.some( result => result > rules.red)) return total;
    if (currentGame.results.green.some( result => result > rules.green)) return total;
    if (currentGame.results.blue.some( result => result > rules.blue)) return total;
    return total + currentGame.id
  }, 0);

  return totalScore;
}

export const part2 = (input) => {
  const games = parseData(input);
  const totalPower = games.reduce((total, currentGame) => {
    const redNeeded = Math.max(...currentGame.results.red);
    const greenNeeded = Math.max(...currentGame.results.green);
    const blueNeeded = Math.max(...currentGame.results.blue);
    return total + (redNeeded * greenNeeded * blueNeeded);
  }, 0);

  return totalPower;
}