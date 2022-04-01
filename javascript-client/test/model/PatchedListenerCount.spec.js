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
    instance = new LibreTimeApi.PatchedListenerCount();
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

  describe('PatchedListenerCount', function() {
    it('should create an instance of PatchedListenerCount', function() {
      // uncomment below and update the code to test PatchedListenerCount
      //var instance = new LibreTimeApi.PatchedListenerCount();
      //expect(instance).to.be.a(LibreTimeApi.PatchedListenerCount);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedListenerCount();
      //expect(instance).to.be();
    });

    it('should have the property listenerCount (base name: "listener_count")', function() {
      // uncomment below and update the code to test the property listenerCount
      //var instance = new LibreTimeApi.PatchedListenerCount();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new LibreTimeApi.PatchedListenerCount();
      //expect(instance).to.be();
    });

    it('should have the property mountName (base name: "mount_name")', function() {
      // uncomment below and update the code to test the property mountName
      //var instance = new LibreTimeApi.PatchedListenerCount();
      //expect(instance).to.be();
    });

  });

}));
