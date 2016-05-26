/**
 * Created by iFree on 2016/5/25.
 */
var util = {};

/*格式化日期*/
Date.prototype.format = function(){
    var yyyy,mm,dd;
    yyyy = this.getFullYear();
    mm = (this.getMonth()+1);
    mm = mm.toString().length == 1 ? "0"+mm : mm;
    dd = this.getDate();
    dd = dd.toString().length == 1 ? "0"+dd :dd;
    return yyyy + "-" + mm +"-" +dd;
}

/*滑动手势*/
var move = (function(element,startEvent,fn){
    var _startX,
        _startY,
        _endX,
        _endY,
        _distanceX,
        _distanceY,
        obj;
    _startX = startEvent.targetTouches[0].clientX;
    _startY = startEvent.targetTouches[0].clientY;
    element.addEventListener("touchmove",function(event){
        _endX = event.targetTouches[0].clientX;
        _endY = event.targetTouches[0].clientY;
        _distanceX = _endX - _startX;
        _distanceY = _endY - _startY;
        obj = {
            "x" : _distanceX,
            "y": _distanceY
        }

        fn.call(this,_distanceX,_distanceY);

    },false);

})

/*取消默认事件*/
util.preventDefault = function(event){
    event.preventDefault();
}

module.exports = {
    Date:Date,
    move:move,
    preventDefault:util.preventDefault
}