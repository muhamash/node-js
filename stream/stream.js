const fs = require( 'fs' );

const myStream = fs.createReadStream( `${__dirname}/data.txt` );
const myWrite = fs.createWriteStream( `${__dirname}/outputPipe.txt` );

// myStream.on( 'data', ( chunk ) =>
// {
//     // console.log( chunk );
//     // console.log(chunk.toString());
//     myWrite.write( chunk );
// } );

myStream.pipe( myWrite );