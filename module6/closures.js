//closures are a combination of inner function and its env
//env: global scope,outer function's scope.inner scope

function outer(){
  let username = '';
  let password = '';


function setUsername(newUserName){
  username = newUserName;
}
function setPassword(newPassword){
  password = newPassword;
}
return {
  signup: function(user,pass){
    setUsername(user);
    setPassword(pass);
  },
  debug: function(){
    console.log('username',username,'password',password);
  },
  signin: function(user,pass){
    return(user === username) && (pass===password);
  }
};
}
const account = outer();
account.signup('jerry','fool123');
console.log(account);
account.debug();

const attempt1 = account.signin('jerry','foo123');
const attempt2 = account.signin('hackr','fo1234');