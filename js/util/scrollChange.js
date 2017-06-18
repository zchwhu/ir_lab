/**
 * Created by Administrator on 2017/6/13.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

define(['jquery','js/util/findIndex.js'], function ($,findIndex) {
    function ScrollChange(options) {
        if(!options.menus || !options.contentList){
            return;
        }
        this.container = $(options.container);
        this.container = $(options.sidebar);
        this.menus = options.menus;
        this.contentList = $(options.contentList);
        this.speed = options.speed || 2000;
        this.coverHeight = options.coverHeight || 0;
        this.activeCls = options.activeCls || 'active';
        this.init();
    }

    ScrollChange.prototype.init = function () {
        this.contentHeight = (function () {
            var heightArr = [];
            for(var i=0;i<this.contentList.length;i++){
                heightArr.push($(this.contentList[i]).offset().top);
            }
            return heightArr;
        }.bind(this))();
        this.bindEvents();
    }

    ScrollChange.prototype.bindEvents = function () {
        $(document).on('click',this.menus,function (event) {
            var $index = $(event.target).index();
            this.onChangeToScroll($index);
        }.bind(this));
        $(window).scroll(function () {
            var $scrollTop = $(document).scrollTop();
            var $index = findIndex($scrollTop+this.coverHeight,this.contentHeight);
            this.onMenuChange($index);
        }.bind(this));
    }

    ScrollChange.prototype.onMenuChange = function (index) {
        $(this.menus).eq(index).addClass(this.activeCls)
            .siblings().removeClass(this.activeCls);
    }

    ScrollChange.prototype.onChangeToScroll = function (index) {
        $('html,body').animate({
            scrollTop: this.contentHeight[index] - this.coverHeight+1
        }, 1000);
    }

    return function (options) {
        return new ScrollChange(options);
    }
})