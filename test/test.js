/* global it, describe, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isBoolean = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-boolean', function tests() {
	
	it( 'should export a function', function test() {
		expect( isBoolean ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isBoolean( false ) );
		assert.ok( isBoolean( new Boolean() ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			[],
			'5',
			function(){},
			null,
			{},
			NaN,
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isBoolean( values[i] ) );
		}
	});

});