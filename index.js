// const greeting = function () {
//     return "Hey, how are you";
// }


function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function hello() { return "hi there!" };
}

function returnsAnAnonymousFunction() {
    return function () { return "helooo" };
}