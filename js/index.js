/**
 * Created by Administrator on 2017/6/20.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

require(['jquery','js/util/slide.js','js/util/toggleShow.js'],function ($,slide,toggleShow) {
    slide({
        container: '.ir-control-group',
        target: '.ir-team-list',
        item: '.ir-team-item',
        prev: '.prev',
        next: '.next',
        total: 4
    })

    toggleShow('.ir-user-logged','.ir-dropdown','show');
})