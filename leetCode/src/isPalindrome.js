/***
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

/**
 * 方案1 判断num 是否是回文数
 * @param {number} num
 * @return {boolean}
 */
const isPalindrome1 = function (num) {
  if (!/^\d+$/.test(num)) {
    return false
  }
  const arr = num.toString().split("")
  let count = Math.floor(arr.length / 2)
  let isPal = true
  let start = 0
  let end = -1
  for (;start < count; start++) { 
    if (arr.at(start) !== arr.at(end)) {
      isPal= false
    }
    end +=-1
  }
  return isPal
};


/**
 * 方法2 判断num 是否是回文数
 * @param {number} num
 * @return {boolean}
 */
const isPalindrome2 = function (num) {
  if (!/^\d+$/.test(num)) {
    return false
  }
  const nums = String(num)
  return nums=== nums.split("").reverse().join("")
};


module.exports = {
  isPalindrome1,
  isPalindrome2,
};