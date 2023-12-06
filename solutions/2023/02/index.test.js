import { parseInput, part1, part2 } from './index.js'
import { getExampleInput, getInput } from './input.js'
import { test, expect } from 'jest'


test('part 1 example', async () => {
  expect(part1(parseInput(await getExampleInput()))).toBe(8)
})

// test('part 2 example', async () => {
//   expect(part2(parseInput(await getExampleInput()))).toBe(0)
// })