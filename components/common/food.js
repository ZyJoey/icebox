var Food = {
	UnitOptions : [
		{"value":"g","text":"克"},
		{"value":"kg","text":"千克"},
		{"value":"ind","text":"个"},
		{"value":"pk","text":"包"},
		{"value":"bottle","text":"瓶"},
		{"value":"bag","text":"袋"},
		{"value":"item","text":"条"},
		{"value":"box","text":"盒"},
		{"value":"piece","text":"件"}
	],
	categoryOptions : [
		{"value":"meet","text":"肉类"},
		{"value":"fruit","text":"蔬果"},
		{"value":"staple","text":"主食"},
		{"value":"dessert","text":"甜食"},
		{"value":"other","text":"其它"}
	],
	saveUnitOptions : [
		{"value":"day","text":"天"},
		{"value":"month","text":"月"},
		{"value":"year","text":"年"}
	]
};
food = function(param){
	var obj = Object.create(Food);

	obj.name = param.name;		//名称
	obj.category = param.category;	//类别
	obj.num = param.num;		//含量
	obj.unit = param.unit;			//含量单位
	obj.prodDate = param.prodDate;	//生产日期
	obj.storedDate = param.storedDate;//存放日期
	obj.saveTime = param.saveTime; //保质期
	obj.saveUnit = param.saveUnit;	//保质期单位
	obj.img = param.saveImg;			//图片
	obj.position = param.position;		//图片定位

	return obj;
};

module.exports = food;