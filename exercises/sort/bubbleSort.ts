import { swap } from '../utils'

function bubbleSort(arr: number[]) {
  const arrLength = arr.length
  if (arrLength <= 1) return arr

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - 1 - i; j++) {
      const leftValue = arr[j]
      const rightValue = arr[j + 1]
      if (typeof leftValue !== 'number') throw new Error(`arr Item[${j}] is not number`)
      if (typeof rightValue !== 'number') throw new Error(`arr Item[${j}] is not number`)
      if (leftValue > rightValue) swap(arr, j, j + 1)
    }
  }

  return arr
}

const arr1 = [5, 4, 3, 2, 1]
const arr2 = [5, 2, 3, 4, 1]
const arr3: number[] = []

console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))
