import { test, expect } from '@jest/globals'
import { createMockNumberArray } from '../src/utils'
import { heapSort } from '../src/utils/Heap'
import { quickSort } from '../src/sort/quickSort'

test('堆排序', function () {
  const data = createMockNumberArray(100)
  const data2 = data.slice()
  const res = heapSort(data)
  const res2 = quickSort(data2)
  expect(res).toEqual(res2)
})
