'use strict';
/**
 * @author Jesse Peterson [@jesdavpet]
 * @version 0.2
 * A simple, consistent method of type evaluation, and comparison in JavaScript.
 */
var wtf = wtf || ( function ( types ) {

    /**
     * Evaluates the type of an object.
     * @param {*} thing - the thing to evaluate the type of
     * @returns {string}
     */
    function type( thing ) { return Object.prototype.toString.call( thing ); }

    /**
     * Determines whether or not an object is of a specific type.
     * @param {*} thing - the thing to compare the type of
     * @param {string} thingType - the type string to compare against
     * @returns {boolean}
     */
    function is( thing, thingType ) { return type( thing ) === thingType; }

    /**
     * Determines whether an array of objects are all of a specified type.
     * @param {*[]} things - the thing(s) to compare the type of
     * @param {string} [thingType = type( things[0] )] - the type string to compare against
     * @returns {boolean}
     */
    function are( things, thingType ) {
        for ( var t = 0; t < things.length; t++ ) {
            if ( !is( things[t], thingType ) ) return false;
        }
        return true;
    }

    /**
     * Adds a custom function, which evaluates equality of other objects.
     * @param {string} name - the name of function to be added
     * @param {*} exemplar - an examplar object of the type to be evaluated
     */
    function add( name, exemplar ) {
        var typeString = type( exemplar );
        // Add the function to the export object.
        exports[name] = function ( things ) {
            if ( arguments.length === 0 ) return typeString;
            return are( arguments, typeString );
        }
    }

    // Object to be exported.
    var exports = {
        'type' : type,
        'add' : add
    };

    // Add specified default types.
    types = types || {};
    for ( var t in types ) add( t, types[t] );

    return exports;

} ) ( {
    'ARRAY' : [],
    'DATE' : new Date(),
    'ERROR' : new Error(),
    'FUNCTION' : function () {},
    'NULL' : null,
    'NUMBER' : 42,
    'OBJECT' : {},
    'STRING' : 'A string.',
    'UNDEFINED' : undefined
} );
