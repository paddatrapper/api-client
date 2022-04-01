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
import PatchedShow from '../model/PatchedShow';
import Show from '../model/Show';

/**
* Shows service.
* @module api/ShowsApi
* @version 2.0.0
*/
export default class ShowsApi {

    /**
    * Constructs a new ShowsApi. 
    * @alias module:api/ShowsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the showsCreate operation.
     * @callback module:api/ShowsApi~showsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Show} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Show} show 
     * @param {module:api/ShowsApi~showsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Show}
     */
    showsCreate(show, callback) {
      let postBody = show;
      // verify the required parameter 'show' is set
      if (show === undefined || show === null) {
        throw new Error("Missing the required parameter 'show' when calling showsCreate");
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
      let returnType = Show;
      return this.apiClient.callApi(
        '/api/v2/shows/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showsDestroy operation.
     * @callback module:api/ShowsApi~showsDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show.
     * @param {module:api/ShowsApi~showsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    showsDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showsDestroy");
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
        '/api/v2/shows/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showsList operation.
     * @callback module:api/ShowsApi~showsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Show>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ShowsApi~showsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Show>}
     */
    showsList(callback) {
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
      let returnType = [Show];
      return this.apiClient.callApi(
        '/api/v2/shows/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showsPartialUpdate operation.
     * @callback module:api/ShowsApi~showsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Show} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedShow} opts.patchedShow 
     * @param {module:api/ShowsApi~showsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Show}
     */
    showsPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedShow'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showsPartialUpdate");
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
      let returnType = Show;
      return this.apiClient.callApi(
        '/api/v2/shows/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showsRetrieve operation.
     * @callback module:api/ShowsApi~showsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Show} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show.
     * @param {module:api/ShowsApi~showsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Show}
     */
    showsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showsRetrieve");
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
      let returnType = Show;
      return this.apiClient.callApi(
        '/api/v2/shows/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showsUpdate operation.
     * @callback module:api/ShowsApi~showsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Show} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this show.
     * @param {module:model/Show} show 
     * @param {module:api/ShowsApi~showsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Show}
     */
    showsUpdate(id, show, callback) {
      let postBody = show;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling showsUpdate");
      }
      // verify the required parameter 'show' is set
      if (show === undefined || show === null) {
        throw new Error("Missing the required parameter 'show' when calling showsUpdate");
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
      let returnType = Show;
      return this.apiClient.callApi(
        '/api/v2/shows/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}