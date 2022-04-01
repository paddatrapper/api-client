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


import ApiClient from "../ApiClient";
import PatchedWebstream from '../model/PatchedWebstream';
import Webstream from '../model/Webstream';

/**
* Webstreams service.
* @module api/WebstreamsApi
* @version 2.0.0
*/
export default class WebstreamsApi {

    /**
    * Constructs a new WebstreamsApi. 
    * @alias module:api/WebstreamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the webstreamsCreate operation.
     * @callback module:api/WebstreamsApi~webstreamsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webstream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Webstream} webstream 
     * @param {module:api/WebstreamsApi~webstreamsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webstream}
     */
    webstreamsCreate(webstream, callback) {
      let postBody = webstream;
      // verify the required parameter 'webstream' is set
      if (webstream === undefined || webstream === null) {
        throw new Error("Missing the required parameter 'webstream' when calling webstreamsCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Webstream;
      return this.apiClient.callApi(
        '/api/v2/webstreams/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webstreamsDestroy operation.
     * @callback module:api/WebstreamsApi~webstreamsDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this webstream.
     * @param {module:api/WebstreamsApi~webstreamsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    webstreamsDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling webstreamsDestroy");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/webstreams/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webstreamsList operation.
     * @callback module:api/WebstreamsApi~webstreamsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Webstream>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/WebstreamsApi~webstreamsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Webstream>}
     */
    webstreamsList(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Webstream];
      return this.apiClient.callApi(
        '/api/v2/webstreams/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webstreamsPartialUpdate operation.
     * @callback module:api/WebstreamsApi~webstreamsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webstream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this webstream.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedWebstream} opts.patchedWebstream 
     * @param {module:api/WebstreamsApi~webstreamsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webstream}
     */
    webstreamsPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedWebstream'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling webstreamsPartialUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Webstream;
      return this.apiClient.callApi(
        '/api/v2/webstreams/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webstreamsRetrieve operation.
     * @callback module:api/WebstreamsApi~webstreamsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webstream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this webstream.
     * @param {module:api/WebstreamsApi~webstreamsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webstream}
     */
    webstreamsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling webstreamsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Webstream;
      return this.apiClient.callApi(
        '/api/v2/webstreams/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webstreamsUpdate operation.
     * @callback module:api/WebstreamsApi~webstreamsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webstream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this webstream.
     * @param {module:model/Webstream} webstream 
     * @param {module:api/WebstreamsApi~webstreamsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webstream}
     */
    webstreamsUpdate(id, webstream, callback) {
      let postBody = webstream;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling webstreamsUpdate");
      }
      // verify the required parameter 'webstream' is set
      if (webstream === undefined || webstream === null) {
        throw new Error("Missing the required parameter 'webstream' when calling webstreamsUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Webstream;
      return this.apiClient.callApi(
        '/api/v2/webstreams/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
