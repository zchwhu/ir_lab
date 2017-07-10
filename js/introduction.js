/**
 * Created by Administrator on 2017/7/11.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

require(['jquery','js/util/toggleShow.js','js/util/preview.js'],function ($,toggleShow,preview) {
    var CONST = {
        NAV_HEIGHT: 100
    }

    toggleShow('.ir-user-logged','.ir-dropdown','show');

    preview('.ir-gallery-preview','.ir-preview-area','.ir-preview');

    $(window).scroll(function () {
        var $scrollTop = $(document).scrollTop();
        if($scrollTop>CONST.NAV_HEIGHT){
            $(".ir-header").addClass('onscroll');
        }else{
            $(".ir-header").removeClass('onscroll');
        }
    });
})