const http = require( 'http' );

const server = http.createServer( ( req, res ) =>
{
    if ( req.url === '/' )
    {
        res.write( "hello response" );
        res.write( "hello response write" );
    // console.log('response object', res );
        res.end();
    } else if ( req.url === "/about" )
    {
        res.write( "hello " );
        res.write( "hello write" );
    // console.log('response object', res );
        res.end();
    } else
    {
        res.write( "404" );
        res.end();
    }
    
});

// server.on( 'connection', ( socket ) =>
// {
//     console.log(`new connection`)
// })
server.listen(3000);

console.log(`localhost on!!`)