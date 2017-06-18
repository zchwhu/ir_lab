/**
 * Created by Administrator on 2017/6/13.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

define(['jquery'], function ($) {
    return function (options) {
        $(window).scroll(function () {
            if($(document).scrollTop()>options.scrollY){
                $(options.target).css(options.changedStyle);
            }else{
                $(options.target).css(options.defaultStyle);
            }
        })
    }
})