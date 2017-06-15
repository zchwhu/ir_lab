/**
 * Created by Administrator on 2017/6/13.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

define(['jquery'], function ($) {
    function ScrollChange(options) {
        if(!options.menus || !options.contentList){
            return;
        }
        this.menus = $(options.menus);
        this.contentList = options.contentList;
        this.speed = options.speed || 2000;
        this.init();
    }

    ScrollChange.prototype.init = function () {
        this.contentHeight = (function () {
            console.log(this);
            var heightArr = [];
            for(var i=0;i<this.contentList.length;i++){
                console.log(this.contentList[i]);
                heightArr.push($(this.contentList[i]).offset().top);
            }
            console.log(heightArr);
            return heightArr;
        }.bind(this))();
        this.bindEvents();
    }

    ScrollChange.prototype.bindEvents = function () {
        $(document).on('click',this.menus,function () {
            this.onChangeToScroll(2);
        }.bind(this));
    }

    ScrollChange.prototype.onMenuChange = function () {

    }

    ScrollChange.prototype.onChangeToScroll = function (index) {
        $('html,body').animate({
            scrollTop: this.contentHeight[index]
        }, 1000);
    }

    return function (options) {
        return new ScrollChange(options);
    }
})