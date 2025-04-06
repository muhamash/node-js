const http = require( 'http' );

const server = http.createServer( ( req, res ) =>
{
    if ( req.url === '/' )
    {
        res.write( "<html><head><title>Node js server Form</title></head></html>" );
        res.write( `<body><form method="post" action="/about">
            <input name="message">
            
            </input>
            </form></body>` );
        res.end();
    }
    else if ( req.url === "/about" && req.method === "POST")
    {
        // console.log( req, req.data );
        const body = [];
        req.on( 'data', chunk =>
        {
            // console.log( "consoling the chunk", chunk )
            body.push( chunk );
        } );

        req.on( 'end', () =>
        {
            console.log( "streaming oka!!" )
            const parseBody = Buffer.concat( body ).toString();
            console.log( parseBody );
        } );
        
        res.write( "hello data submitted" );
        res.write( "hello write" );
        res.end();
} 
    else
    {
        res.write( "404" );
        res.end();
    }
    
} );

server.listen( 3000 );

console.log(`localhost on!!`)