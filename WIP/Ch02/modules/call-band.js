const Band = require('./class-band.js');

const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);
console.log( "number of members: " + beatles.memberCount() );
console.log( "has Ringo: " + beatles.hasMember('Ringo'));