'use strict';
/**
 * @author Jesse Peterson @jesdavpet
 * @version 0.1
 * A simple, consistent method of type evaluation, and comparison in JavaScript.
 */
var wtf = wtf || ( function () {

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
   * Determines whether an array of objects are all of a specified type,
   * if no type is specified, then determines if they are all of the same
   * arbitrary type instead.
   * @param {*[]} things - the things to compare the type of
   * @param {string} [thingType = type( things[0] )] - the type string to compare against
   * @returns {boolean}
   */
  function are( things, thingType ) {
    thingType = thingType || type( things[0] );
    for ( var t = 0; t < things.length; t++ ) {
      if ( !is( things[t], thingType ) ) return false;
    }
    return true;
  }

  return {
    'type' : type,
    'is' : is,
    'are' : are,

    'ARRAY' : type( [] ),
    'DATE' : type( new Date() ),
    'FUNCTION' : type( function () {} ),
    'NULL' : type( null ),
    'NUMBER' : type( 42 ),
    'OBJECT' : type( {} ),
    'STRING' : type( 'A string.' ),
    'UNDEFINED' : type()
  };

} ) ();
