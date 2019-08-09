
console.log( 'fileName: ' + __filename );
console.log( 'dirName: ' + __dirname );
console.log( 'proc.arg1: ' + process.argv[0] );
console.log( 'proc.arg2: ' + process.argv[1] );

process.argv.forEach(element => {
    console.log( element );
});