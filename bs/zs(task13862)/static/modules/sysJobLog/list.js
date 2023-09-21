/**
 */
define(function (require, exports, module) {
    require('layer');
    require("bsSelect");
    require('bsValidator');
    require('bsDatetimepicker');
    //处理表格数据
    require("bsTable");
    require('toast');


    var $tableView = $("#tableView");
    $tableView.bootstrapTable({
        url: WEBROOT_PATH + "/vmSysJobLogController/list.do",
        queryParams:queryParams,
        singleSelect: false,
        cache: false,
        undefinedText: '',
        dataType: "json",
        columns:[{
            field:'jobName',
            title:'任务名称'
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
            field:'jobStartTime',
            title:'执行开始时间',
        },{
            field:'jobEndTime',
            title:'执行结束时间'
        },{
            field:'useTime',
            title:'耗时'
        },{
            field:'exceptionInfo',
            title:'异常信息',
            formatter:fmtSysJobException,
            events:{
                'click [role="exceptionInfoShow"]': exceptionInfoShow
            }
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
        params.startTime = $("#startTime").val();
        params.endTime= $("#endTime").val();
        params.status= $("#findStatus").val();
        var timeConsuming = $("#timeConsuming").val();

        if(/^([1-9]\d*|[0]{1,1})$/.test(timeConsuming)){
            params.timeConsuming= Number(timeConsuming);//秒
        }else {
            $("#timeConsuming").val("")
        }

        return params;
    }

    //启用、禁用
    function fmtSysJobStatus(value, row, index){
        if(value=="0"){
            return "成功";
        }else if(value=="1"){
            return "失败";
        }else {
            return "进行中";
        }
    }

    //异常信息
    function fmtSysJobException(value, row, index){
        if(typeof row.status !="undefined" && row.status=="1" && typeof row.exceptionInfo !="undefined" && row.exceptionInfo.length >0){
            return '<a href="javascript:;" class="btn-link" role="exceptionInfoShow">查看</a>';;
        }else {
            return "";
        }
    }

    function exceptionInfoShow(e,value,row,index) {
        $("#exceptionInfo").html();
        $("#exceptionInfo").html(row.exceptionInfo);
        $("#browseSysJobModel").modal('show');
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