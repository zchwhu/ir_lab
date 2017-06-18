/**
 * Created by Administrator on 2017/6/18.
 */

requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min'
    }
});

require(['jquery','js/util/toggleShow.js'],function ($,toggleShow) {
    toggleShow('.ir-user-logged','.ir-dropdown','show');
})