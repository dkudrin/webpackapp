'use strict';

module.exports =  function (message) {
  alert(`Welcome ${message}`);
  if (NODE_ENV == 'development') {
    alert('Hello');
  }
};