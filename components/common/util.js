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

module.exports = {
	Date:Date
}
