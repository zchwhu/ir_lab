/**
 * Created by Administrator on 2017/6/18.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

define(['jquery'], function ($) {
    return function (trigger,target, cls,event) {
        var event = event || 'click';
        $(document).on(event,trigger,function (e) {
            e.stopPropagation();
            if ($(target).css('visibility') == 'hidden'
                || $(target).css('display') == 'none'
                || $(target).css('opacity') == 0) {
                $(target).addClass(cls);
            }else{
                $(target).removeClass(cls);
            }
        })
    }
})