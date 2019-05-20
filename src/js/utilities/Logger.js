/* eslint-disable no-console */
/**
 * Logging utility for Edge Labs. This currently wraps
 * console.log/console.error calls, but can easily be
 * extended for nice formatting or other outputs.
 */
export default class Logger {
    constructor( caller ) {
        this.caller = caller;
    }

    /**
     * Logs a debug message.
     * @param {string} message
     */
    debug( message ) {
        console.log( this.format( 'DEBUG', message ) );
    }

    /**
     * Logs an error
     * @param {message} message
     * @param {Error} error Optional
     */
    error( message, error ) {
        console.error( this.format( 'ERROR', `${ message }\n` ), error );
    }

    /*
     * Formats the output.
     * Returns a string
     */
    format( level, message ) {
        const timestamp = new Date().toLocaleTimeString();
        return ( `${ timestamp } [${ level }][${ this.caller }] ${ message }` );
    }
}
