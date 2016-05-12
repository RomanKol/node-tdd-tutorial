'use strict';

// Our Hello Class
class Hello {

  // Class function which returns the argument in an string
  hello(string) {
    let name = string || 'World';
    return 'Hello ' + name;
  }
}

// Export the module
module.exports = Hello;