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
    instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
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

  describe('PatchedPlayoutHistoryTemplateField', function() {
    it('should create an instance of PatchedPlayoutHistoryTemplateField', function() {
      // uncomment below and update the code to test PatchedPlayoutHistoryTemplateField
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be.a(LibreTimeApi.PatchedPlayoutHistoryTemplateField);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

    it('should have the property isFileMd (base name: "is_file_md")', function() {
      // uncomment below and update the code to test the property isFileMd
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instance = new LibreTimeApi.PatchedPlayoutHistoryTemplateField();
      //expect(instance).to.be();
    });

  });

}));