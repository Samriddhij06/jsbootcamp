//class is an alternative to constructor 
class Building{
  constructor(name,stories,address){
    this.name = name;
    this.stories=stories;
    this.address=address;
    this.guests=[];
  }
  info(){
    console.log(
      'name:',
      this.name,
      '|stories:',
      this.stories,
      '| address',
      this.address
    );
  }
  //get does dynamic calculation, they take no argument
  get needElevator(){
    return this.stories>10;
  }
  //set does dynamic calculation,they take one argument
  set guest(value){
    this.guests.push(value);
  }
}
const empireState = new Building(
  'Empire State building',
  102,
  'NY,NY'
);
console.log(empireState.needElevator);
console.log(empireState.guest='J.smith');