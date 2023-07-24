export function createMockNumberArray(length: number) {
  return new Array(length).fill(null).map(() => createRandomRoundNumber(0, 100))
}

export function createRandomRoundNumber(min: number, max: number) {
  if (!isInteger(min)) throw new Error(`${min} is not int`)
  if (!isInteger(max)) throw new Error(`${max} is not int`)
  if (min === max) return min
  const range = max - min
  return Math.ceil(Math.random() * range) + min
}

export function isInteger(value: number) {
  return value.toFixed(0) === value.toString()
}
