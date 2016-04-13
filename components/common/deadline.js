
module.exports = (function(){
	var	prodDate,	//生产日期
		curDate,	//当前日期
		deadDate,	//过期日期
		deadDay;	//剩余天数

	function toDay(time,unit){
		switch (unit){
			case "年": time *= 365;
				break;
			case "月": time *= 30;
				break;
			default : time *= 1;
				break;
		}
		return time;
	}

	function getDeadday(deadDay){
		return Math.floor(deadDay/(24*3600*1000));
	}

	/*计算时间差*/
	return function(prod,time,unit){
		time = toDay(time,unit);
		prodDate = new Date(prod);
		time = time + Number(prodDate.getDate());

		deadDate = prodDate.setDate(time);	//过期日期毫秒制
		curDate = Date.now();			//生产日期毫秒制
		deadDay = deadDate - curDate;
		
		deadDay = getDeadday(deadDay);
		return deadDay;
	}

})();
