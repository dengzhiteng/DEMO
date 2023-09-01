/**
 * @author
 * @version: v1.0.1
 */
define(function (require, exports, module) {
//(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        fixedColumns: false,
        fixedNumber: 1
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initHeader = BootstrapTable.prototype.initHeader,
        _initBody = BootstrapTable.prototype.initBody,
        _resetView = BootstrapTable.prototype.resetView;

    BootstrapTable.prototype.initFixedColumns = function () {
        this.$fixedHeader = $('<div class="fixed-table-header-columns"><table><thead></thead></table></div>');

        this.timeoutHeaderColumns_ = 0;
        this.$fixedHeader.find('table').attr('class', this.$el.attr('class'));
        this.$fixedHeaderColumns = this.$fixedHeader.find('thead');
        this.$tableHeader.before(this.$fixedHeader);

        this.$fixedBody = $('<div class="fixed-table-body-columns"><table><thead></thead><tbody></tbody></table></div>');

        //this.$fixedBody = $('<div class="fixed-table-body-columns"><table></table></div>');

        this.timeoutBodyColumns_ = 0;
        this.$fixedBody.find('table').attr('class', this.$el.attr('class'));
        this.$fixedTBodyColumns = this.$fixedBody.find('tbody');
        this.$fixedTheadColumns = this.$fixedBody.find('thead');

        this.$tableBody.before(this.$fixedBody);
    };

    BootstrapTable.prototype.initHeader = function () {
        _initHeader.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.fixedColumns) {
            return;
        }

        this.initFixedColumns();

        var that = this,
            $realTr = this.$header.find('tr'),
            $trs =[], //$realTr.clone(),
            tableCols = 0,
            index = that.options.fixedNumber;


        $realTr.each(function (i) {
            var rowOfCols = 0;
            $(this).children().each(function(){
                var colspan = $(this).attr("colspan");
                if(colspan){
                    rowOfCols += parseInt(colspan);
                }else{
                    rowOfCols += 1;
                }
            });

            //把第一行列做为对比对象
            if(i == 0){
                tableCols = rowOfCols;
                //重置为0
                //rowOfCols = 0;
            }

            if(that.options.fixedNumber > tableCols - rowOfCols){
                index = index - (tableCols - rowOfCols);

                var tr = $("<tr/>");
                $(this).children().each(function(k){
                    if(k < index ){
                        var td = $(this).clone();
                        td.height($(this).outerHeight());
                        tr.append(td);
                    }else{
                        return false
                    }
                })
                $trs.push(tr);
            }
        });
        this.$fixedHeaderColumns.html($trs);
    };

    BootstrapTable.prototype.initBody = function () {
        _initBody.apply(this, Array.prototype.slice.apply(arguments));
        if (!this.options.fixedColumns) {
            return;
        }
        var that = this,rowspan = 0;

        //this.$fixedBodyColumns.html('');

        var $trs = [];
        this.$body.find('> tr[data-index]').each(function () {
            var $tr = $(this).clone(), $tds = $(this).find('td');

            $tr.html('');
            var end = that.options.fixedNumber;
            if (rowspan > 0) {
                --end;
                --rowspan;
            }
            for (var i = 0; i < end; i++) {
                $tr.append($tds.eq(i).clone());
            }

            //that.$fixedTBodyColumns.append($tr);

            if ($tds.eq(0).attr('rowspan')){
                rowspan = $tds.eq(0).attr('rowspan') - 1;
            }

            $trs.push($tr);
        });

        this.$fixedTheadColumns.html(this.$fixedHeaderColumns.children().clone(true));
        this.$fixedTBodyColumns.html($trs);
    };

    BootstrapTable.prototype.resetView = function () {
        _resetView.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.fixedColumns) {
            return;
        }

        clearTimeout(this.timeoutHeaderColumns_);
        // this.timeoutHeaderColumns_ = setTimeout($.proxy(this.fitHeaderColumns, this), this.$el.is(':hidden') ? 100 : 0);

        clearTimeout(this.timeoutBodyColumns_);
        this.timeoutBodyColumns_ = setTimeout($.proxy(this.fitBodyColumns, this), this.$el.is(':hidden') ? 100 : 0);
    };
    /*
     BootstrapTable.prototype.fitHeaderColumns = function () {
     var that = this,
     visibleFields = this.getVisibleFields(),
     headerWidth = 0;

     this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
     var $this = $(this),
     index = i;

     if (i >= that.options.fixedNumber) {
     return false;
     }

     if (that.options.detailView && !that.options.cardView) {
     index = i - 1;
     }

     that.$fixedHeader.find('th[data-field="' + visibleFields[index] + '"]')
     .find('.fht-cell').width($this.innerWidth());
     headerWidth += $this.outerWidth();
     });
     this.$fixedHeader.width(headerWidth).show();
     };
     */

    BootstrapTable.prototype.fitBodyColumns = function () {
        var that = this,
            top = -(parseInt(this.$el.css('margin-top')) - 2),
            // the fixed height should reduce the scorll-x height
            height = this.$tableBody.height() - 17;



        if (!this.$body.find('> tr[data-index]').length) {
            this.$fixedBody.hide();
            return;
        }
        /*
         if (this.options.height) {
         top = this.$fixedHeader.height();
         height = height - top;
         }
         */

        this.$fixedBody.css({
            width: this.$fixedHeader.width(),
            height: height,
            //top: top
        }).show();


        this.$body.find('>tr').each(function (i) {
            that.$fixedTBodyColumns.find('tr:eq(' + i + ')').height($(this).height());
        });

        // events
        this.$tableBody.on('scroll', function () {
            that.$fixedBody.find('table').css('margin-top', -$(this).scrollTop());
        });
        this.$body.find('> tr[data-index]').off('hover').hover(function () {
            var index = $(this).data('index');
            that.$fixedBody.find('tr[data-index="' + index + '"]').addClass('hover');
        }, function () {
            var index = $(this).data('index');
            that.$fixedBody.find('tr[data-index="' + index + '"]').removeClass('hover');
        });
        this.$fixedBody.find('tr[data-index]').off('hover').hover(function () {
            var index = $(this).data('index');
            that.$body.find('tr[data-index="' + index + '"]').addClass('hover');
        }, function () {
            var index = $(this).data('index');
            that.$body.find('> tr[data-index="' + index + '"]').removeClass('hover');
        });
    };

//})(jQuery);
});
