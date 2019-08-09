const Rev = require('./reverse.js');

//const myImp = new Rev();
const myRev = new Rev.ReverseIt( process.argv[2] );

console.log( `input was ${process.argv[2]}, output is ${myRev.getOutput() }`);

const myCap = new Rev.CapIt('the stupid quick brown fox');
console.log( myCap.getOutput() );

