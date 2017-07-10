/**
 * Created by Administrator on 2017/7/11.
 */
requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

define(['jquery'], function ($) {
    function preview(previewImgs,previewArea,previewWrapper){
        var previewImgs = $(previewImgs),
            previewArea = $(previewArea),
            previewWrapper = $(previewWrapper);

        $(previewImgs).click(function () {
            var imgSrc = $(this).attr('src');
            $(previewArea).attr('src',imgSrc);
            $(document.body).addClass('inpreview');
        })

        $(previewWrapper).click(function () {
            $(document.body).removeClass('inpreview');
        })
    }

    return preview;
})