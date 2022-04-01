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
import LiveLog from '../model/LiveLog';
import PatchedLiveLog from '../model/PatchedLiveLog';

/**
* LiveLogs service.
* @module api/LiveLogsApi
* @version 2.0.0
*/
export default class LiveLogsApi {

    /**
    * Constructs a new LiveLogsApi. 
    * @alias module:api/LiveLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the liveLogsCreate operation.
     * @callback module:api/LiveLogsApi~liveLogsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LiveLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LiveLog} liveLog 
     * @param {module:api/LiveLogsApi~liveLogsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LiveLog}
     */
    liveLogsCreate(liveLog, callback) {
      let postBody = liveLog;
      // verify the required parameter 'liveLog' is set
      if (liveLog === undefined || liveLog === null) {
        throw new Error("Missing the required parameter 'liveLog' when calling liveLogsCreate");
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
      let returnType = LiveLog;
      return this.apiClient.callApi(
        '/api/v2/live-logs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the liveLogsDestroy operation.
     * @callback module:api/LiveLogsApi~liveLogsDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this live log.
     * @param {module:api/LiveLogsApi~liveLogsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    liveLogsDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling liveLogsDestroy");
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
        '/api/v2/live-logs/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the liveLogsList operation.
     * @callback module:api/LiveLogsApi~liveLogsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LiveLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/LiveLogsApi~liveLogsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LiveLog>}
     */
    liveLogsList(callback) {
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
      let returnType = [LiveLog];
      return this.apiClient.callApi(
        '/api/v2/live-logs/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the liveLogsPartialUpdate operation.
     * @callback module:api/LiveLogsApi~liveLogsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LiveLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this live log.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedLiveLog} opts.patchedLiveLog 
     * @param {module:api/LiveLogsApi~liveLogsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LiveLog}
     */
    liveLogsPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedLiveLog'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling liveLogsPartialUpdate");
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
      let returnType = LiveLog;
      return this.apiClient.callApi(
        '/api/v2/live-logs/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the liveLogsRetrieve operation.
     * @callback module:api/LiveLogsApi~liveLogsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LiveLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this live log.
     * @param {module:api/LiveLogsApi~liveLogsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LiveLog}
     */
    liveLogsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling liveLogsRetrieve");
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
      let returnType = LiveLog;
      return this.apiClient.callApi(
        '/api/v2/live-logs/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the liveLogsUpdate operation.
     * @callback module:api/LiveLogsApi~liveLogsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LiveLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this live log.
     * @param {module:model/LiveLog} liveLog 
     * @param {module:api/LiveLogsApi~liveLogsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LiveLog}
     */
    liveLogsUpdate(id, liveLog, callback) {
      let postBody = liveLog;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling liveLogsUpdate");
      }
      // verify the required parameter 'liveLog' is set
      if (liveLog === undefined || liveLog === null) {
        throw new Error("Missing the required parameter 'liveLog' when calling liveLogsUpdate");
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
      let returnType = LiveLog;
      return this.apiClient.callApi(
        '/api/v2/live-logs/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
