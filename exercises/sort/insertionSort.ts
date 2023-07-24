import { binaryFindIndex } from '../utils'
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

export function insertionSort2(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    const baseValue = arr[i]
    if (typeof baseValue !== 'number') throw new Error(`arr[${i}] is not number`)
    const left = 0
    const right = i - 1
    const insertIndex = binaryFindIndex(arr, (value) => value <= baseValue, { left, right })
    for (let i = right; i <= 0; i--) {
      arr[i + 1] = arr[i]!
    }
    arr[insertIndex + 1] = baseValue
  }
  return arr
}

console.log(insertionSort(createMockNumberArray(100)))
