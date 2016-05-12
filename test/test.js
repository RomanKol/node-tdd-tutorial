'use strict';

// Load Chai module and set expect as our assertion style
// require('ModuleName')
let expect = require('chai').expect;

// Load our application
// require('pathToApplication')
let App = require('./../app/app.js');

// Define our first test suite
// describe('testSuite')
describe('helloWorld app testsuite', function() {

  // Define our first test case
  // it('testCase')
  it('returns the string "Hello World"', function() {

    // Define our first test
    // except(application).to...
    expect(App)
      .to.be.a('string')
      .and.is.equal('Hello World');

  });

  // Define our second test case
  it('returns the string "Hello John"', function() {

    // Define our second test
    expect(App)
      .to.be.a('string')
      .and.is.equal('Hello John');

  });

});
