// Global context
eval('var h = 3110');
 
(function foo() {
    // Local context - foo
    eval('var i = 1');
}());
  
alert(h); // 3110;
alert(i); // ReferenceError: i is not defined