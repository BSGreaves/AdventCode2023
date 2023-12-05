import fs from 'fs'
import path from 'path'

export const getExampleInput = async () =>
  fs
    .readFileSync(
      path.resolve(process.env.NODE_PATH, 'inputs/2023/01/example.txt')
    )
    .toString()

export const getInput = async () =>
  fs
    .readFileSync(
      path.resolve(process.env.NODE_PATH, 'inputs/2023/01/input.txt')
    )
    .toString()
