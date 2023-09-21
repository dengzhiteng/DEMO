define(function(require, exports, module) {
	require('./toast.min.css');
    require('./toast.min.js');

	//参数设置，若用默认值可以省略以下面代
	$.toast.options.showHideTransition = 'slide';
	$.toast.options.position = 'bottom-right';

	window.toast = {
		//成功提示
		success:function(text){
			$.toast({
				text:text,
				heading:"<strong>成功</strong>",
				icon:"success"
			});
		},
		//信息提示
		info:function(text){
			$.toast({
				text:text,
				heading:"<strong>消息</strong>",
				icon:"info"
			});
		},
		//警告提示
		warning:function(text){
			$.toast({
				text:text,
				heading:"<strong>警告</strong>",
				icon:"warning"
			});
		},
		//错语提示
		error:function(text){
			$.toast({
				text:text,
				//position:"mid-center",
				heading:"<strong>错误</strong>",
				icon:"error"
			});
		},
		//清除窗口绑定
		clear:function(){
			$.toast().reset('all')
		}
	}
});