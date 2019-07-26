let x,y,z;

x = 10;
y = '10';
z = 30;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

console.log('The comparison of x==y is:', x == y);


var newX = x++;
console.log(`newX is ${newX}`);




let timeInMs = Date.now();

let days = Math.round((timeInMs / 1000) / 60 / 60 / 24);
let weeks = Math.round( days / 7 );
let months = Math.round( weeks / 4.3 );
let years =  Math.round( months / 12 ); 

console.log('Days since Epoch: ', days);
console.log('Weeks since Epoch: ', weeks);
console.log('Months since Epoch: ', months);
console.log('Years since Epoch: ', years);