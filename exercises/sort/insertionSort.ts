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

export function binaryInsertionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    const baseValue = arr[i]
    if (typeof baseValue !== 'number') throw new Error(`arr[${i}] is not number`)
    const left = 0
    const right = i - 1
    const insertIndex = binaryFindIndex(arr, (value) => value <= baseValue, { left, right })
    for (let j = right; j > insertIndex; j--) {
      arr[j + 1] = arr[j]!
    }
    arr[insertIndex + 1] = baseValue
  }
  return arr
}

const mockData = createMockNumberArray(100)
console.log(insertionSort(mockData.slice()))
console.log(binaryInsertionSort(mockData.slice()))
console.log(JSON.stringify(binaryInsertionSort(mockData.slice())) === JSON.stringify(insertionSort(mockData.slice())))
