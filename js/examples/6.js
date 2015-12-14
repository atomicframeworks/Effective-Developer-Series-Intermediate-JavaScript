var a = 1;
with ({a: 2}) {
    var foo = function () {
        return a;
    }
}

console.log(a);
console.log(foo());