const numbers = [1,2,3];
const callback = number => {
  console.log('number',number);
};
numbers.forEach(callback);
function lessthan(y){
  return function(x){
    return x<y;
  }
}
const lessThan30 = lessthan(30);
lessThan30(20);