//JSON format
//only the key names have double quotes 
//strings,numbers,booleans,null,arrays and objects
//no functions
const carJson = `{
  "color":"red",
  "doors": 2,
  "features":["convertible","four-wheel drive"],
  "details":{
    "year": 2019,
    "manufacturer":"Honda"
  },
  "sold": false,
  "owner": null
}`;
JSON.parse(carJson);
const owner = {name: 'J.M.'};

const car = {
  color:'blue',
  doors:4,
  features: ['sunroof'],
  details: {
    year: 2019,
    manufacturer: 'Mercedes'
  },
  sold: true,
  owner
};
JSON.stringify(car);
const carClone =  JSON.parse(JSON.stringify(car));
const shallowClone = Object.assign({},car);
car.owner.name = 'D.T';
console.log('car',car);
console.log('carClone',carClone);
console.log('shallowClone',shallowClone);