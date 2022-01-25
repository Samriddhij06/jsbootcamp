var arrowFunc = () => {
  console.log('hello from arrow function');
}

// one param (no parentheses)
//single line return (no explicit 'return keyword')
var createLogInfo = info => info +'info';

(() => console.log('i am anonymous arrow function'))();