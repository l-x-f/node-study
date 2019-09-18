// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

console.log(1,buf1.toString());
console.log(2,buf2.toString('utf-8'));
console.log(3,buf3.toString('utf-8'));
console.log(4,buf4.toString('utf-8'));
console.log(5,buf5.toString('utf-8'));
console.log(6,buf6.toString('latin1'));


const buf= Buffer.alloc(256);
len = buf.write("你是一个苹果");

console.log("写入字节数 : "+  len +"\n我存的内容："+buf);




const buff = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buff[i] = i + 97;
}

console.log( buff.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buff.toString('ascii',0,5));   // 输出: abcde
console.log( buff.toString('utf8',0,5));    // 输出: abcde
console.log( buff.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde