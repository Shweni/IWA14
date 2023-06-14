const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = function(parameter) {
  console.log(parameter)
  console.log(parameter)
}

function output () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}
output()
