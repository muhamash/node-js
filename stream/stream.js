const fs = require( 'fs' );

const myStream = fs.createReadStream( `${__dirname}/data.txt` );

myStream.on( 'data', ( chunk ) =>
{
    // console.log( chunk );
    // console.log(chunk.toString());
} );