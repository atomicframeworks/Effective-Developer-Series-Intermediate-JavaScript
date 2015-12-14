(function foo(flag) {
    debugger;
    if (flag) {
        return;
    }
    foo(true);
}(false));