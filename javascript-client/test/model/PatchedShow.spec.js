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
    instance = new LibreTimeApi.PatchedShow();
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

  describe('PatchedShow', function() {
    it('should create an instance of PatchedShow', function() {
      // uncomment below and update the code to test PatchedShow
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be.a(LibreTimeApi.PatchedShow);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property genre (base name: "genre")', function() {
      // uncomment below and update the code to test the property genre
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColor (base name: "background_color")', function() {
      // uncomment below and update the code to test the property backgroundColor
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property linked (base name: "linked")', function() {
      // uncomment below and update the code to test the property linked
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property isLinkable (base name: "is_linkable")', function() {
      // uncomment below and update the code to test the property isLinkable
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property imagePath (base name: "image_path")', function() {
      // uncomment below and update the code to test the property imagePath
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property hasAutoplaylist (base name: "has_autoplaylist")', function() {
      // uncomment below and update the code to test the property hasAutoplaylist
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property autoplaylistRepeat (base name: "autoplaylist_repeat")', function() {
      // uncomment below and update the code to test the property autoplaylistRepeat
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

    it('should have the property autoplaylist (base name: "autoplaylist")', function() {
      // uncomment below and update the code to test the property autoplaylist
      //var instance = new LibreTimeApi.PatchedShow();
      //expect(instance).to.be();
    });

  });

}));