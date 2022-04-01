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
    instance = new LibreTimeApi.TrackTypesApi();
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

  describe('TrackTypesApi', function() {
    describe('trackTypesCreate', function() {
      it('should call trackTypesCreate successfully', function(done) {
        //uncomment below and update the code to test trackTypesCreate
        //instance.trackTypesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackTypesDestroy', function() {
      it('should call trackTypesDestroy successfully', function(done) {
        //uncomment below and update the code to test trackTypesDestroy
        //instance.trackTypesDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackTypesList', function() {
      it('should call trackTypesList successfully', function(done) {
        //uncomment below and update the code to test trackTypesList
        //instance.trackTypesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackTypesPartialUpdate', function() {
      it('should call trackTypesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test trackTypesPartialUpdate
        //instance.trackTypesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackTypesRetrieve', function() {
      it('should call trackTypesRetrieve successfully', function(done) {
        //uncomment below and update the code to test trackTypesRetrieve
        //instance.trackTypesRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackTypesUpdate', function() {
      it('should call trackTypesUpdate successfully', function(done) {
        //uncomment below and update the code to test trackTypesUpdate
        //instance.trackTypesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
