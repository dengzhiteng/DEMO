/**
 * bootstrap-table
 * @author 
 * @date 2016/4/19
 */
define(function (require, exports, module) {
    require('./css/bootstrap-table.min.css');
    require('./js/bootstrap-table.min.js');
    //require('./locale/bootstrap-table-zh-CN.min.js');
    $.fn.bootstrapTable.locales['zh-CN'] = {
        formatLoadingMessage: function () {
            return '<span class="table-load-icon">正在努力地加载数据中，请稍候……</span>';
        },
        formatRecordsPerPage: function (pageNumber) {
            return '每页显示 ' + pageNumber + ' 条记录';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return '显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
        },
        formatSearch: function () {
            return '搜索';
        },
        formatNoMatches: function () {
            return '没有数据';
        },
        formatPaginationSwitch: function () {
            return '隐藏/显示分页';
        },
        formatRefresh: function () {
            return '刷新';
        },
        formatToggle: function () {
            return '切换';
        },
        formatColumns: function () {
            return '列';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN'],{
        sidePagination:'server',
        pagination:true,
        pageSize:15,
        pageList: [15,30,50],
        cache:false,
        pageListBtnSize: 'xs'
    });

    
    window.computeBsTableHeight = function(){
        var oHH = 6;
        if(typeof window.correctTableHeight != 'undefined'){
            oHH = window.correctTableHeight
        }
        if($tableViewWrap.size() > 0 ){
            var top = $tableViewWrap.offset().top,
                winHH = $(window).height(),
                compHH = winHH - top - oHH;
                
            return compHH > 250 ? compHH : 250;
        }else{
            return "undefined"
        }  
    }

    var $tableViewWrap = $(".table-view-wrap");
    if($tableViewWrap.size() > 0 ){
    	$.fn.bootstrapTable.defaults.height = computeBsTableHeight();
    }

    $(window).resize(function(){
    	var $tableView = $tableViewWrap.find(".table[id]");
    	if($tableView.size() > 0 ){
    		$tableView.bootstrapTable('resetView',{height:computeBsTableHeight()});
    	}
    });

});