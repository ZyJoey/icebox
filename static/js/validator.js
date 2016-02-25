var strategies = {
	isNonEmpty:function(value,errorMsg){
		if(/^\s*$/.test(value)){
			return errorMsg;
		}
	},
	minLength:function(value,length,errorMsg){
		if(value.trim().length<length){
			return errorMsg;
		}
	},
	maxLength:function(value,length,errorMsg){
		if(value.trim().length>length){
			return errorMsg;
		}
	},
	isSame:function(dom1,dom2,errorMsg){
		if(dom1 !== dom2){
			return errorMsg;
		}	
	},
	isCharacter:function(value,errorMsg){
		if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)){
			return errorMsg;
		}
	},
	isMobile:function(value,errorMsg){
		if(!/^1[3|5|8][0-9]{9}$/.test(value)){
			return errorMsg;
		}
	},
	isEmail:function(value,errorMsg){
		if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(value)){
			return errorMsg;
		}
	}
};
var Validator = function(){
	this.cache = [];
};
Validator.prototype.add = function(dom,rules){
	var self = this;
	for(var i = 0,rule;rule = rules[i++];){
		(function(rule){
			var strategyAry = rule.strategy.split(":");
			var errorMsg = rule.errorMsg;
			self.cache.push(function(){
				var strategy = strategyAry.shift();
				strategyAry.unshift(dom.value);
				strategyAry.push(errorMsg);
				return strategies[strategy].apply(dom,strategyAry);
			});
		})(rule);
	}
};
Validator.prototype.start = function(){
	for(var i = 0,validatorFunc;validatorFunc = this.cache[i++];){
		var errorMsg = validatorFunc();
		if(errorMsg){
			return errorMsg;
		}
	}
};

