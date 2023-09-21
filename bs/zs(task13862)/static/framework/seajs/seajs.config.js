/* seajs config */
//var version = "0.0.1";
seajs.config({
    base: WEBROOT_PATH + "/static/",
    map:[
        [".js",".js?v="+version],
        [".css",".css?v="+version]
    ],
    alias: {
        //jquery
        "jquery":"framework/jquery/jquery-mix.js",
        //vue
        "vue":"framework/vue/vue.min.js",
        // bootstrap
        "bootstrap":"framework/bootstrap/js/bootstrap.min.js",
        // chinese-region
        "bsChineseRegion": "plugins/bootstrap-chinese-region/bootstrap-chinese-region-module.js",
        // datetimepicker
        "bsDatetimepicker":"plugins/bootstrap-datetimepicker/bootstrap-datetimepicker-module.js",
        // fileinput
        "bsFileinput":"plugins/bootstrap-fileinput/bootstrap-fileinput-module.js",
        //bootstrap-select
        "bsSelect":"plugins/bootstrap-select/bootstrap-select-module.js",
        // bootstrap-table
        "bsTable": "plugins/bootstrap-table/bootstrap-table-module.js",
        // bootstrap-table-autodefine
        "bsTableFix": "plugins/bootstrap-table/bootstrap-table-module-fix.js",
        // bootstrap-table-group-by
        "bsTableGroupBy": "plugins/bootstrap-table/ext/group-by/group-by-module.js",
        // bootstrap-validator
        "bsValidator":"plugins/bootstrap-validator/bootstrap-validator-module.js",
        //bsTableFixedColumns
        "bsTableFixedColumns":"plugins/bootstrap-table/ext/table-fixed-columns/table-fixed-columns.js",
        // bootstrap-carousel
        "bsCarousel":"plugins/bootstrap-carousel/carousel-module.js",
        
        // ztree
        "ztree":"plugins/ztree/ztree-module.js",
        "ztree.exedit":"plugins/ztree/js/ztree.exedit.min.js",
        "ztree.exhide":"plugins/ztree/js/ztree.exhide.min.js",
        "ztree.excheck":"plugins/ztree/js/ztree.excheck.min.js",
        // echarts
        "echarts":"plugins/echarts/echarts.min.js",
        "echarts.enhance":"plugins/echarts/echarts.min.enhance.js",
        // layer
        "layer":"plugins/layer/layer-module.js",
        //表单序列化JSON数据插件
        "serializeJSON": "plugins/jquery-serializejson/jquery.serializejson.min.js",
        //表单数据填充
        "formautofill": "plugins/jquery-formautofill/jquery.formautofill.min.js",
        //jqgrid
        "jqgrid": "plugins/jqgrid/jqgrid-module.js",
        //aim menu
        "aimMenu": "plugins/aim-menu/aim-menu.js",
        //toast
        "toast": "plugins/toast/toast-module.js",
        //bootstrap-switch
        "bsSwitch": "plugins/bootstrap-switch/bootstrap-switch-module.js",
        // region select
        "citySelect": "plugins/region/city.select-module.js",
        // mul select
        "mulSelect": "plugins/mulselect/mulselect.js",
        //jquery base64
        "jquery.base64": "plugins/tableExport/jquery.base64.js",
        //tableExport
        "tableExport": "plugins/tableExport/tableExport.js",
        // autocomplete
        "autocomplete": "plugins/autocomplete/autocomplete.min.js",
        //  my97DatePicker
        "my97DatePicker": "plugins/my97DatePicker/WdatePicker.js",
        //  新的时间控件
        "mobiscroll": "plugins/mobiscroll/mobiscroll.custom-2.6.2.min.js"
    }
});



if(typeof $ == 'function'){
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
        form[0].reset();
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
    });

    function closeLayero(){
        //先得到当前iframe层的索引
        var index = parent.layer.getFrameIndex(window.name);
        //再执行关闭
        parent.layer.close(index);         
    }
    function returnFloat(value){
    	 var value=Math.round(parseFloat(value)*100)/100;
    	 var xsd=value.toString().split(".");
    	 if(xsd.length==1){
	    	 value=value.toString()+".00";
	    	 return value;
    	 }
    	 if(xsd.length>1){
	    	 if(xsd[1].length<2){
	    		 value=value.toString()+"0";
	     }
	    	 return value;
    	 }
    }
}


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