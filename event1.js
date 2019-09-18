// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();


// 绑定 click 事件处理程序
eventEmitter.on('click', function() { // 创建事件处理回调函数
    console.log('你点了我一下');

});



// 触发 connection 事件
eventEmitter.emit('click');

