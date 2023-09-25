const { isPalindrome1, isPalindrome2 } = require("../src/isPalindrome");

test("isPalindrome1: ", () => {
  expect(isPalindrome1()).toBe(false)
  expect(isPalindrome1(121)).toBe(true)
  expect(isPalindrome1(-121)).toBe(false)
  expect(isPalindrome1(123321)).toBe(true)
  expect(isPalindrome1(10)).toBe(false)

});

test("isPalindrome2: ", () => {
  expect(isPalindrome2()).toBe(false)
  expect(isPalindrome2(121)).toBe(true)
  expect(isPalindrome2(-121)).toBe(false)
  expect(isPalindrome2(123321)).toBe(true)
  expect(isPalindrome2(10)).toBe(false)
});

