/**
 * Created by iFree on 2016/5/25.
 */

var crud = require('../models/crud')
var photo = require('../models/photo')

module.exports = function (app) {
    app.get('/',function(request,response){
        var arr = [
            {"name":"可乐","num":"2","cell":"瓶","date":"1","datecell":"天"},
            {"name":"养乐多","num":"1","cell":"瓶","date":"2","datecell":"天"},
            {"name":"橙汁","num":"3","cell":"瓶","date":"1","datecell":"天"},
            {"name":"芬达","num":"1","cell":"瓶","date":"2","datecell":"天"},
        ];
        response.send(arr);
    })
    
    app.post('/createUser',crud.createUser);

    app.post('/register',crud.register);

    app.get('/getUser',crud.getUser);

    app.post('/uploadImg',photo.uploadImg);

    app.post('/createFood',crud.createFood);

    app.get('/foodList',crud.foodList);

    app.get('/photo/:id',photo.showImg);

    app.put('/updateFood/:id',crud.updateFood);

    app.delete('/delFood',crud.delFood);

    app.get('/returnSign',function (req,res){
        var data = {};
        req.session.username = null;
        data = {
            "code":0,
            "msg":"退出成功"
        };
        res.send(data);
    })
}