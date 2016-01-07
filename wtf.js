'use strict';
var wtf = wtf || ( function () {

  function type( thing ) { return Object.prototype.toString.call( thing ); }

  function is( thing, thingType ) { return type( thing ) === thingType; }

  function are( things, thingType ) {
    if ( is( things, type( [] ) ) ) {
      thingType = thingType || type( things[0] );
      for ( var t = 0; t < things.length; t++ ) if ( !is( things[t], thingType ) ) return false;
      return true;
    } else {
      return false;
    }
  }

  return {
    'type' : type,
    'is' : is,
    'are' : are,

    'ARRAY' : type( [] ),
    'FUNCTION' : type( function () {} ),
    'NULL' : type( null ),
    'NUMBER' : type( 42 ),
    'STRING' : type( 'A string.' ),
    'UNDEFINED' : type()
  };

} ) ();
