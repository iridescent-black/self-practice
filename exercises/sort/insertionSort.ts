import { createMockNumberArray } from '../utils/createMockData'

export function insertionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    const baseValue = arr[i]
    if (typeof baseValue !== 'number') throw new Error(`arr[${i}] is not number`)
    for (let j = i - 1; j >= 0; j--) {
      const currentValue = arr[j]
      if (typeof currentValue !== 'number') throw new Error(`arr[${j}] is not number`)
      if (currentValue <= baseValue) {
        arr[j + 1] = baseValue
        break
      }
      arr[j + 1] = currentValue
      if (j === 0) arr[j] = baseValue
    }
  }
  return arr
}

console.log(insertionSort(createMockNumberArray(100)))
