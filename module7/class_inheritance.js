class Structure{
  constructor(){
    this.isStructure = true;
    this.humanMade = true;
  }
}
// class inheritance is achivied through the `extends` keyword
class Building extends Structure{
  constructor(name,stories,address){
    //a super call is necessary to invoke the parent const
    //even if parent has no arguments
    //so parent can set properties
    super();
    this.name = name;
    this.stories = stories;
    this.address =  address;
    this.guests = [];
  }
  info(){
    console.log(
      'name:',
      this.name,
      '| stories',
      this.stories,
      '| address:',
      this.address
    );
  }

get needElevator(){
  return this.stories > 10;
}
set guest(values){
  this.guests.push(value);
}
}
class Resturant extends Building{
  constructor(name,stories,address,cuisine){
    super(name,stories,address);
    this.cuisine= cuisine;
  }
  //in addition to the constructor, methods can be overridden as well
  // call the methods implemented in the parent using `super`
  info(){
    super.info();
    console.log(`We serve ${this.cuisine} cusine`);
  }
}
const kaiju = new Resturant(
  'kaiju',
  2,
  'SF,CA',
  'Japanese'
);
console.log('kaiju',kaiju);
console.log(kaiju.info);