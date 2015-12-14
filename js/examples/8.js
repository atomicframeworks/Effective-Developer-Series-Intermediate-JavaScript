var some = true;

function a() {
    var example = true;
    function b() {
        var code = true;
        console.log(some, example, code); 
    }
    b();
}
a();