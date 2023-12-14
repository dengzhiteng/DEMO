function isJSON(obj) {
  if(typeof obj=="object" && Object.prototype.toString.call(obj).toLowerCase()=="[object object]" && !obj.length) {
    return true;
  }
  return false
}

function XStorage (storage, namespace, separator) {
  if(!storage) throw new Error('error');
  this.storage = storage;
  this.namespace = namespace || '';
  this.separator = (separator || '.').trim();
}

XStorage.prototype.getNS = function () {
  let space = String(this.namespace).trim();
  return space ? space + this.separator : '';
}

XStorage.prototype.set = function (key, value) {
  var _key = this.getNS() + key;
  if(isJSON(value) || Array.isArray(value)) {
    this.storage.setItem(_key, JSON.stringify(value))
  } else {
    this.storage.setItem(_key, value)
  }
}

XStorage.prototype.get = function (key) {
  var _key = this.getNS() + key;
  var value = this.storage.getItem(_key);
  if (value && value!=='undefined') {
    if(/\{|\[/.test(value)) return JSON.parse(value)
    if(['false','true'].includes(value)) return JSON.parse(value)
    return value
  } else return null
}

XStorage.prototype.remove = function (key) {
  if(key) {
    var _key = this.getNS() + key;
    this.storage.removeItem(_key);
  } else {
    let ns = this.getNS();
    for(let key in this.storage) {
      if(key.startsWith(ns)) {
        this.storage.removeItem(key);
      }
    }
  }
}

XStorage.prototype.clear = function () {
  this.storage.clear();
}

let g = typeof window == 'undefined' ? global : window;
g.GXSession = new XStorage(g.sessionStorage, 'datav')
g.GXLocal = new XStorage(g.localStorage, 'datav')

/**
* Date 日期
*/
if(!Date.prototype.format){
  Date.prototype.format = function(fmt){
    var o = {
      "M+" : this.getMonth()+1,                 //月份   
      "d+" : this.getDate(),                    //日   
      "h+" : this.getHours(),                   //小时   
      "m+" : this.getMinutes(),                 //分   
      "s+" : this.getSeconds(),                 //秒   
      "q+" : Math.floor((this.getMonth()+3)/3), //季度   
      "S"  : this.getMilliseconds()             //毫秒   
    }
    if(/(y+)/.test(fmt)) {
      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
      if(new RegExp("("+ k +")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return fmt;   
  }
}
