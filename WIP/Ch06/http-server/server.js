//include the http package
//makes all the APIs available to the http variable
const http = require('http');
const fs = require('fs');

//hostname has default of localhost

//can set the port to listen on
const port = 3000;

const server = http.createServer();


function getFromFile() {

    let weatherStr = ''; 
    fs.readFile('weather.json', function (err, data) {
        if (err) {
            return console.error(err);
         }

        console.log("file read");
        let weatherArray = JSON.parse( data );

        console.log( weatherArray );

        weatherArray.forEach(element => {
            weatherStr += `<p>${element.day} hi was ${element.high}, low was ${element.low} </p>`;
        });
    });
    return weatherStr;

};


server.on('request', (request, response) => {

/*    let weather = '<h1>Weekly Weather!</h1>';
    weather += '<p>Monday high: 90, low: 67</p>';
    weather += '<p>Tues high: 91, low: 65</p>';
    weather += '<p>Weds high: 94, low: 66</p>';
    weather += '<p>Thurs high: 89, low: 64</p>';
    weather += '<p>Fri high: 88, low: 62</p>';
*/
    response.end( getFromFile() );



});

server.listen(3131, (err) => {  
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on http://localhost:3131`);
});

