// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 绑定 connection 事件处理程序
eventEmitter.on('connection', function() { // 创建事件处理回调函数
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('dataReceived');
});

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('dataReceived', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

