var WTF = ( function () {
  function is( thing ) {
    return Object.prototype.toString.call( thing );
  }

  return {
    is : is,
    ARRAY : is( [] ),
    FUNCTION : is( function () {} ),
    NULL : is( null ),
    NUMBER : is( 42 ),
    STRING : is( 'A string.' ),
    UNDEFINED : is()
  };
} )();
