const weapon = 'lightsaber';

//when the property and object name as same,thr property name has to be specified once 
const vader = {
  title:'darth',
  children: ['Luke','Leia'],
  weapon //weapon is weapon
};
console.log(vader);

const planets = [
  'mercury',
  'venus',
  'earth',
  ['mars','phobos','demios']
];
const [one,two,three] = planets;

const [one,two,three,fourth='planet']=  planets;

const [one,,,fourth='planet'] = planets;

const [one,,,[fourth,mooon1,moon2]] = planets;

const wizard = {
  name:'Harry',
  age: 17,
  info:{
    hobby: 'Quidditch',
    spells: ['Expelliarmus']
  }
};

const {
  name,
  age,
  house='Gryffindor',
  info:{hobby},
  info
} = wizard;
console.log(name,age,house,hobby,info);