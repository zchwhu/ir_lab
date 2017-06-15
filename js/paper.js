/**
 * Created by Administrator on 2017/6/13.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

require(['jquery','js/util/scrollChange.js'], function ($,scrollChange) {
    console.log(scrollChange);
    console.log(Object.prototype.toString.call(scrollChange));
    scrollChange({
        menus: '.ir-paper-year-item',
        contentList: $('.ir-paper-sub-area')
    })
})