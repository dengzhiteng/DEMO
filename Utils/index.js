function Utils () {
  this.throttle = function (fn, interval) {
    var lastTime = 0
    const _throttle = function (...args) {
      var nowTime = new Date().getTime();
      var remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        fn.apply(this, args);
        lastTime = nowTime
      }
    }
    return _throttle
  }
  this.debounce = function (fn, delay) {
    var timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        return fn.apply(this, arguments);
      }, delay);
    };
  }
  this.ajaxPost = function (options) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: CONTEXT_PATH + options.url,
        data: JSON.stringify(options.data),
        contentType: "application/json",
        dataType: "json",
        type: 'POST',
        success: function (res) {
          if (res.code == '000000') {
            resolve(res)
          } else {
            reject(res)
            toastr.error(res.msg)
          }
        },
        error: function (err) {
          reject(err)
          toastr.error("系统异常,请联系管理员")
        }
      })
    })
  }
  this.ajaxGet = function (options) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: CONTEXT_PATH + options.url,
        data: options.data,
        dataType: "json",
        success: function (res) {
          if (res.code == '000000') {
            resolve(res)
          } else {
            reject(res)
            toastr.error(res.msg)
          }
        },
        error: function (err) {
          reject(err)
          toastr.error("系统异常,请联系管理员")
        }
      });
    })
  }
  this.removeRepeate = function (arr) {
    return [...new Set(arr)]  
  }
}