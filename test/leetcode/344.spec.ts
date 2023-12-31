import { expect, test } from '@jest/globals'
import { reverseString } from '../../src/leetcode/344'

test('翻转字符串', function () {
  const input = [
    'A',
    ' ',
    'm',
    'a',
    'n',
    ',',
    ' ',
    'a',
    ' ',
    'p',
    'l',
    'a',
    'n',
    ',',
    ' ',
    'a',
    ' ',
    'c',
    'a',
    'n',
    'a',
    'l',
    ':',
    ' ',
    'P',
    'a',
    'n',
    'a',
    'm',
    'a',
  ]
  const res = [
    'a',
    'm',
    'a',
    'n',
    'a',
    'P',
    ' ',
    ':',
    'l',
    'a',
    'n',
    'a',
    'c',
    ' ',
    'a',
    ' ',
    ',',
    'n',
    'a',
    'l',
    'p',
    ' ',
    'a',
    ' ',
    ',',
    'n',
    'a',
    'm',
    ' ',
    'A',
  ]
  reverseString(input)
  expect(input).toEqual(res)
})
