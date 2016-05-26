/**
 * Created by iFree on 2016/5/25.
 */
var deadline = (function () {
    function isLeapYear(year) {
        if (year % 4 === 0 && year % 100 !== 0) {
            return true;
        }
        return false;
    }

    function getTotalMonth(year) {
        if (isLeapYear(year)) {
            return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    function getTotalDay(year) {
        if (isLeapYear(year)) {
            return 366;
        }
        return 365;
    }

    /*距离1月1日的天数*/
    function beginYear(obj) {
        var month = getTotalMonth(obj.year),
            sum = 0,
            i = 0;
        for (i, len = obj.month - 1; i < len; i++) {
            sum += month[i];
        }
        sum += (obj.day * 1);
        return sum;
    }

    /*距离12月31日的天数*/
    function endYear(obj) {
        var month = getTotalMonth(obj.year),
            sum = 0,
            i = obj.month - 1;
        for (i; i < 12; i++) {
            sum += month[i];
        }
        sum -= obj.day;
        return sum;
    }

    /*计算日期*/
    return function (firDate, lastDate) {
        var sum = 0;
        // 拆分字符串获取年月日
        var firArr = firDate.split("-"),
            lastArr = lastDate.split("-");

        var firObj = {
                "year": firArr[0],
                "month": firArr[1],
                "day": firArr[2]
            },
            lastObj = {
                "year": lastArr[0],
                "month": lastArr[1],
                "day": lastArr[2]
            };

        var yYear = lastObj.year - firObj.year;
        if (yYear === 0) {
            return sum = beginYear(lastObj) - beginYear(firObj);
        } else if (yYear > 0) {
            for (var i = 0; i < yYear - 1; i++) {
                sum += getTotalDay(firObj.year + i);
            }
            return sum += endYear(firObj) + beginYear(lastObj);
        }
    }
})();