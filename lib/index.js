/**
*
*	VALIDATE: boolean
*
*
*	DESCRIPTION:
*		- Validates if a value is a boolean.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: isBoolean( value )
*	Validates if a value is a boolean.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is a boolean
*/
function isBoolean( value ) {
	return ( typeof value === 'boolean' || Object.prototype.toString.call( value ) === '[object Boolean]' );
} // end FUNCTION isBoolean()


// EXPORTS //

module.exports = isBoolean;