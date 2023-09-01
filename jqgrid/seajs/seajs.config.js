/* seajs config */
var uMap = [];
//if (/https?:/.test(encriptPath)) {
    var wUrl = "/resources/modules/";
    var tUrl =  "/js/"
    var oPath = [
        ["login/login.js","login.js"],
        ["digitalClinic/registerDetail.js","registerDetail.js"],
        ["digitalClinic/inocDetail.js","inocDetail.js"],
        ["digitalClinic/digitalInocTabMod.js","digitalInocTabMod.js"],
    ]
    for (var i = 0; i < oPath.length; i++) {
        if (encriptPath == '1') {
            var o = wUrl + oPath[i][0], t = tUrl + oPath[i][1] + "?v=" + version;
            uMap.push([o,t])
        }
    }
//}

;seajs.config({
    base: WEBROOT_PATH + "/resources/",
    map: uMap.concat([
        [".js",".js?v="+version],
        [".css",".css?v="+version]
    ]),
    alias: {
        /* jquery */
        "jquery": "framework/jquery/jquery.min.js",
        /* jquery-migrate */
        "jqueryMigrate": "framework/jquery/jquery-migrate.min.js",
        /* bootstrap */
        "bootstrap": "framework/bootstrap/js/bootstrap.min.js",
        /* bootstrap-table-fixed-columns 固定列控件*/
        "bsTableFixedColumns": "plugins/bootstrap-table/ext/table-fixed-columns/table-fixed-columns.js",
        /* jquery form  支持ajax表单提交和ajax文件上传*/
        "form": "plugins/jquery-form/jquery.form.js",
        /* bootstrap-table-module  通过向后台获取数据动态生成动态表格*/
        "bsTable": "plugins/bootstrap-table/bootstrap-table-module.js",
        /* bootstrap-cyberTable-module */
        "cyberTable": "plugins/cyber-table/cyber-table-module.js",

        /* bootstrap-dropdown-hover bootstrap中将菜单改为鼠标滑过*/
        "bsDropdownHover": "plugins/bootstrap-dropdown-hover/bootstrap-hover-dropdown.min.js",
        /* bootstrap-select-module  bootstrap下拉菜单*/
        "bsSelect": "plugins/bootstrap-select/bootstrap-select-module.js",

        /* bootstrap-table-module */
        "bs-table":"plugins/bootstrap-table/bootstrap-table-module.js",

        /* bootstrap-validator-module */
        "bs-validator":"plugins/bootstrap-validator/bootstrap-validator-module.js",

        /* bootstrap-fileinput-module */
        "bs-fileinput":"plugins/bootstrap-fileinput/bootstrap-fileinput-module.js",

        /* bootstrap-treeview-module 实现树形菜单*/
        "treeview": "plugins/bootstrap-treeview/bootstrap-treeview-module.js",

        /* bootstrap-datetimepicker-module 时间插件*/
        "bsDatetimepicker": "plugins/bootstrap-datetimepicker/bootstrap-datetimepicker-module.js",
        /* bootstrap-validator-module 表单验证*/
        "bsValidator": "plugins/bootstrap-validator/bootstrap-validator-module.js",
        /* bootstrap-fileinput-module 上传文件插件*/
        "bsFileinput": "plugins/bootstrap-fileinput/bootstrap-fileinput-module.js",
        /* bootstrap-dialog-module 更强大、更灵活的模态框*/
        "bsDialog": "plugins/bootstrap-dialog/bootstrap-dialog-module.js",
        /* bootstrap-chinese-region 基于bootstrap的城市选择器 省市县（区）联动下拉控件的使用*/
        "bsChineseRegion": "plugins/bootstrap-chinese-region/bootstrap-chinese-region-module.js",
        /* monthly-calendar 显示日历和活动列表*/
        "monthlyCalendar": "plugins/monthly-calendar/monthly-module.js",
        /* jqCountTo */
        "jqCountTo": "plugins/jqCountTo/jquery.countTo.js",
        /* ztree 树形插件*/
        "ztreeCore": "plugins/ztree/ztree-module.js",
        "ztreeExcheck": "plugins/ztree/js/ztree.excheck.min.js",
        "ztreeExedit": "plugins/ztree/js/ztree.exedit.min.js",
        "ztreeExhide": "plugins/ztree/js/ztree.exhide.min.js",
        /* waitingDialog */
        "waitingDialog": "plugins/bootstrap-waitingfor/bootstrap-waitingfor.min.js",
        /* jqToastr Jquery消息提示插件toastr*/
        "jqToastr": "plugins/toastr/toastr-module.js",
        /* echarts */
        "echarts": "plugins/echarts/echarts.common.min.js",
        /* layer 弹层*/
        "layer": "plugins/layer/layer-module.js",
        /* autocomplete jquery自动补全插件*/
        "autocomplete": "plugins/autocomplete/autocomplete.min.js",
        /* 页面模板渲染插件 */
        "laytpl": "plugins/laytpl/laytpl.js",
        /*表单序列化JSON数据插件*/
        "serializeJSON": "plugins/jquery-serializejson/jquery.serializejson.min.js",
        /* 表单自动填充JSON数据插件*/
        "formautofill": "plugins/jquery-formautofill/jquery.formautofill.min.js",
        /* cookie插件*/
        "cookie": "plugins/jquery-cookie/jquery.cookie.js",
        /* string处理库*/
        "string": "plugins/common/string/string.min.js",
        /* 日期处理库*/
        "moment": "plugins/common/moment/moment.min.js",
        /*md5加密*/
        "md5": "plugins/common/encrypt/md5-module.js",
        /*RSA加密*/
        "rsa": "plugins/common/encrypt/security.js",
        /* 简易的日期格式化 */
        "dateFormat": "plugins/dateFormat/dateFormat.js",
        /* dragsort */
        "dragsort":"plugins/dragsort/dragsort.js",
        /* 打印插件 */
        "jqprint": "plugins/jquery-jqprint/jquery.jqprint.js",
        /* 本地存储插件 */
        "store": "plugins/store/store-module.js",
        /* edit-table 行内编辑最终方案*/
        "editable": "plugins/editable/editable.js",
        /* edit-table 行内编辑最终方案*/
        "qrcode": "plugins/jquery-qrcode/jquery.qrcode.js",
        // 身份证验证？
        "cardCheck": "plugins/cardCheck/cardIdCheck.js",
        // 上传文件
        "ajaxFileUpload": "plugins/ajaxfileupload/ajaxfileupload.js",
        "ajaxfupload": "plugins/ajaxfileupload/ajaxfupload.js",
        /* 上传 */
        "webuploader": "plugins/webuploader/webuploader.min.js",
        /* base64 */
        "base64": "plugins/base64/base64.js",
        "translate":"modules/translate.js",
        "registerPlatform":"modules/digitalClinic/registerPlatform.js",
        "digitalHelper":"modules/digitalClinic/digitalHelper.js"
    }
});

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

function closeLayero(){
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}
function iframeAuto(){
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.iframeAuto(index)
}
/**
 *  时间范围控制
 * @param $Start
 * @param $End
 */
function controlTimeRange($Start, $End) {
    $Start.datetimepicker({
        format: 'yyyy-mm-dd', //显示格式
        language: "zh-CN",
        minView: "month",//设置只显示到月份
        todayHighlight: 1,//今天高亮
        startView: 2,
        autoclose: 1//选择后自动关闭
    }).on('click', function () {
        $Start.datetimepicker("setEndDate", $End.val());
    });
    $End.datetimepicker({
        format: 'yyyy-mm-dd', //显示格式
        language: "zh-CN",
        minView: "month",//设置只显示到月份
        todayHighlight: 1,//今天高亮
        startView: 2,
        autoclose: 1//选择后自动关闭
    }).on('click', function () {
        $End.datetimepicker("setStartDate", $Start.val());
    });
    $Start.datetimepicker('update', $Start.val())
    $End.datetimepicker('update', $End.val())
}

/* 页面通用对象 */
window.pageLoadLayer = {
    open:function(){
        $(".pageload").show()
    },
    close:function(){$(".pageload").hide()}
}

;$(function () {
    // 页面加载提示层隐藏/显示
    pageLoadLayer.close()

    /*重置表单方法*/
    $(':reset').click(function(){
        var $form = $(this).parents("form");
        resetForm($form);
    });

    $('.modal').on('hide.bs.modal', function (e) {
        var $form = $(this).find("form");
        if($form.size() > 0){ resetForm($form) }
    });

    function resetForm(form){
        if(!form.data('unreset')){
            form[0].reset();
        }
        if(typeof form.data('bootstrapValidator') == 'object'){
            form.data('bootstrapValidator').resetForm();
        }
        if(typeof $().selectpicker == 'function'){
            $('select.form-control').selectpicker('render');
        }
    }

    //关闭layer
    $('[data-js="close-layer"]').click(function(){
        closeLayero()
    })

});

$.extend({
    serialize: function(item) {
        var params = [];
        if($.type(item) == 'object') {
            $.each(item, function(key, value) {
                if($.type(value) == 'array') {
                    $.each(value, function(i,v) {
                        params.push(key + '=' + v)
                    })
                } else if($.type(value) == 'object') {
                    $.each(value, function(k,v) {
                        params.push(`${key}.${k}` + '=' + v)
                    })
                } else {
                    params.push(key + '=' + value)
                }
            });
        }
        return params.join("&")
    }
});



