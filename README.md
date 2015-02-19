Boolean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a boolean.


### Installation

``` bash
$ npm install validate.io-boolean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


### Usage

``` javascript
var isBoolean = require( 'validate.io-boolean' );
```

#### isBoolean( value )

Validates if a `value` is a `boolean`.

``` javascript
var value = false;

var bool = isBoolean( value );
// returns true
```


### Examples

``` javascript
console.log( isBoolean( false ) );
// returns true

console.log( isBoolean( '' ) );
// returns false

console.log( isBoolean( new Boolean() ) );
// returns true
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-boolean.svg
[npm-url]: https://npmjs.org/package/validate.io-boolean

[travis-image]: http://img.shields.io/travis/validate-io/boolean/master.svg
[travis-url]: https://travis-ci.org/validate-io/boolean

[coveralls-image]: https://img.shields.io/coveralls/validate-io/boolean/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/boolean?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/boolean.svg
[dependencies-url]: https://david-dm.org/validate-io/boolean

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/boolean.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/boolean

[github-issues-image]: http://img.shields.io/github/issues/validate-io/boolean.svg
[github-issues-url]: https://github.com/validate-io/boolean/issues
