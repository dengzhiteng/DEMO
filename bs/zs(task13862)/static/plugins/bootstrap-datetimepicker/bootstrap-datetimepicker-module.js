define(function (require, exports, module) {
    require('./css/bootstrap-datetimepicker.min.css');
    require('./js/bootstrap-datetimepicker.min.js');
   // require('./js/locales/zh-CN.js');

    ;(function($){
        $.fn.datetimepicker.dates['zh-CN'] = {
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
            daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            today: "今天",
            suffix: [],
            meridiem: ["上午", "下午"]
        }
    }(jQuery));
    if(typeof Date.prototype.Format != "function"){
        //日期对象 属性扩展
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1,                 //月份
                "d+": this.getDate(),                    //日
                "h+": this.getHours(),                   //小时
                "m+": this.getMinutes(),                 //分
                "s+": this.getSeconds(),                 //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds()             //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    }
    $.fn.datetimepicker.defaults = {
        language:"zh-CN",
        autoclose:true,
        format:"yyyy-mm-dd",
        forceParse:false
    }

    $(".form-date").datetimepicker({
        minView :'month',
        pickerPosition: "bottom-left",
        todayHighlight: true
    }).on('show hide changeDate', function(event) {
    	console.log(event.type);
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
    });

    $(".date-time").datetimepicker({
        format:"yyyy-mm-dd hh:ii",
        pickerPosition: "bottom-left",
        todayHighlight: true
    }).on('show hide changeDate', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
    });
    
    $(".input-group.date").find("input").on('blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        blurFmtDate(this);
    });


    $("[data-role='start-date']").datetimepicker({
        minView :'month',
        endDate:new Date()
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
        if("blur" == event.type){
            blurFmtDate(this);
        }
    });

    $("[data-role='end-date']").datetimepicker({
        minView :'month'
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
        if("blur" == event.type){
            blurFmtDate(this);
        }
    });

    $("[data-role='start-date']").datetimepicker().on("changeDate", function (e) {
        $("[data-role='end-date']").datetimepicker('setStartDate',eventDate(e.date));
        var max_section = $(this).data('max-section')
        if (typeof(max_section) != undefined && max_section != undefined){
        	var date = e.date;
     	    date.setDate(date.getDate() + max_section);
     	    if(date > new Date()){
     	    	date = new Date();
     	    }
        	$("[data-role='end-date']").datetimepicker('setEndDate',eventDate(date));	
        }
    });

    $("[data-role='end-date']").datetimepicker().on("changeDate", function (e) {
       $("[data-role='start-date']").datetimepicker('setEndDate',eventDate(e.date));
       var max_section = $(this).data('max-section')
       if (typeof(max_section) != undefined && max_section != undefined){
    	   var date = e.date;
    	   date.setDate(date.getDate() - max_section);
       	   $("[data-role='start-date']").datetimepicker('setStartDate',eventDate(date));	
       }
    });

    //月份
    $("[data-role='start-month']").datetimepicker({
        format: 'yyyy-mm',
        startView:'year',
        minView :'year'
    }).on('hide changeDate', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    $("[data-role='end-month']").datetimepicker({
        format: 'yyyy-mm',
        startView:'year',
        minView :'year'
    }).on('hide changeDate', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    $("[data-role='start-month']").datetimepicker().on("changeDate", function (e) {
        $("[data-role='end-month']").datetimepicker('setStartDate',eventDate(e.date));
    });

    $("[data-role='end-month']").datetimepicker().on("changeDate", function (e) {
       $("[data-role='start-month']").datetimepicker('setEndDate',eventDate(e.date));
    });
    
    
    $(".form-year").datetimepicker({
        format: 'yyyy',
        startView:'decade',
        minView :'decade'
    }).on('hide changeDate', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
    
    //t-0
    $("input[role='end-t-0']").datetimepicker({
        minView :'month',
        endDate:minusDay(0),
        initialDate:minusDay(0)
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
        if("blur" == event.type){
            blurFmtDate(this);
        }
    });
    
    
  //t-1
    $("input[role='start-t-2']").datetimepicker({
        minView :'month',
        endDate:minusDay(2),
        initialDate:minusDay(2)
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
        if("blur" == event.type){
            blurFmtDate(this);
        }
    });
    $("input[role='end-t-1']").datetimepicker({
        minView :'month',
        endDate:minusDay(1),
        initialDate:minusDay(1)
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if("show" == event.type){
            $(this).datetimepicker('update');
        }
        if("blur" == event.type){
            blurFmtDate(this);
        }
    });
    $("input[role='start-t-2']").datetimepicker().on("changeDate", function (e) {
        $("[role='end-t-1']").datetimepicker('setStartDate',eventDate(e.date));
    });
    $("input[role='end-t-1']").datetimepicker().on("changeDate", function (e) {
       $("[role='start-t-2']").datetimepicker('setEndDate',eventDate(e.date));
    });

    //限制最大月份为上个月
    $("input[role='max-lastmonth']").datetimepicker({
    	format: 'yyyy-mm',
        startView:'year',
        minView :'year',
        endDate:getPreMonth(new Date().Format('yyyy-MM'))  
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
    });
    
    //获取上一个月
    function getPreMonth(date) {
        var arr = date.split('-');
        var year = arr[0]; //获取当前日期的年份
        var month = arr[1]; //获取当前日期的月份
        var year2 = year;
        var month2 = parseInt(month) - 1;
        if (month2 == 0) {
            year2 = parseInt(year2) - 1;
            month2 = 12;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }
        var t2 = year2 + '-' + month2;
        return t2;
    }
    
  //限制最大月份为当前月份
    $("input[role='max-currentmonth']").datetimepicker({
    	format: 'yyyy-mm',
        startView:'year',
        minView :'year',
        endDate:getCurrentMonth(new Date().Format('yyyy-MM'))  
    }).on('show hide changeDate blur', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
    });
    
    //获取上一个月
    function getCurrentMonth(date) {
        var arr = date.split('-');
        var year = arr[0]; //获取当前日期的年份
        var month = arr[1]; //获取当前日期的月份
        var year2 = year;
        var month2 = parseInt(month);
        if (month2 == 0) {
            year2 = parseInt(year2) - 1;
            month2 = 12;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }
        var t2 = year2 + '-' + month2;
        return t2;
    }
    
    
    
    
    
    function minusDay(n){
        var time = new Date().getTime(),dayTime = 24*60*60*1000;
        return new Date(time - n* dayTime);
    }

    function eventDate(date){
        var yy = date.getFullYear(),
            mm = date.getMonth() + 1, 
            dd = date.getDate();

            mm = mm < 10 ? '0'+mm : mm;
            dd = dd < 10 ? '0'+dd : dd;
        return yy + "-" + mm + "-" + dd;
    }

    function blurFmtDate(obj){
    	
        var $input = null;
        if($(obj).is("input")){ 
            $input = $(obj);
        }else{
            $input = $(obj).find("input");
        }

        var value = $input.val();
        if(!value){ return false }
        var vDate = null,vTime = null;

        var vStr = value.split(" ");
        if(vStr.length == 1){
            vDate = vStr[0]
        }else if(vStr.length == 2){
            vDate = vStr[0];
            vTime = vStr[1];
        }else{
            top.layer.alert('输入的日期格式有误');
            $input.val('');
            return false
        }
        var aDate = [];
        if(isNaN(vDate)){
            aDate = vDate.match(/\d+/g);
        }else{
            if(vDate.length != 8){
                top.layer.alert('输入的日期有误');
                $input.val('');
                return false;
            }else{
                aDate.push(vDate.substr(0,4),vDate.substr(4,2),vDate.substr(6,2))
            }
        }
        if(!aDate){
            top.layer.alert('输入的日期有误');
            $input.val('');
            return false
        }
        if(aDate.length > 2){//yyyy-mm格式的数据无法使用此校验规则,所以在此处加了一个限制条件
            var yyyy = Number(aDate[0]),
                MM = Number(aDate[1]) - 1,
                dd = Number(aDate[2]);
            var uDate = new Date(yyyy,MM,dd);

            if(uDate.getFullYear() != yyyy || uDate.getMonth()  != MM || uDate.getDate() != dd){
                top.layer.alert('输入的日期无效');
                $input.val('');
                return false
            }

            var entDate = uDate.Format('yyyy-MM-dd');
            if(vTime && /\d{1,2}:\d{1,2}:\d{1,2}/.test(vTime)){
                entDate = entDate + ' ' + vTime;
            }
        }

        $input.val(entDate);

        return true;
    }

    window.blurFmtDate = blurFmtDate;


});