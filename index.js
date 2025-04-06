const EventsTest = require( "./events" );

const eventTests = new EventsTest();

eventTests.on( 'scream', function (args)
{
    console.log( `A scream is detected! -> ${args.flag}, ${args?.name}` );
} );

eventTests.testEvents();