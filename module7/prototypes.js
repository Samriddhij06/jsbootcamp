const t ='ahoy';

t.__proto__;
Object.is(t.__proto__,String.prototype);

t.__proto__.__proto__;
Object.is(t.__proto__.__proto__,Object.prototype);

Object.is(Number.__proto__.__proto__,Object.prototype);