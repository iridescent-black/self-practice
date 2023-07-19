export function swap<T>(arr: T[], i: number, j: number) {
  if (arr[i] === undefined) throw new Error('arr[i] is undefined')
  if (arr[j] === undefined) throw new Error('arr[j] is undefined')
  const temp = arr[i]
  arr[i] = arr[j]!
  arr[j] = temp!
}
