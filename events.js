const events = require('events');

class EventsTest extends events
{
    testEvents ()
    {
        console.log( "testing events" );
 
        setTimeout( () =>
        {
            this.emit( 'scream', {
                flag: "green",
                name: "n/a",
                status: true
            } );

            this.emit( 'scream', {
                flag: "red",
                name: "n/a",
                status: false
            } );
        }, 2000 );
    };
};

module.exports = EventsTest;