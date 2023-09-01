/**
 * 计算从起始日期到结束日期的年龄，并返回一个格式为"X年X个月X天"的字符串。
 * @param {string} startDate 起始日期字符串，格式为"yyyy-MM-dd"。
 * @returns {string} 格式为"X年X个月X天"的字符串。
 */
function getAgeByBirthday2(startDate) {
    var curtoday = $("#curtoday").val();
    var endDate = curtoday ? curtoday : getNowFormatDate(); // 如果日期字符串为null，抛出一个Error对象
    if (!startDate || !endDate) {
        return '-';
    }
    try {
        // 将输入的日期字符串转换为Date对象
        var start = new Date(startDate);
        var end = new Date(endDate);
        var period;
        // 如果起始日期晚于结束日期，计算结束日期到起始日期的时间差并取反
        if (start > end) {
            period = getPeriodBetweenDates(end, start);
        } else {
            // 否则，计算起始日期到结束日期的时间差
            period = getPeriodBetweenDates(start, end);
        }
        // 获取年、月、日数
        var years = period.years;
        var months = period.months;
        var days = period.days;
        var ageStr = '';
        //判断是否是2月的最后一天
        if (isLastDayOfFebruary(end) && isLastDayOfMonth(start) && !isLastDayOfFebruary(start)) {
            months += 1;
            days = 0;
        }
        // 构建年龄字符串
        if (years > 0) {
            ageStr += years + "岁";
        }
        if (months > 0) {
            ageStr += months + "个月";
        }
        if (days > 0) {
            if (ageStr.includes("月") || ageStr.includes("岁")) {
                ageStr += "零";
            }
            ageStr += days + "天";
        }
        // 如果年龄为0，返回"0天"字符串，否则返回年龄字符串
        if (years === 0 && months === 0 && days === 0) {
            return "0天";
        } else {
            return ageStr;
        }
    } catch (e) {
        return '-';
    }
}

/**
 * 计算两个日期之间的年、月、日数差。
 * @param {Date} startDate 起始日期。
 * @param {Date} endDate 结束日期。
 * @returns {Object} 包含年、月、日数的对象。
 */
function getPeriodBetweenDates(startDate, endDate) {
    var start = moment(startDate).startOf('day');
    var end = moment(endDate).startOf('day');
    var years = end.diff(start, 'years');
    start.add(years, 'years');
    var months = end.diff(start, 'months');
    start.add(months, 'months');
    var days = end.diff(start, 'days');
    // 返回年、月、日数的对象
    return {
        years: years,
        months: months,
        days: days
    };
}

/**
 * 判断日期是否是2月的最后一天。
 * @param {Date} date 待判断的日期。
 * @returns {boolean} 如果是2月的最后一天，返回true；否则返回false。
 */
function isLastDayOfFebruary(date) {
    var month = date.getMonth();
    var dayOfMonth = date.getDate();
    // 获取日期所在月份的最后一天
    var lastDayOfMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    return month === 1 && dayOfMonth === lastDayOfMonth;
}

/**
 * 判断日期是否是所在月份的最后一天。
 * @param {Date} date 待判断的日期。
 * @returns {boolean} 如果是所在月份的最后一天，返回true；否则返回false。
 */
function isLastDayOfMonth(date) {
    var dayOfMonth = date.getDate();
    // 获取日期所在月份的最后一天
    var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return dayOfMonth === lastDayOfMonth;
}