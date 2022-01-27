import _ from 'lodash';
const cloneDeep = source => {
  const result = {};
  // [[key,value],[key,value]]
  const entries = Object.entries(source);
  entries.forEach(entry => {
    const[key,value] = entry;
    if(typeof value == 'object'){
    result[key] = cloneDeep(value);
  } else{
          result[key] = value;
  }
});
return result;
};
const source = {
  one : 1,
  nest:{
    two: 2,
    three: 3
  },
  four: [4,'four'],
  log: function() {}
};

//shallow clone - only copies inner object references
const assignClone = Object.assign({},source);
const spreadClone = {...source};

//deep clone - only supports numbers,strings,booleans,null,objects,and arrays
const jsonClone = JSON.parse(JSON.stringify(source));

//deep clone -  works,but needs to handle arrrays
const customClone = cloneDeep(source);


//deep clone - the best option out there 
const lodashClone = _.cloneDeep(source);

source.nest.two = -9;

console.log('source',source);
console.log('assignclone',assignClone);
console.log('spreadclone',spreadClone);
console.log('jsonclone',jsonClone);
console.log('customClone',customClone);
console.log('lodashclone',lodashClone);
