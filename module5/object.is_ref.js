//object.is returns whether two values are equal
//a primitve is always equal to itself 
console.log(Object.is('bar','bar'));
console.log(Object.is(1=='1'));
console.log(Object.is(+0,-0))
const obj1 = {};
const obj2 = {};
const ref1 = obj1;
console.log(Object.is(obj1,obj2));
console.log(Object.is(obj1,ref1));
const inner = {
  zoo: 10,
  zar: 11
};
const source = {
  foo: 5,
  bar: 6,
  tee:inner
};

//shallow clone
const shallowClone = Object.assign({},source);
const spreadClone = {...source};

shallowClone.foo = -1;

inner.zoo = -88;
shallowClone.tee.zar = -5;

console.log('source',source);
console.log('shallowClone',shallowClone)
console.log('spreadclone',spreadClone);
