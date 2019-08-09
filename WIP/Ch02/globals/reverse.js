exports.ReverseIt = function(input) {
    this.input = input;

    this.getOutput = function() {
        let stArray = this.input.split('');
        let revStr = '';
        for ( let i=stArray.length-1; i > -1; i-- ) {
            revStr = revStr + stArray[i];
        }
        return revStr;
    }

}


//var myRev = new ReverseIt('WALK');
//console.log('reversing WALK: ' + myRev.getOutput() );

exports.CapIt = function(input) {
    this.input = input;

    this.getOutput = function() {
        let wordArray = this.input.split(' ');
        let newPhrase = new Array();
        wordArray.forEach(element => {
            newPhrase.push( this.capFirst(element) );
        })
        return newPhrase.join(' ');
    }

    this.capFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    } 
}

//var myCap = new CapIt('the quick brown fox');
// console.log( myCap.getOutput() );

//module.exports = ReverseIt, CapIt;