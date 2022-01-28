function Building(name,stories,address){
  this.name = name;
  this.stories = stories;
  this.address = address;
  this.info=function(){
    console.log('name:',this.name,'| stories:',this.stories,'|address',this.address);
  }
}
const empireState = new Building(
  'empire state building',
  102,
  'NY,NY'
);
console.log('empireststate',empireState);
console.log(empireState.info());
