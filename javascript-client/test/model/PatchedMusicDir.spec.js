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
    instance = new LibreTimeApi.PatchedMusicDir();
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

  describe('PatchedMusicDir', function() {
    it('should create an instance of PatchedMusicDir', function() {
      // uncomment below and update the code to test PatchedMusicDir
      //var instance = new LibreTimeApi.PatchedMusicDir();
      //expect(instance).to.be.a(LibreTimeApi.PatchedMusicDir);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedMusicDir();
      //expect(instance).to.be();
    });

    it('should have the property directory (base name: "directory")', function() {
      // uncomment below and update the code to test the property directory
      //var instance = new LibreTimeApi.PatchedMusicDir();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new LibreTimeApi.PatchedMusicDir();
      //expect(instance).to.be();
    });

    it('should have the property exists (base name: "exists")', function() {
      // uncomment below and update the code to test the property exists
      //var instance = new LibreTimeApi.PatchedMusicDir();
      //expect(instance).to.be();
    });

    it('should have the property watched (base name: "watched")', function() {
      // uncomment below and update the code to test the property watched
      //var instance = new LibreTimeApi.PatchedMusicDir();
      //expect(instance).to.be();
    });

  });

}));
