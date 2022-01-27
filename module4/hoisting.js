// let variables are not hoisted
{
  let zoo;

  zoo = {};
  console.log('zoo',zoo);
}
// var declerations are hoisted
//they are hoisted to the top of the function scope
//a regular code block does not limit the hoisting
// var zoo; //implicitly declared
console.log('zoo',zoo);
{
  zoo = {};
  console.log('zoo',zoo);
  var zoo;
}
// a function does limit the hoisting 
console.log('zoo',zoo); //reference error zoo is not defined
function test(){
  zoo = {};
  console.log('zoo',zoo);
  var zoo;
}
{
  a = 2;
  b = 4;
  c = 3;
  const result = (a+b)/c;
  var a,b,c;
  console.log('result',result);
}