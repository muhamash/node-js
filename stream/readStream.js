const http = require( 'http' );
const fs = require('fs');

const pipeServer = http.createServer( ( req, res ) =>
{
    const myReadStream = fs.createReadStream( __dirname + '/data.txt', 'utf8' );

    myReadStream.pipe(res)
} );


pipeServer.listen(3000);

console.log(`localhost on!!`);