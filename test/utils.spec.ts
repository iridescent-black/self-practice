import { binaryFindIndex } from '../src/utils'
import { test, expect } from '@jest/globals'

test('binaryFindIndex', function () {
  const testData = [0, 2, 2, 2, 4]
  const res1 = binaryFindIndex(testData, (value) => value <= 2)
  const res2 = binaryFindIndex(testData, (value) => value <= 2, { orderReverted: true })
  expect(res1).toBe(3)
  expect(res2).toBe(1)
})
