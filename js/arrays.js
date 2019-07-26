

function printHobbies( passedArray ) {
    console.log(`I like ${passedArray.length} things:`);
    passedArray.forEach( function(value ) {
        console.log('I like', value);
    });
}

let hobbies = [ 'guitar', 'games', 'puzzles'];

printHobbies( hobbies );

let myColor = ['Red', 'Green', 'White', 'Black'];
console.log( myColor.join(), myColor.join(''), myColor.join('+'));

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

arr1.sort();

let mf = 1;
let m = 0;
let item;

arr1.forEach(function (val1 ) {
    arr1.forEach( function(val2 ) {
        if ( val1 == val2 )
            m++;
        
        if ( mf< m)
        {
            mf=m;
            item = val1;
        }   
    });
    m= 0;
});
console.log( item, ' = ', mf, 'times');