var Vue = require('bower_components/vue/dist/vue.js');

module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('test.html')
});