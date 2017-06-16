/**
 * Created by Administrator on 2017/6/13.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

require(['jquery','js/util/scrollChange.js'], function ($,scrollChange) {
    scrollChange({
        container: '.ir-paper>.ir-container',
        sidebar: '.ir-paper-year-list',
        menus: '.ir-paper-year-item',
        contentList: '.ir-paper-sub-area',
        coverHeight: 130,
        fixedTop: 130
    })
})