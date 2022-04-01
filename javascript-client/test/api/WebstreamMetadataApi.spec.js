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
    instance = new LibreTimeApi.WebstreamMetadataApi();
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

  describe('WebstreamMetadataApi', function() {
    describe('webstreamMetadataCreate', function() {
      it('should call webstreamMetadataCreate successfully', function(done) {
        //uncomment below and update the code to test webstreamMetadataCreate
        //instance.webstreamMetadataCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webstreamMetadataDestroy', function() {
      it('should call webstreamMetadataDestroy successfully', function(done) {
        //uncomment below and update the code to test webstreamMetadataDestroy
        //instance.webstreamMetadataDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webstreamMetadataList', function() {
      it('should call webstreamMetadataList successfully', function(done) {
        //uncomment below and update the code to test webstreamMetadataList
        //instance.webstreamMetadataList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webstreamMetadataPartialUpdate', function() {
      it('should call webstreamMetadataPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test webstreamMetadataPartialUpdate
        //instance.webstreamMetadataPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webstreamMetadataRetrieve', function() {
      it('should call webstreamMetadataRetrieve successfully', function(done) {
        //uncomment below and update the code to test webstreamMetadataRetrieve
        //instance.webstreamMetadataRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webstreamMetadataUpdate', function() {
      it('should call webstreamMetadataUpdate successfully', function(done) {
        //uncomment below and update the code to test webstreamMetadataUpdate
        //instance.webstreamMetadataUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
