var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
const path = require("path")



function resolve(dir) {
    return path.join(__dirname, dir)
}

const dir = "input.js"

fs.createReadStream(resolve(dir))
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(dir + '.zip'));

console.log("文件压缩完成。");


// 输出全局变量 __filename 的值
console.log("我的文件目录是：", __filename);

// 输出全局变量 __dirname 的值
console.log(__dirname);