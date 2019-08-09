var events = require("events");


function createRandom(max) {

    this.max = max;
    this.num = 0;
    this.totalInts = 0;
    this.sightings = 0;


    function generate() {
        this.totalInts++;
        return Math.floor( Math.random() * Math.floor(max));
    }

	return Object.assign(new events.EventEmitter(), {
		generate: generate
	});
}

var myRandom = createRandom(20);

sightingHandler = function() {
    console.log("a sighting has occurred, total ints = " ); // + myRandom.totalInts );
 //   myRandom.sightings++;
}

myRandom.on('sighting', sightingHandler );

generator = function()  {
    

}

var myInt = setInterval( generator, 50);



function stopInt() {
    console.log("Exiting...")
    clearInterval(myInt);
    console.log(`Total ints = ${myRandom.totalInts}, sightings = ${myRandom.sightings }`);
}

var myProg = setTimeout( stopInt, 8000 );

