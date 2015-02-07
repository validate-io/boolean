'use strict';

var isBoolean = require( './../lib' );

console.log( isBoolean( false ) );
// returns true

console.log( isBoolean( '' ) );
// returns false

console.log( isBoolean( new Boolean() ) );
// returns true