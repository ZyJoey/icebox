/**
 * Created by iFree on 2016/5/25.
 */

var crud = require('../models/crud')
var photo = require('../models/photo')

module.exports = function (app) {
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