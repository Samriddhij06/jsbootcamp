var store = {};
store.test = "foo";
store.test; //'foo' object

var job = [];
jobs.test = "foo";
jobs.test; //object

var log = function() {};
log.test = "foo"; //object
log.test;

var total = 1;
total.test = "foo"; 
total.test;   //not object

var greeting = 'hello';
greeting.test = 'foo';
greeting.test;  //not object