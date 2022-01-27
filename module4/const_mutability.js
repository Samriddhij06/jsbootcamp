// let variables can be declared wihtout assignment, they will be undefined
let total;
total =10;
total = 11;

// const variables have to be assigned when declared
const foo; //syntax error

const foo = 20; 
foo = 21;  //syntax error 

// constants that are assigned to multiple objects can be mutated 

const foo = function(){};
foo.test = 'bar';
foo.test; //'bar'
