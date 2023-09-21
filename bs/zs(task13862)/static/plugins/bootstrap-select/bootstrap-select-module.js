define(function(require, exports, module) {
	require('./css/bootstrap-select.min.css');
   	require('./js/bootstrap-select.js');
   	//require('./js/i18n/defaults-zh_CN.js');
	$.fn.selectpicker.defaults = {
	    noneSelectedText: '没有选中任何项',
	    noneResultsText: '没有找到匹配项',
	    countSelectedText: '选中{1}中的{0}项',
	    maxOptionsText: ['超出限制 (最多选择{n}项)', '组选择超出限制(最多选择{n}组)'],
	    selectAllText: '全选',
	    deselectAllText: '全不选'
	};


    $("select.form-control").selectpicker();

});