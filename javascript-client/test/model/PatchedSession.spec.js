/**
 * LibreTime API
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LibreTimeApi);
  }
}(this, function(expect, LibreTimeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LibreTimeApi.PatchedSession();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PatchedSession', function() {
    it('should create an instance of PatchedSession', function() {
      // uncomment below and update the code to test PatchedSession
      //var instance = new LibreTimeApi.PatchedSession();
      //expect(instance).to.be.a(LibreTimeApi.PatchedSession);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedSession();
      //expect(instance).to.be();
    });

    it('should have the property login (base name: "login")', function() {
      // uncomment below and update the code to test the property login
      //var instance = new LibreTimeApi.PatchedSession();
      //expect(instance).to.be();
    });

    it('should have the property ts (base name: "ts")', function() {
      // uncomment below and update the code to test the property ts
      //var instance = new LibreTimeApi.PatchedSession();
      //expect(instance).to.be();
    });

    it('should have the property userid (base name: "userid")', function() {
      // uncomment below and update the code to test the property userid
      //var instance = new LibreTimeApi.PatchedSession();
      //expect(instance).to.be();
    });

  });

}));