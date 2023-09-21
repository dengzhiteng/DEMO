/**
 * 是否是闰年
 * @param {*} year 
 */
function isLeap (year) {
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    return true;
  }
  return false;
}

/**
 * 输出指定日期是一年中的第几天
 * @param {*string} dateStr  非必填
 */
function getOneYearDayIndex (dateStr) {
  if (dateStr) {
    dateStr = dateStr.slice(0, 10) + ' 00:00:00'
  }
  const date = dateStr ? new Date(dateStr) : new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  if (!year && month && day) {
    return '输入日期格式错误'
  }
  const isLeapYear = isLeap(year)
  const month_day = [
    31, 28, 31,
    30, 31, 30,
    31, 31, 30,
    31, 30, 31
  ]
  // 闰年
  if (isLeapYear) {
    month_day[1] = 29
  }
  let yearDayIndex = 0
  for (let index = 0; index < month - 1; index++) {
    yearDayIndex += month_day[index]
  }
  yearDayIndex += day
  return yearDayIndex + '天'
}

console.log('今年已经过去了', getOneYearDayIndex());










