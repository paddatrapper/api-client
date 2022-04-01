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
    instance = new LibreTimeApi.PatchedWebstream();
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

  describe('PatchedWebstream', function() {
    it('should create an instance of PatchedWebstream', function() {
      // uncomment below and update the code to test PatchedWebstream
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be.a(LibreTimeApi.PatchedWebstream);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property creatorId (base name: "creator_id")', function() {
      // uncomment below and update the code to test the property creatorId
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property mtime (base name: "mtime")', function() {
      // uncomment below and update the code to test the property mtime
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property utime (base name: "utime")', function() {
      // uncomment below and update the code to test the property utime
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property lptime (base name: "lptime")', function() {
      // uncomment below and update the code to test the property lptime
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

    it('should have the property mime (base name: "mime")', function() {
      // uncomment below and update the code to test the property mime
      //var instance = new LibreTimeApi.PatchedWebstream();
      //expect(instance).to.be();
    });

  });

}));
