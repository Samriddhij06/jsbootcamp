const source ={
  kim: 99,
  tom: 92
};

//spread syntax is an ellipses: ...
const clone = {
  bob:89,
  ann: 95,
  ...source,  //the source object is spread into the target 
  ron: 85
};

console.log('clone',clone);

const elements = ['fire','water'];
[...elements,'air','earth'];

const elementsClone = [...elements];
console.log('elementsClone',elementsClone);

const sumXYZ = function(x,y,z){
  return x+y+z;
}
const number = [3,5,9];
console.log(sumXYZ(...number));