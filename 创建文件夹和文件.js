var fs = require("fs");
var rootDir="../test/";
console.log("创建目录 /tmp/test/");
fs.mkdir(rootDir,function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功");
});


var index=0;
var timer=setInterval(function () {

index++;
    fs.open(rootDir+'myfile'+index+'.html', 'wx+',function(err, fd) {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('myfile already exists');
                return;
            }

            throw err;
        }
        console.log(fd);

    });


    console.log("准备写入文件");
    fs.writeFile(rootDir+'myfile'+index+'.html', '<!doctype html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport"\n' +
        '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
        '    <title>'+'myfile'+index+'</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '</body>\n' +
        '</html>',function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
        fs.readFile(rootDir+'myfile'+index+'.html', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
        });
    });




    if(index==10){
        clearInterval(timer)
    }



},1000)