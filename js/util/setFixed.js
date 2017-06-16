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
                console.log('ok');
                $(options.target).addClass('fixed');
            }else{
                $(options.target).removeClass('fixed');
            }
        })
    }
})