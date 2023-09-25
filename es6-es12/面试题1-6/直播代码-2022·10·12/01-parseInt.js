const result = ['1', '2', '3', '4'].map((value, index) => {
  // '1' , 0
  // '2' , 1
  // '3' , 2
  // '4' , 3
  return parseInt(value, index)
  // [1, NaN, NaN]
})

// ['1', '2', '3'].map(parseInt)