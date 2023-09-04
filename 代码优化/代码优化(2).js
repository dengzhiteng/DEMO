/**
 * 优化前代码
 * @param {*后台返回值} res 
 * @returns 
 */
const getImg = (res) => {
  if (res.type == 0) { // 未中奖
    return 'pic1'
  }
  if (res.type === 1 && res.count === 6.6) { // 现金
    return 'pic2'
  }
  if (res.type === 1 && res.count === 8.8) {
    return 'pic3'
  }
  if (res.type === 2 && res.count === 1) {  // 会员卡
    return 'pic4'
  }
  if (res.type === 2 && res.count === 3) {
    return 'pic5'
  }
  if (res.type === 2 && res.count === 5) {
    return 'pic6'
  }
  if (res.type === 2 && res.count === 31) {
    return 'pic7'
  }
  if (res.type === 2 && res.count === 365) {
    return 'pic8'
  }
  if (res.type === 2) {  // 优惠券
    return 'pic9'
  }
}

/**
 * 优化后代码
 * @param {* 后台返回值} res 
 */
const getImgAfter = (res) => {
  let { type, count } = res
  type = String(type)
  count = String(count)
  const enums = {
    '0': 'pic1',
    '16.6': 'pic2',
    '18.8': 'pic3',
    '21': 'pic4',
    '23': 'pic5',
    '25': 'pic6',
    '231': 'pic7',
    '2365': 'pic8',
    '2': 'pic9',
  }
  return enums[type + count] || "??"
}

const res = {
  type: 1,
  count: 6.6
}
console.log(getImg(res));
console.log(getImgAfter(res));


/**
 * 找出项目owner
 * @param {*} projectName 
 */
const getOwner = (projectName) => {
  if (projectName === '项目A') {
    return '张三'
  } else if (projectName === '项目B') {
    return '李四'
  } else if (projectName === '项目C') {
    return '王五'
  } else {
    return '小马哥'
  }
}


/**
 * 找出项目owner (优化后)
 * @param {*} projectName 
 */
const getOwnerAfter = (projectName) => {
  const map = {
    '项目A': '张三',
    '项目B': '李四',
    '项目C': '王五',
  }
  return map[projectName] || '小马哥'
}








