let week = [ { day: "Sunday", hi: 88, low: 60 },
             { day: "Monday", hi: 85, low: 62 },
             { day: "Tuesday", hi: 82, low: 59 },
             { day: "Wednesday", hi: 90, low: 67 } ];

let highestDay = week[0]; 
let lowestDay = week[1];

week.forEach( (currentDay) => {
    highestDay = currentDay.hi > highestDay.hi ? currentDay : highestDay;
    lowestDay = currentDay.low < lowestDay.low ? currentDay : lowestDay;
});

console.log(`The lowest temperature this week was on ${lowestDay.day} and it was ${lowestDay.low}.` );
console.log(`The highest temperature this week was on ${highestDay.day} and it was ${highestDay.hi}.`);