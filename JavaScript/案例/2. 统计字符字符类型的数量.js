//统计字符中英文字母、空格、数字和其它字符的个数

/***
 * 方法一:
 * 去比较每个字符串对应的unicode码值
 */
function getStrCount1 (str) {
  const az_code = [97, 122]
  const AZ_code = [65, 90]
  const d_code = [48, 57]
  const space_code = 32
  let letters = 0
  let digit = 0;
  let space = 0
  let others = 0;
  for (let i = 0; i < str.length; i++) {
    const unicode = str.charCodeAt(i)
    if (unicode >= 97 && unicode <= 122) {
      letters++;
      continue;
    }
    if (unicode >= 65 && unicode <= 90) {
      letters++;
      continue;
    }
    if (unicode >= 48 && unicode <= 57) {
      digit++;
      continue;
    }
    if (unicode == 32) {
      space++;
      continue;
    }
    others++
  }
  console.log('letters:', letters, 'digit:', digit, 'space:', space, 'others:', others);
}
getStrCount1("hedsj112 sdf @")


/***
 * 方法二:
 * 利用字符串比较大小时候的原理,进行比较
 */
function getStrCount2 (str) {
  let letters = 0
  let digit = 0;
  let space = 0
  let others = 0;
  for (let i = 0; i < str.length; i++) {
    const val = str[i]
    if (val >= 'a' && val <= 'z') {
      letters++;
      continue;
    }
    if (val >= 'A' && val <= 'Z') {
      letters++;
      continue;
    }
    if (val >= '0' && val <= '9') {
      digit++;
      continue;
    }
    if (val == ' ') {
      space++;
      continue;
    }
    others++
  }
  console.log('letters:', letters, 'digit:', digit, 'space:', space, 'others:', others);
}

getStrCount2("hedsj112 sdf @")














