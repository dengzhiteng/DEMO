/***
 * 方法1:此种方法只适合分离三位数的数字
 * 分离出 个 十 百 位
 * num 需要进行分离的数字
 */
function splitNum1 (num) {
  const ge = num % 10 // Math.floor(123%10)==>3
  // Math.floor 向下取整
  const shi = Math.floor(num % 100 / 10); // 如:num=123 ==> Math.floor(123%100/10)==> Math.floor(23/10)==>Math.floor(2.3)==>2
  const bai = Math.floor(num / 100); //  Math.floor(123/100)==>Math.floor(1.23)==>1
  console.log(ge, shi, bai);
}

/***
 * 方法2:
 * 分离出 个 十 百 千 位
 * num 需要进行分离的数字
 */
function splitNum2 (num) {
  num = num.toString()
  let ge = num.substr(-1, 1)
  let shi = num.substr(-2, 1)
  let bai = num.substr(-3, 1)
  ge = Number(ge)
  shi = Number(shi)
  bai = Number(bai)
  console.log(bai, shi, ge);
}


/***
 * 方法3:
 * 分离出 个 十 百 千 位
 * num 需要进行分离的数字
 */
function splitNum3 (num) {
  num = num.toString()
  const arr = num.split('')
  arr.forEach((element, index) => {
    arr[index] *= 1
  });
  // 数组 at 方法
  const ge = arr.at(-1)
  const shi = arr.at(-2)
  const bai = arr.at(-3)
  console.log(bai, shi, ge);
}




