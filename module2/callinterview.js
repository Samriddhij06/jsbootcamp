logmessage(greet(() => greet(() => 'hi')));
function logmessage(message){
  console.log(message);
}
function greet(callback){
  return callback();
}