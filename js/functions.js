function displayName( me ) {
    console.log('Hello, ', me);
}

displayName('Andrew');

function convertToFah( celsius ) {

    return celsius * (9/5) + 32;
}

function convertToCel( fah ) {

    return (fah - 32) * (5/9);
}

console.log(`212 F is ${convertToCel(212)} celcius`);

console.log(`100 C is ${convertToFah(100)} fah`);