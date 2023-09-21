/**
 */
define(function (require, exports, module) {
    require('layer');
    require("bsSelect");
    require('bsValidator');
    //处理表格数据
    require("bsTable");
    require('toast');

    $(function () {
        addFormValidator();
        editFormValidator()
    });

    var $tableView = $("#tableView");
    $tableView.bootstrapTable({
        url: WEBROOT_PATH + "/vmSysJobController/list.do",
        queryParams:queryParams,
        singleSelect: false,
        cache: false,
        undefinedText: '',
        dataType: "json",
        columns:[{
            field:'jobName',
            title:'任务名称'
        },{
            field:'jobGroup',
            title:'任务组名称'
        },{
            field:'invokeTarget',
            title:'调用目标'
        },{
            field:'cronExpression',
            title:'表达式'
        },{
            field:'status',
            title:'状态',
            formatter:fmtSysJobStatus
        },{
            field:'createBy',
            title:'创建人'
        },{
            field:'createTime',
            title:'创建时间',
        },{
            field:'updateBy',
            title:'修改人'
        },{
            field:'updateTime',
            title:'修改时间'
        },{
            field:'operate',
            title:'操作',
            width:240,
            events:{
                'click [role="browse"]': browse,
                'click [role="edit"]': edit,
                'click [role="run"]': run,
                'click [role="stop"]': stop,
                'click [role="del"]': del
            },
            formatter:fmtOperate
        }]
    });

    //查询
    $("#btnFind").on("click",function () {
        refush();
    })

    //重新查询
    function refush(){
        $tableView.bootstrapTable("refresh",{offset:0});
    }

    //分页以及查询条件
    function queryParams(params){
        params.jobName = $("#findJobName").val();
        params.jobGroup = $("#findJobGroup").val();
        params.invokeTarget = $("#findInvokeTarget").val();
        params.status= $("#findStatus").val();
        return params;
    }

    //启用、禁用
    function fmtSysJobStatus(value, row, index){
        if(value=="0"){
            return "正常";
        }else if(value=="1"){
            return "停止";
        }else {
            return "";
        }
    }

    //格式化
    function fmtOperate(value, row, index){
        var html = '';

        html += '<a href="javascript:;" class="btn-link ml10" role="browse">浏览</a>';
        html += '<a href="javascript:;" class="btn-link ml10" role="edit">编辑</a>';
        if(row.status==0){
            html += '<a href="javascript:;" class="btn-link ml10" role="run">执行一次</a>';
            html += '<a href="javascript:;" class="btn-link ml10" role="stop">停止</a>';
        }
        html += '<a href="javascript:;" class="btn-link ml10 g0" role="del">删除</a>';
        return html
    }

    //打开新增
    $("#btnAddSysJob").on('click',function () {
        $("#addSysJobModel").modal('show');
        var bootstrapValidator = $("#formAdd").data('bootstrapValidator');
        bootstrapValidator.validate();
    })

    //新增保存
    $("#addSave").on('click',function(e){
        var bootstrapValidator = $("#formAdd").data('bootstrapValidator');
        bootstrapValidator.validate();
        if (!bootstrapValidator.isValid()) {
            return;
        }
        //选择计划
        var formData = $("#formAdd").serialize();//资料
        $.ajax({
            url : WEBROOT_PATH+'/vmSysJobController/addJob.do',
            headers:{
                'contentType': 'application/x-www-form-urlencoded'
            },
            type: "POST",
            data:formData,
            success : function(data) {
                if(data.code == 1){
                    refush();
                    toast.success("创建成功");
                    $('#addSysJobModel').modal('hide');
                }else if(typeof data.msg != "undefined"){
                    toast.error(data.msg);
                }else {
                    toast.error("创建失败");
                }
            }
        });
    })

    //新增验证
    function addFormValidator(){
        $("#formAdd").bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },fields: {
                jobName:{
                    validators:{
                        notEmpty:{
                            message: '任务名称不能为空'
                        },
                        stringLength: {
                            max: 64,
                            message: '任务名称长度不能大于64'
                        }
                    }
                },
                jobGroup:{
                    validators:{
                        notEmpty:{
                            message: '任务组名称不能为空'
                        },
                        regexp: {
                            regexp: '^[0-9a-zA-Z]+$',
                            message: '只能由英文和数字组成'
                        },
                        stringLength: {
                            max: 30,
                            message: '任务组名称长度不能大于30'
                        }
                    }
                },
                invokeTarget:{
                    validators:{
                        notEmpty:{
                            message: '调用目标不能为空'
                        },
                        stringLength: {
                            max: 128,
                            message: '调用目标长度不能大于128'
                        },
                        regexp: {
                            regexp: '^([a-zA-Z]+[.][a-zA-Z]+)[.]*.*',
                            message: '必须是类名+方法+参数'
                        },
                        remote: {
                            message: '调用目标不存在',
                            type: 'POST',
                            url: WEBROOT_PATH + '/vmSysJobController/checkInvokeTarget.do',
                            delay: 1000,
                            data: function(validators){
                                return {invokeTarget:$("#addInvokeTarget").val()}
                            }
                        }
                    }
                },
                cronExpression:{
                    validators:{
                        notEmpty:{
                            message: '表达式不能为空'
                        },
                        stringLength: {
                            max: 64,
                            message: '表达式长度不能大于64'
                        },
                        remote: {
                            message: '表达式不正确',
                            type: 'POST',
                            url: WEBROOT_PATH + '/vmSysJobController/checkCron.do',
                            delay: 1000,
                            data: function(validators){
                                return {cronExpression:$("#addCronExpression").val()}
                            }
                        }
                    }
                }
            }
        })
    }

    //新增model
    $("#addSysJobModel").on('hidden.bs.modal', function(e) {
        $("#formAdd").data('bootstrapValidator').destroy();
        $('#formAdd').data('bootstrapValidator', null);
        addFormValidator();
    });

    //编辑model
    $("#editSysJobModel").on('hidden.bs.modal', function(e) {
        $("#formEdit").data('bootstrapValidator').destroy();
        $('#formEdit').data('bootstrapValidator', null);
        editFormValidator();
    });

    //编辑验证
    function editFormValidator(){
        $("#formEdit").bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },fields: {
                jobName:{
                    validators:{
                        notEmpty:{
                            message: '任务名称不能为空'
                        },
                        stringLength: {
                            max: 64,
                            message: '任务名称长度不能大于64'
                        }
                    }
                },
                jobGroup:{
                    validators:{
                        notEmpty:{
                            message: '任务组名称不能为空'
                        },
                        regexp: {
                            regexp: '^[0-9a-zA-Z]+$',
                            message: '只能由英文和数字组成'
                        },
                        stringLength: {
                            max: 30,
                            message: '任务组名称长度不能大于30'
                        }
                    }
                },
                invokeTarget:{
                    validators:{
                        notEmpty:{
                            message: '调用目标不能为空'
                        },
                        stringLength: {
                            max: 128,
                            message: '调用目标长度不能大于128'
                        },
                        regexp: {
                            regexp: '^([a-zA-Z]+[.][a-zA-Z]+)[.]*.*',
                            message: '必须是类名+方法+参数'
                        },
                        remote: {
                            message: '调用目标不存在',
                            type: 'POST',
                            url: WEBROOT_PATH + '/vmSysJobController/checkInvokeTarget.do',
                            delay: 1000,
                            async:false,    // 同步请求，必须是false
                            data: function(validators){
                                return {invokeTarget:$("#editInvokeTarget").val()}
                            }
                        }
                    }
                },
                cronExpression:{
                    validators:{
                        notEmpty:{
                            message: '表达式不能为空'
                        },
                        stringLength: {
                            max: 64,
                            message: '表达式长度不能大于64'
                        },
                        remote: {
                            message: '表达式不正确',
                            type: 'POST',
                            url: WEBROOT_PATH + '/vmSysJobController/checkCron.do',
                            delay: 1000,
                            async:false,    // 同步请求，必须是false
                            data: function(validators){
                                return {cronExpression:$("#editCronExpression").val()}
                            }
                        }
                    }
                }
            }
        })
    }

    //编辑保存
    $("#editSave").on('click',function(){
        var bootstrapValidator = $("#formEdit").data('bootstrapValidator');
        bootstrapValidator.validate();
        if (!bootstrapValidator.isValid()) {
            return;
        }

        //选择计划
        var formData = $("#formEdit").serialize();//资料
        $.ajax({
            url : WEBROOT_PATH+'/vmSysJobController/editJob.do',
            headers:{
                'contentType': 'application/x-www-form-urlencoded'
            },
            type: "POST",
            data:formData,
            success : function(data) {
                if(data.code == '1'){
                    refush();
                    toast.success("修改成功");
                    $('#editSysJobModel').modal('hide');
                }else if(typeof data.msg != "undefined"){
                    toast.error(data.msg);
                }else {
                    toast.error("修改失败");
                }
            }
        });
        return false
    });

    //编辑
    function edit(e,value,row,index){
        if(row.jobId){
            $("#editJobId").val(row.jobId);
        }else{
            $("#editJobId").val("");
        }
        if(row.misfirePolicy){
            $("#editMisfirePolicy").val(row.misfirePolicy);
        }else{
            $("#editMisfirePolicy").val("");
        }

        if(row.conCurrent){
            $("#editConCurrent").val(row.conCurrent);
        }else{
            $("#editConCurrent").val("");
        }
        if(row.jobName){
            $("#editJobName").val(row.jobName);
        }else{
            $("#editJobName").val("");
        }
        if(row.jobGroup){
            $("#editJobGroup").val(row.jobGroup);
        }else{
            $("#editJobGroup").val("");
        }
        if(row.invokeTarget){
            $("#editInvokeTarget").val(row.invokeTarget);
        }else{
            $("#editInvokeTarget").val("");
        }
        $("#croListEdit").html("");
        if(row.cronExpression){
            $("#editCronExpression").val(row.cronExpression);
            cronNexExecu(row.cronExpression,$("#croListEdit"));
        }else{
            $("#editCronExpression").val("");
        }
        if(row.conCurrent=="0"){
            $("#editConCurrent").selectpicker('val', 0)
        }else {
            $("#editConCurrent").selectpicker('val', 1)
        }
        if(row.status==1){
            $("#editStatus").selectpicker('val', 1)
        }else {
            $("#editStatus").selectpicker('val', 0)
        }
        if(row.remark){
            $("#editRemark").val(row.remark);
        }else{
            $("#editRemark").val("");
        }

        $("#editSysJobModel").modal('show');
        var bootstrapValidator = $("#formEdit").data('bootstrapValidator');
        bootstrapValidator.validate();
    }

    //浏览
    function browse(e,value,row,index){
        $("#browseJobName").html("");
        $("#browseJobGroup").html("");
        $("#browseInvokeTarget").html("");
        $("#browseCronExpression").html("");
        $("#browseStatus").html("");
        $("#browseRemark").html("");

        $("#browseJobName").html(row.jobName);
        $("#browseJobGroup").html(row.jobGroup);
        $("#browseInvokeTarget").html(row.invokeTarget);
        $("#browseCronExpression").html(row.cronExpression);
        $("#browseStatus").html(row.status);
        $("#browseRemark").html(row.remark);
        cronNexExecu(row.cronExpression,$("#BrowseCroList"));
        $("#browseSysJobModel").modal('show');
    }

    //执行
    function run(e,value,row,index){
        if(row.status==1){
            toast.error("任务已停止，不能执行");
            return "";
        }
        userConfirm("确定要执行?",function(){
            $.ajax({
                type: "POST",
                url: WEBROOT_PATH + "/vmSysJobController/runJob.do",
                headers:{
                    'contentType': 'application/x-www-form-urlencoded'
                },
                dataType : "json",
                data:{jobId:row.jobId},
                async:false,
                success: function(data) {
                    if(data.code == 1){
                        refush();
                        toast.success("执行成功！");
                    }else if(typeof data.msg != "undefined"){
                        toast.error(data.msg);
                    }else {
                        toast.error(data.msg);
                    }
                }
            });
        })
    }

    //停止
    function stop(e,value,row,index){
        userConfirm("确定要停止?",function(){
            $.ajax({
                type: "POST",
                url: WEBROOT_PATH + "/vmSysJobController/stopJob.do",
                headers:{
                    'contentType': 'application/x-www-form-urlencoded'
                },
                dataType : "json",
                data:{jobId:row.jobId},
                async:false,
                success: function(data) {
                    if(data.code == 1){
                        refush();
                        toast.success("停止成功！");
                    }else if(typeof data.msg != "undefined"){
                        toast.error(data.msg);
                    }else {
                        toast.error(data.msg);
                    }
                }
            });
        })
    }

    //删除
    function del(e,value,row,index){
        userConfirm("确定要删除?",function(){
            $.ajax({
                type: "POST",
                url: WEBROOT_PATH + "/vmSysJobController/delJob.do",
                headers:{
                    'contentType': 'application/x-www-form-urlencoded'
                },
                dataType : "json",
                data:{jobId:row.jobId},
                async:false,
                success: function(data) {
                    if(data.code == 1){
                        refush();
                        toast.success("删除成功！");
                    }else if(typeof data.msg != "undefined"){
                        toast.error(data.msg);
                    }else {
                        toast.error(data.msg);
                    }
                }
            });
        })
    }

    //计算下N次执行时间
    $("#addCronExpression").change(function () {
        cronNexExecu($(this).val(),$("#croList"));
    })

    //计算下N次执行时间
    $("#editCronExpression").change(function () {
        cronNexExecu($(this).val(),$("#croListEdit"));
    })

    //cronExpression值；showChangeObj展示下几次执行的计划
    function cronNexExecu(chageVal,showChangeObj) {
        showChangeObj.html("");
        var val = chageVal;
        var regs = val.split(' ');
        if(regs.length<6){
            return;
        }
        var crons=[];
        for (var i = 0; i < regs.length; i++) {
            if(regs[i] !=" "){
                crons.push(regs[i]);
            }
        }
        if(crons.length!=6){
            return;
        }
        var cronExpression= crons.join(" ");
        $.ajax({
            type: "get",
            url: WEBROOT_PATH + "/vmSysJobController/cronNexExecu.do",
            headers:{
                'contentType': 'application/x-www-form-urlencoded'
            },
            dataType : "json",
            data:{cronExpression:val},
            async:false,
            success: function(data) {
                if(data.code == 1){
                    var html = "";
                    var crons =data.data;
                    $.each(crons, function (i) {
                        html += crons[i]+"<br/>";
                    });
                    showChangeObj.html(html);
                }
            }
        });
    }

    function userConfirm (title,callback){
        layer.confirm(title,{
            offset: 't',
            yes:function(index, layero){
                callback();
                layer.close(index)
            }
        })
    }
})