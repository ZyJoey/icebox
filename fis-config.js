//指定需要编译的文件夹与引用
fis.set("project.files",["public"]),

fis.set("statics","/statics");

fis.set("version":"v.0.1");

fis.hook("module",{
	mode: "mod"
});

/*************************目录规范*****************************/
fis.match("**/*",{
    release: '${statics}/$&'
})

.match('*.{png,jpg}', {
    release: '/statics/$0'
})
//modules下面都是模块化资源
    .match(/^\/modules\/(.*)\.(js)$/i,{
        isMod: true,
        id: '$1', //id支持简写，去掉modules和.js后缀中间的部分
        release: '${statics}/$&'
    })
//page下面的页面发布时去掉page文件夹
    .match(/^\/page\/(.*)$/i, {
        useCache: false,
        release: '$1'
    })
//一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
//直接引用为var $ = require('jquery');
    .match(/^\/modules\/([^\/]+)\/\1\.(js)$/i,{
        id: '$1'
    })
//less的mixin文件无需发布
    .match(/^(.*)mixin\.less$/i,{
        release: false
    })
//前端模板,当做类js文件处理，可以识别__inline, __uri等资源定位标识
    .match("**/*.tmpl",{
        isJsLike: true,
        release : false
    })
//页面模板不用编译缓存
    .match(/.*\.(html|jsp|tpl|vm|htm|asp|aspx|php)$/,{
        useCache: false
    })
    .match('*.{js,css}', {
        useHash: true
    })


/****************异构语言编译*****************/
//less的编译
//npm install [-g] fis-parser-less
fis.match('**/*.less', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('less', {
        //fis-parser-less option
    })
});



//打包与css sprite基础配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true // 资源映射表内嵌
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
})
