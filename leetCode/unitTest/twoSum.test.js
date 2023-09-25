const { twoSum1, twoSum2 } = require("../src/twoSum");
test("twoSum1 case1: ", () => {
  expect(twoSum1([1, 2], 3)).toEqual([0, 1])
  expect(twoSum1([1, 2, 3, 4, 5, 6], 8)).toEqual([1, 5])
});

test("twoSum2 case2: ", () => {
  expect(twoSum2([1, 2, 3, 5, 6, 17], 8)).toEqual([1, 4])
  expect(twoSum2([1, 2], 3)).toEqual([0, 1])
});
