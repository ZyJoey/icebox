/**
 * Created by iFree on 2016/5/25.
 */
var dialog = (function(){
    function getTemplate(state,obj){
        var template;
        switch(state){
            case "confirm":
                template = '<div class="d-main">'
                    +'<p class="d-title">{{title}}</p>'
                    +'<p class="d-content">{{content}}</p>'
                    +'<div class="d-btn-wrap">'
                    +'<button class="d-btn js-d-confirm w-50">确定</button>'
                    +'<button class="d-btn js-d-cancel w-50">取消</button>'
                    +'</div>'
                    +'</div>';
                break;
            case "info":
                template =  '<div class="d-main">'
                    +'<p class="d-title">{{title}}</p>'
                    +'<p class="d-content">{{content}}</p>'
                    +'<div class="d-btn-wrap">'
                    +'<button class="d-btn js-d-confirm w-100">确定</button>'
                    +'</div>'
                    +'</div>';
                break;
        };
        if(obj.title && typeof obj.title == 'string'){
            template = template.replace(/{{title}}/,obj.title);
        }else{
            template = template.replace(/{{title}}/,"提示");
        }
        template = template.replace(/{{content}}/,obj.content);
        return template;
    }

    function doConfirm(fn){
        var confirm_btn = document.getElementsByClassName("js-d-confirm")[0];
        confirm_btn.addEventListener("mouseup",function(){
            var dialog = document.getElementById("dialog");
            document.body.removeChild(dialog);
            if(fn && typeof fn == "function"){
                fn();
            }
        },false);
    }

    function doCancel(fn){
        var cancel_btn = document.getElementsByClassName("js-d-cancel")[0];
        cancel_btn.addEventListener("mouseup",function(){
            var dialog = document.getElementById("dialog");
            document.body.removeChild(dialog);
            if(fn && typeof fn == "function"){
                fn();
            }
        },false);
    }

    return {
        confirm:function(obj,confirmFn,cancelFn){
            if(!!document.getElementById("dialog")){
                return false;
            }
            var template = getTemplate("confirm",obj);
            /*创建模态框*/
            var dialog = document.createElement("div");
            dialog.id = "dialog";
            dialog.innerHTML = template;
            dialog.style.height = window.screen.availHeight +"px";
            document.body.appendChild(dialog);
            doConfirm(confirmFn);
            doCancel(cancelFn);
        },
        info:function(obj,confirmFn){
            if(!!document.getElementById("dialog")){
                return false;
            }
            var template = getTemplate("info",obj);
            var dialog = document.createElement("div");
            dialog.id = "dialog";
            dialog.innerHTML = template;
            dialog.style.height = window.screen.availHeight +"px";
            document.body.appendChild(dialog);
            doConfirm(confirmFn);
        }

    }
})();