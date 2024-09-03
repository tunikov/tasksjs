function getPatternSum(arr, i, j) {
  return (
    arr[i][j] +
    arr[i][j + 1] +
    arr[i][j + 2] +
    arr[i + 1][j + 1] +
    arr[i + 2][j] +
    arr[i + 2][j + 1] +
    arr[i + 2][j + 2]
  )
}

function getSummedMatrix(arr) {
  let summedOuterArr = []
  for (let i = 0; i <= arr.length - 3; i++) {
    let summedInnerArray = []
    for (let j = 0; j <= arr[i].length - 3; j++) {
      summedInnerArray.push(getPatternSum(arr, i, j))
    }
    summedOuterArr.push(summedInnerArray)
  }
  return summedOuterArr
}

function findBiggestNumberOf2DMatrix(arr) {
  let theBiggest = arr[0][0]
  arr.forEach((innerArr) => {
    innerArr.forEach((i) => {
      theBiggest = theBiggest < i ? i : theBiggest
    })
  })
  return theBiggest
}

function hourglassSum(arr) {
  const sums = getSummedMatrix(arr)
  const theBiggestSum = findBiggestNumberOf2DMatrix(sums)
  return theBiggestSum
}

module.exports = {
  getPatternSum,
  getSummedMatrix,
  hourglassSum,
  findBiggestNumberOf2DMatrix,
}
