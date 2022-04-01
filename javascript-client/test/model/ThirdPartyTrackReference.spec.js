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
    instance = new LibreTimeApi.ThirdPartyTrackReference();
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

  describe('ThirdPartyTrackReference', function() {
    it('should create an instance of ThirdPartyTrackReference', function() {
      // uncomment below and update the code to test ThirdPartyTrackReference
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be.a(LibreTimeApi.ThirdPartyTrackReference);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be();
    });

    it('should have the property foreignId (base name: "foreign_id")', function() {
      // uncomment below and update the code to test the property foreignId
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be();
    });

    it('should have the property uploadTime (base name: "upload_time")', function() {
      // uncomment below and update the code to test the property uploadTime
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new LibreTimeApi.ThirdPartyTrackReference();
      //expect(instance).to.be();
    });

  });

}));
