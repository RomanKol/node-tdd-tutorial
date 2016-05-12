'use strict';

// Our Hello Class
class Hello {

  // Class function which returns 'Hello World'
  helloWorld() {
    return 'Hello World';
  }
  // Class function which returns 'Hello John'
  helloJohn() {
    return 'Hello John';
  }
  // Class function which returns the argument in an string
  hello(string) {
    return 'Hello ' + string;
  }
}

// Export the module
module.exports = Hello;