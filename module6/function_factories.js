function makeSuffixer(suffix){
  const seperator = ' ';
  function addSufix(word){
    return word + seperator + suffix;
  }
  return addSufix;
}
const addLy = makeSuffixer('ly');  //closure
console.log('addLy',addLy);

const smartly = addLy('smart');
console.log('addly',addLy);