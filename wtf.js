'use strict';
var wtf = ( function () {

  function is( thing, type ) {
    if ( type ) return Object.prototype.toString.call( thing ) === type;
    else return Object.prototype.toString.call( thing );
  }

  function allAre( things, type ) {
    type = type || is( things[0] );
    for ( var t = 0; t < things.length; t++ ) if ( !is( things[t], type ) ) return false;
    return true;
  }

  return {
    'is' : is,
    'allAre' : allAre,

    'ARRAY' : is( [] ),
    'FUNCTION' : is( function () {} ),
    'NULL' : is( null ),
    'NUMBER' : is( 42 ),
    'STRING' : is( 'A string.' ),
    'UNDEFINED' : is()
  };

} )();
