//const weather = require('./weather.json');
//console.log(weather);
const util = require('util');
const fs = require("fs");
const lodash = require("lodash");

const asyncReadFile = util.promisify( fs.readFile );

// Asynchronous read
asyncReadFile('weather.json', function (err, data) {

    console.log("we never get here?");

}).then((data) => {

    console.log("but we do get here!");

    const weatherArray = JSON.parse(data);

    weatherArray.forEach(element => {
        console.log( element ); 
    });

    const lowDay = lodash.minBy( weatherArray, 'low');
    const hiDay = lodash.maxBy( weatherArray, 'high');

    console.log(`Hi Temp was on ${hiDay.day} at ${hiDay.high} degrees.` );
    console.log(`Low Temp was on ${lowDay.day} at ${lowDay.low} degrees.` );


}).catch((err) => {
    console.error(err);
});