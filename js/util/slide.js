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
        this.container = options.container;
        this.total = options.total;
        this.target = $(options.target);
        this.item = $(options.item);
        this.prevControl = $(options.prev);
        this.nextControl = $(options.next);
        this.init();
    }

    Slide.prototype.init = function () {
        this.step = this.item.width();
        this.bindEvents();
    }

    Slide.prototype.show = function () {
        if(this.item.length>this.total){
            this.container.css({
                'visibility': 'visible'
            })
        }
    }

    Slide.prototype.bindEvents = function () {
        this.prevControl.click(function () {
            this.prev()
        }.bind(this));
        this.nextControl.click(function () {
            this.next();
        }.bind(this));
    }

    Slide.prototype.slide = function () {

    }

    Slide.prototype.prev = function () {

    }

    slide.prototype.next = function () {

    }

    return function (options) {
        return new Slide(options);
    }
})