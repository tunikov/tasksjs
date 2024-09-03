const {
  hourglassSum,
  getPatternSum,
  getSummedMatrix,
  findBiggestNumberOf2DMatrix,
} = require('./glasshourMatrix')

describe('glasshour matrix', () => {
  const matrix = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ]
  const matrix2 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ]
  const summedFailingMtrx = [
    [-5, -2, -2, 0],
    [-9, -13, -6, -8],
    [-19, -2, -7, -6],
    [-8, -14, -15, -14],
  ]

  test('getPatternSum', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const sum = 35
    expect(getPatternSum(arr, 0, 0)).toBe(35)
  })

  test('getSummedMatrix', () => {
    const res = getSummedMatrix(matrix)
    const patternsSumsMatrix = [
      [-63, -34, -9, 12],
      [-10, 0, 28, 23],
      [-27, -11, -2, 10],
      [9, 17, 25, 18],
    ]
    console.log(getSummedMatrix(matrix2))
    expect(patternsSumsMatrix).toEqual(res)
  })

  test('findBiggestNumberOf2DMatrix', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const patternsSumsMatrix = [
      [-63, -34, -9, 12],
      [-10, 0, 28, 23],
      [-27, -11, -2, 10],
      [9, 17, 25, 18],
    ]
    expect(findBiggestNumberOf2DMatrix(arr)).toBe(9)
    expect(findBiggestNumberOf2DMatrix(summedFailingMtrx)).toBe(0)
    expect(findBiggestNumberOf2DMatrix(patternsSumsMatrix)).toBe(28)
  })

  test('hourglass', () => {
    expect(hourglassSum(matrix)).toBe(28)
    expect(hourglassSum(matrix2)).toBe(0)
  })
})
