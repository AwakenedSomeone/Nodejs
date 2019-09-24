var foo = "hello world";

function add (x, y) {
    return  x + y;
}

// 这种方式导出的模块是一个对象的形式，必须使用obj.add的方式才能拿到
// add这个函数
// exports.add = add;
// 如果想直接拿到某个函数，而不使用对象的方式，则使用以下方式
module.exports = add;

