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
    instance = new LibreTimeApi.FilesApi();
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

  describe('FilesApi', function() {
    describe('filesCreate', function() {
      it('should call filesCreate successfully', function(done) {
        //uncomment below and update the code to test filesCreate
        //instance.filesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesDestroy', function() {
      it('should call filesDestroy successfully', function(done) {
        //uncomment below and update the code to test filesDestroy
        //instance.filesDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesDownloadRetrieve', function() {
      it('should call filesDownloadRetrieve successfully', function(done) {
        //uncomment below and update the code to test filesDownloadRetrieve
        //instance.filesDownloadRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesList', function() {
      it('should call filesList successfully', function(done) {
        //uncomment below and update the code to test filesList
        //instance.filesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesPartialUpdate', function() {
      it('should call filesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test filesPartialUpdate
        //instance.filesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesRetrieve', function() {
      it('should call filesRetrieve successfully', function(done) {
        //uncomment below and update the code to test filesRetrieve
        //instance.filesRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesUpdate', function() {
      it('should call filesUpdate successfully', function(done) {
        //uncomment below and update the code to test filesUpdate
        //instance.filesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
