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
    instance = new LibreTimeApi.ShowRebroadcastsApi();
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

  describe('ShowRebroadcastsApi', function() {
    describe('showRebroadcastsCreate', function() {
      it('should call showRebroadcastsCreate successfully', function(done) {
        //uncomment below and update the code to test showRebroadcastsCreate
        //instance.showRebroadcastsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showRebroadcastsDestroy', function() {
      it('should call showRebroadcastsDestroy successfully', function(done) {
        //uncomment below and update the code to test showRebroadcastsDestroy
        //instance.showRebroadcastsDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showRebroadcastsList', function() {
      it('should call showRebroadcastsList successfully', function(done) {
        //uncomment below and update the code to test showRebroadcastsList
        //instance.showRebroadcastsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showRebroadcastsPartialUpdate', function() {
      it('should call showRebroadcastsPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test showRebroadcastsPartialUpdate
        //instance.showRebroadcastsPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showRebroadcastsRetrieve', function() {
      it('should call showRebroadcastsRetrieve successfully', function(done) {
        //uncomment below and update the code to test showRebroadcastsRetrieve
        //instance.showRebroadcastsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showRebroadcastsUpdate', function() {
      it('should call showRebroadcastsUpdate successfully', function(done) {
        //uncomment below and update the code to test showRebroadcastsUpdate
        //instance.showRebroadcastsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
