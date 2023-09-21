/**
 */
define(function (require, exports, module) {
    (function($) {
        var privateFn = {
            bindEvent:function(dom,ele){
                var that = this;
                $(dom).find(".mul-select-btns").on("click",".btn",function(event){
                    event.stopPropagation();
                    event.preventDefault();
                    var $allCheckbox = $(dom).find(".mul-select-item :checkbox");
                    if($(this).index()){
                        $allCheckbox.prop("checked",false);
                        $(ele).val('').removeData("id");
                    }else{
                        $allCheckbox.prop("checked",true);
                        that.returnVal(ele,$allCheckbox);
                    }
                });
                $(dom).find(".mul-select-wrap").on("click","input:checkbox",function(event){
                    event.stopPropagation();
                    var $parents = $(this).parent().parent(),
                        $checkboxes = $parents.parent().find("dd :checkbox");
                    if($parents.is("dt")){
                        var thisIschecked = $(this).prop("checked");
                        $checkboxes.prop("checked",thisIschecked);
                    }else{
                        var $allSelectCheckbox = $parents.siblings("dt").find(":checkbox");
                        if($checkboxes.filter(":checked").size() == $checkboxes.size()){
                            $allSelectCheckbox.prop("checked",true);
                        }else{
                            if($allSelectCheckbox.prop("checked")){
                                $allSelectCheckbox.prop("checked",false);
                            }
                        }
                    }
                    var $allCheckbox = $(dom).find(".mul-select-item :checked");
                    that.returnVal(ele,$allCheckbox);
                })
            },
            returnVal:function(ele,checkbox){
                var txt = null,val = null;
                $(checkbox).filter('[name]').each(function(){
                    if(val){
                        val += ','+ $(this).val()
                    }else{
                        val = $(this).val()
                    }
                    if(txt){
                        txt += ','+ $(this).next().text()
                    }else{
                        txt = $(this).next().text()
                    }
                });
                $(ele).val(txt).data("id",val)
            }
        }
        var methods = {
            init: function(options) {
                return this.each(function() {
                    var $this = $(this);
                    var defaults = {
                        data:null
                    }
                    var settings = $.extend({}, defaults, options);
                    var $dom = $('<div class="mul-select-boxes">'+
                                    '<div class="mul-select-btns">'+
                                        '<div class="btn-group btn-group-justified">'+
                                            '<a role="button" class="btn btn-default">全选</a>'+
                                            '<a role="button" class="btn btn-default">全不选</a>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="mul-select-wrap"></div>'+
                                '</div>');
                    $this.attr("readonly","readonly").after($dom);

                    privateFn.bindEvent($dom,$this);
                    $this.on("click",function(event){
                        event.stopPropagation();
                        $this.next(".mul-select-boxes").slideDown();
                    });
                    $dom.on("click",function(event){event.stopPropagation()});
                    $("body").on("click",function(){
                        $this.next(".mul-select-boxes").hide();
                    });
                    if(settings.data){
                        methods.update(settings.data,$this);
                    }
                });
            },
            update:function(data){
                var thatArgs =arguments;
                return $(this).each(function() {
                    var $this = $(this);
                    if(thatArgs.length >= 2){
                        var $this = thatArgs[1];
                    }
                    var dom = [];
                    for(var x in data){
                    	var temp = [];
                        var items = data[x].items, field = data[x].fieldName;
                        var $dl = $('<dl/>',{class:"mul-select-item"});
                        var $dt = $('<dt><label class="checkbox-inline">'+
                            '<input type="checkbox"><span>'+ data[x].title +'</span>'+
                            '</label></dt>');
                        for(var k in items){
                            var $dd = $('<dd><label class="checkbox-inline">'+
                                '<input type="checkbox" name="'+ field +'" value="'+ items[k].value +'"/>'+
                                '<span>'+ items[k].name +'</span>'+
                                '</label></dd>');
                            temp.push($dd);
                        }
                        $dl.append($dt).append(temp);
                        dom.push($dl);
                    }
                    $this.next(".mul-select-boxes").find(".mul-select-wrap").html(dom);
                })
            },
            setDefault:function(ix){
                if(ix < 1){ return false}
                return $(this).each(function() {
                    var $this = $(this);
                    $this.next(".mul-select-boxes").find("dl").eq(ix-1).find("dt input").click();
                })
            },
            destroy: function(options) {
                return $(this).each(function() {
                    var $this = $(this);
                })
            }
        };

        $.fn.mulSelect = function() {
            var method = arguments[0];
            if(methods[method]) {
                method = methods[method];
                arguments = Array.prototype.slice.call(arguments, 1);
            } else if( typeof(method) == 'object' || !method ) {
                method = methods.init;
            } else {
                console.info( 'Method ' +  method + ' does not exist');
                return this;
            }
            return method.apply(this, arguments);
        }
    })(jQuery)
});