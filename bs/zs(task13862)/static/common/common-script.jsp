<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script>
	var CONTEXT_PATH = "${contextPath}";
	var WEBROOT_PATH = "${webrootPath}";
	var version = "${version}";
</script>
<script src="${webrootPath}/static/framework/jquery/jquery.min.js?v=${version}"></script>
<script src="${webrootPath}/static/framework/jquery/jquery-migrate.min.js?v=${version}"></script>
<script src="${webrootPath}/static/framework/bootstrap/js/bootstrap.min.js?v=${version}"></script>
<script src="${webrootPath}/static/framework/seajs/sea.js?v=${version}" id="seajsnode"></script>
<script src="${webrootPath}/static/framework/seajs/seajs.config.js?v=${version}"></script>
<!-- <script>
	//是否登录超时，跳到登录页面
	/* setInterval(function(){
		checkOuttime();
	},3000);

	function checkOuttime(){
		$.ajax({
			url:"a.jsp",
			success:function(msg){
				//如果没超时
				if(msg){ return false }

				if(window.top != window.self){
					top.location.href='/login.jsp';
				}else{
					window.location.href='/login.jsp';
				}
			}
		});
	} */
</script> -->