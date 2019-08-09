var moment = require('moment');
var momentTZ = require('moment-timezone');

console.log(`today is ${moment().format('MM-DD-YYYY')}`);

console.log(`difference is ${moment("20110101", "YYYYMMDD").fromNow()} years ago`);

var nowEST = moment().tz('America/New_York').format('h:mma');
var nowPSD = moment().tz('America/Los_Angeles').format('h:mma');
console.log(`Current time Eastern Standard: ${nowEST}, Pacific: ${nowPSD}`);