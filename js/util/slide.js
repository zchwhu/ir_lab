/**
 * Created by Administrator on 2017/6/20.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

define(['jquery'], function ($) {
    function Slide(options) {
        this.container = $(options.container);
        this.total = options.total;
        this.target = $(options.target);
        this.item = $(options.item);
        this.prevControl = $(options.prev);
        this.nextControl = $(options.next);
        this.speed = options.speed || 1000;
        this.currentIndex = 0;
        this.init();
    }

    Slide.prototype.init = function () {
        this.length = this.item.length;
        if(this.item.length<=this.total){
            return;
        }
        this.show();
        this.step = this.item.width();
        this.target.width(this.item.length*this.step);
        this.bindEvents();
    }

    Slide.prototype.show = function () {
        this.container.css({
            'visibility': 'visible'
        })
    }

    Slide.prototype.bindEvents = function () {
        this.prevControl.click(function () {
            this.prev()
        }.bind(this));
        this.nextControl.click(function () {
            this.next();
        }.bind(this));
    }

    Slide.prototype.slide = function (dis) {
        this.target.animate({
            "marginLeft": "+=" + dis
        },this.speed,"swing");
    }

    Slide.prototype.prev = function () {
        if(this.target.is(":animated")){
            return;
        }
        var dis;
        if(this.currentIndex === 0){
            this.currentIndex = this.length - this.total;
            dis =  - this.step*(this.currentIndex);
        }else{
            dis = this.step;
            this.currentIndex --;
        }
        this.slide(dis);
    }

    Slide.prototype.next = function () {
        if(this.target.is(":animated")){
            return;
        }
        var dis;
        if(this.currentIndex+this.total === this.length){
            dis = this.step * this.currentIndex;
            this.currentIndex = 0;
        }else{
            dis = -this.step;
            this.currentIndex++;
        }
        this.slide(dis);
    }

    return function (options) {
        return new Slide(options);
    }
})