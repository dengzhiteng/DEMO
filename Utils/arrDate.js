let dates = [
  {
    label: '出生日期',
    value:'2022-02-01'
  },
  {
    label: '接种日期',
    value: '2022-02-01'
  },
  {
    label: '反应发生日期',
    value: '2022-02-11'
  },
  {
    label: '发现/就诊日期',
    value: '2022-02-13'
  },
  {
    label: '报告日期',
    value: '2022-02-22'
  },
]


const getTime = function (str) {
  return new Date(str).getTime()
}
 
// 判断是否是有效的日期
const isValidDate = function (arr) {
  const reg = /^\d{4}-\d{2}-\d{2}$/
  const cur = arr.pop()
  const pro = arr[arr.length - 1]
  if (!pro) return false
  const curDate = cur.value.slice(0,10)
  const proDate = pro.value.slice(0, 10)
  const curDateTime = getTime(curDate)
  const proDateTime = getTime(proDate)
  if (!reg.test(curDate) || isNaN(curDateTime)  ) {
    return {
      msg: `请输入正确格式的日期${curDate}`,
      isValid: false
    }
  }
  if (!reg.test(proDate) || isNaN(proDateTime)) {
    return {
      msg: `请输入正确格式的日期${proDate}`,
      isValid: false
    }
  }
  if (curDateTime < proDateTime) {
    const msg = `${cur.label}不能早于${pro.label} ${pro.value}`
    return {
      msg,
      isValid: false
    }
  }
  isValidDate(arr)
  return {
    msg: 'ok',
    isValid: true
  }
}

const res = isValidDate(dates)
console.log(res);

