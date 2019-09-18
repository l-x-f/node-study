var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");


//非阻塞式的代码

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");


fs.open('myfile.png', 'wx',function(err, fd) {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('myfile already exists');
            return;
        }

        throw err;
    }
console.log(fd);

});