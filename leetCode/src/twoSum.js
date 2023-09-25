/***
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

/**
 * 两数之和 方案1
 * @param {number[]} nums 
 * @param {number} target
 * @returns {number[]}
 */
const twoSum1 = (nums, target)=>{
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
       return [i, j]
      }
    }
   }
}

/**
 * 两数之和 方案2
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const twoSum2 = (nums, target) => {
  const arr = [...nums].sort((a, b) => {
    return a - b
  })
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    if (arr[start] + arr[end] > target) {
      end -= 1
    } else if (arr[start] + arr[end] < target) {
      start += 1
    } else {
      return [nums.indexOf(arr[start]), nums.lastIndexOf(arr[end])]
    }
  }
}
const res = twoSum2([1, 2, 3, 4,7,8], 10) 

module.exports = {
  twoSum1,
  twoSum2
};