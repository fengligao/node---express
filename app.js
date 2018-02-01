var express = require("express"); //引入 express
var app = express(); //
var fs = require("fs");
app.set("views", "./views");
app.set("view engine", "ejs");
app.use('/public', express.static('public')); //访问public下面的静态文件

app.get("/", function (req, res) {
    fs.readFile("./data.json", function (err, result) {
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.render("index.ejs", {result: JSON.parse(result)});
    });
});


app.get("/add", function (req, res) {
    res.render("add.ejs");
});

var objArr = [];
app.get("/addCon", function (req, res) {
    var username = req.query.username;
    var sex = req.query.sex;
    var age = req.query.age;

    var obj = {username: username, sex: sex, age: age};
    objArr.push(obj);

    fs.writeFile("data.json", JSON.stringify(objArr));
    res.redirect("/");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});


/*
* 模板引擎 就是让html，css去识别后台的变量
*node模板引擎
* ejs
* jade
*
* php模板引擎
* smarty
*
* JavaScript模板引擎
*
*
* html+css
*
*
* */