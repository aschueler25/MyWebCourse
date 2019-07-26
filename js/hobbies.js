


let hobbies = [ { name: 'guitar', lengthInYearsAtHobby: 30 },
                { name: 'games', lengthInYearsAtHobby: 40 },
                { name: 'puzzles', lengthInYearsAtHobby: 35} ];



function printHobby( hobby ) {
    console.log( ` ${hobby.name} ${hobby.lengthInYearsAtHobby } `);
}

hobbies.forEach( function( item ) {
    printHobby( item );
});


let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}

let band2 = new Object();
band2.name = "Journey";
band2.city = "San Francisco";
band2.country = "USA";
band2.yearFormed = 1975;
band2.genres = ["Classic rock", "Pop Rock", "Soft Rock"];

let bands = [ band1, band2 ];

function printBands( bands ) {

    console.log('length = ', bands.length );
    bands.forEach( function( band ) {
        console.log(`${band.name} from ${band.city}, ${band.country} genres: ${band.genres}`);
    });
};

printBands( bands );
