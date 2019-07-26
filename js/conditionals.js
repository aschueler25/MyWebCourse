let numOne = 1;
let strOne = '1';

console.log('double == ', numOne == strOne);
console.log('triple === ', numOne === strOne);


const day = new Date().getDay();

if ( day == 0 || day == 6 ) {
    console.log("Its the weekend!");
} else if ( day == 1) {
    console.log("It's Monday, back to work!");
} else if ( day == 3) {
    console.log("Over the hump!");

} else { console.log("Its a weekday ");}

