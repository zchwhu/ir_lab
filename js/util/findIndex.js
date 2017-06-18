/**
 * Created by Administrator on 2017/6/18.
 */
define(function () {
    var findIndex = function (val,arr,begin,end) {
        if(val<arr[0]){
            return 0;
        }
        if(val>arr[arr.length-1]){
            return arr.length-1;
        }
        var begin = begin || 0,
            end = end || arr.length-1;
        if(end - begin == 1){
            return begin;
        }
        var mid = Math.floor((begin+end)/2);
        if(val>=arr[mid]){
            return findIndex(val,arr,mid,end);
        }else{
            return findIndex(val,arr,begin,mid);
        }
    }

    return findIndex;
})