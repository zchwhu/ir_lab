/**
 * Created by Administrator on 2017/6/13.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

require(['jquery', 'js/util/scrollChange.js', 'js/util/setFixed.js','js/util/toggleShow.js'], function ($, scrollChange, setFixed,toggleShow) {
    var CONST = {
        SCROLL_Y: 130,
        MAIN_WINDTH: 1140,
        NAV_HEIGHT: 100,
        BANNER_HEIGHT: 380
    }

    toggleShow('.ir-user-logged','.ir-dropdown','show');

    scrollChange({
        container: '.ir-paper>.ir-container',
        sidebar: '.ir-paper-year-list',
        menus: '.ir-paper-year-item',
        contentList: '.ir-paper-sub-area',
        coverHeight: CONST.SCROLL_Y,
        speed: 1000
    })

    var $winWidth = $(window).width(),
        $setFixedLeft = ($winWidth - CONST.MAIN_WINDTH) / 2;
    setFixed({
        target: '.ir-paper-year-list',
        scrollY: CONST.BANNER_HEIGHT - CONST.NAV_HEIGHT,
        changedStyle: {
            position: 'fixed',
            left: $setFixedLeft,
            top: CONST.SCROLL_Y
        },
        defaultStyle: {
            position: 'absolute',
            left: 0,
            top: 0
        }
    })

    $(window).scroll(function () {
        var $scrollTop = $(document).scrollTop();
        if($scrollTop>CONST.NAV_HEIGHT){
            $(".ir-header").addClass('onscroll');
        }else{
            $(".ir-header").removeClass('onscroll');
        }
    });
})