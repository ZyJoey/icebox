/**
 * Created by iFree on 2016/5/25.
 */
var Food = {
  UnitOptions: [
    { "value": "g", "text": "克" },
    { "value": "kg", "text": "千克" },
    { "value": "ind", "text": "个" },
    { "value": "pk", "text": "包" },
    { "value": "bottle", "text": "瓶" },
    { "value": "bag", "text": "袋" },
    { "value": "item", "text": "条" },
    { "value": "box", "text": "盒" },
    { "value": "piece", "text": "件" }
    ],
  categoryOptions: [
    { "value": "meet", "text": "肉类" },
    { "value": "fruit", "text": "蔬果" },
    { "value": "staple", "text": "主食" },
    { "value": "dessert", "text": "甜食" },
    { "value": "other", "text": "其它" }
    ],
  saveUnitOptions: [
    { "value": "day", "text": "天" },
    { "value": "month", "text": "月" },
    { "value": "year", "text": "年" }
    ]
};
var food = function (param) {
  return Object.assign({}, Food, param);
};

module.exports = food;
