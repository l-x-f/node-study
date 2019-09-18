var fs = require("fs");

console.log("准备删除文件！");

for (var i = 1; i < 11; i++) {
    fs.unlink('../test/myfile'+i+'.html', function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("文件删除成功！");
    });

}


// 执行前创建一个空的 /tmp/test 目录  空的才可以删除
console.log("准备删除目录 /tmp/test");
fs.rmdir("../test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");

});