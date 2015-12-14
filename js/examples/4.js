function foo() {
    try {
        throw 'junk'
    } catch (ex) {
        function nested() {
            return ex;
        };
        return nested();
    }
}

foo();