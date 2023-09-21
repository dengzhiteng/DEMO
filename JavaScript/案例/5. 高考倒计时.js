function show_date_time (trq, bjq) {
  var rq = trq;
  var bj = bjq;
  var zjssx = new Date("2024/6/7 18:15:00");
  // window.setTimeout("show_date_time('" + rq + "','" + bj + "')", 1000);
  BirthDay = new Date("" + rq + "");//日期设定
  today = new Date();
  timeold0 = (zjssx.valueOf() - today.valueOf());
  secondsold0 = Math.floor(timeold0 / 1000);
  timeold = (BirthDay.valueOf() - today.valueOf()) + 1000;
  sectimeold = (timeold / 1000)
  secondsold = Math.floor(sectimeold);
  msPerDay = 24 * 60 * 60 * 1000
  e_daysold = timeold / msPerDay
  daysold = Math.floor(e_daysold);
  e_hrsold = (e_daysold - daysold) * 24;
  hrsold = Math.floor(e_hrsold);
  e_minsold = (e_hrsold - hrsold) * 60;
  minsold = Math.floor((e_hrsold - hrsold) * 60);
  seconds = Math.floor((e_minsold - minsold) * 60);
  timeold2 = (BirthDay.valueOf() - today.valueOf());
  sectimeold2 = (timeold2 / 1000)
  secondsold2 = Math.floor(sectimeold2);
  e_daysold2 = timeold2 / msPerDay
  daysold2 = Math.floor(e_daysold2);
  e_hrsold2 = (e_daysold2 - daysold2) * 24;
  hrsold2 = Math.floor(e_hrsold2);
  e_minsold2 = (e_hrsold2 - hrsold2) * 60;
  minsold2 = Math.floor((e_hrsold2 - hrsold2) * 60);
  seconds2 = Math.floor((e_minsold2 - minsold2) * 60);

  return daysold + " 天 " + hrsold + " 时 " + minsold + " 分 " + seconds + '秒'

  //   document.getElementById("" + bj + "").innerHTML = "<font color=red>" + daysold + " 天 " + hrsold + " 时 " + minsold + " 分 " + seconds + " 秒 </font>";
  // if (secondsold == 0 || secondsold0 == 0) { location.reload(); }
  // if (parseInt(daysold, 10) < 0) {
  //   document.getElementById("" + bj + "").innerHTML = "<font color=green>" + Math.abs(daysold2 + 1) + " 天 " + (23 - hrsold2) + " 时 " + (59 - minsold2) + " 分 " + (59 - seconds2) + " 秒 </font>";
  // }
}

console.log(show_date_time('2024/6/7 9:00:00', 'gkdjs'));