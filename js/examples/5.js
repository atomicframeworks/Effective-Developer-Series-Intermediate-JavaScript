function foo() {
    try {
        throw 'junk'
    } catch (ex) {
        var wow = function () {
            return ex;
        };
        return wow();
    }
}

foo();