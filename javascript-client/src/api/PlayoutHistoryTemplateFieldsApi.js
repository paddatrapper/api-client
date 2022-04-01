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
import PatchedPlayoutHistoryTemplateField from '../model/PatchedPlayoutHistoryTemplateField';
import PlayoutHistoryTemplateField from '../model/PlayoutHistoryTemplateField';

/**
* PlayoutHistoryTemplateFields service.
* @module api/PlayoutHistoryTemplateFieldsApi
* @version 2.0.0
*/
export default class PlayoutHistoryTemplateFieldsApi {

    /**
    * Constructs a new PlayoutHistoryTemplateFieldsApi. 
    * @alias module:api/PlayoutHistoryTemplateFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the playoutHistoryTemplateFieldsCreate operation.
     * @callback module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayoutHistoryTemplateField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PlayoutHistoryTemplateField} playoutHistoryTemplateField 
     * @param {module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlayoutHistoryTemplateField}
     */
    playoutHistoryTemplateFieldsCreate(playoutHistoryTemplateField, callback) {
      let postBody = playoutHistoryTemplateField;
      // verify the required parameter 'playoutHistoryTemplateField' is set
      if (playoutHistoryTemplateField === undefined || playoutHistoryTemplateField === null) {
        throw new Error("Missing the required parameter 'playoutHistoryTemplateField' when calling playoutHistoryTemplateFieldsCreate");
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
      let returnType = PlayoutHistoryTemplateField;
      return this.apiClient.callApi(
        '/api/v2/playout-history-template-fields/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the playoutHistoryTemplateFieldsDestroy operation.
     * @callback module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this playout history template field.
     * @param {module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    playoutHistoryTemplateFieldsDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playoutHistoryTemplateFieldsDestroy");
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
        '/api/v2/playout-history-template-fields/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the playoutHistoryTemplateFieldsList operation.
     * @callback module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PlayoutHistoryTemplateField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PlayoutHistoryTemplateField>}
     */
    playoutHistoryTemplateFieldsList(callback) {
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
      let returnType = [PlayoutHistoryTemplateField];
      return this.apiClient.callApi(
        '/api/v2/playout-history-template-fields/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the playoutHistoryTemplateFieldsPartialUpdate operation.
     * @callback module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayoutHistoryTemplateField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this playout history template field.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedPlayoutHistoryTemplateField} opts.patchedPlayoutHistoryTemplateField 
     * @param {module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlayoutHistoryTemplateField}
     */
    playoutHistoryTemplateFieldsPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedPlayoutHistoryTemplateField'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playoutHistoryTemplateFieldsPartialUpdate");
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
      let returnType = PlayoutHistoryTemplateField;
      return this.apiClient.callApi(
        '/api/v2/playout-history-template-fields/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the playoutHistoryTemplateFieldsRetrieve operation.
     * @callback module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayoutHistoryTemplateField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this playout history template field.
     * @param {module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlayoutHistoryTemplateField}
     */
    playoutHistoryTemplateFieldsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playoutHistoryTemplateFieldsRetrieve");
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
      let returnType = PlayoutHistoryTemplateField;
      return this.apiClient.callApi(
        '/api/v2/playout-history-template-fields/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the playoutHistoryTemplateFieldsUpdate operation.
     * @callback module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlayoutHistoryTemplateField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this playout history template field.
     * @param {module:model/PlayoutHistoryTemplateField} playoutHistoryTemplateField 
     * @param {module:api/PlayoutHistoryTemplateFieldsApi~playoutHistoryTemplateFieldsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlayoutHistoryTemplateField}
     */
    playoutHistoryTemplateFieldsUpdate(id, playoutHistoryTemplateField, callback) {
      let postBody = playoutHistoryTemplateField;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling playoutHistoryTemplateFieldsUpdate");
      }
      // verify the required parameter 'playoutHistoryTemplateField' is set
      if (playoutHistoryTemplateField === undefined || playoutHistoryTemplateField === null) {
        throw new Error("Missing the required parameter 'playoutHistoryTemplateField' when calling playoutHistoryTemplateFieldsUpdate");
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
      let returnType = PlayoutHistoryTemplateField;
      return this.apiClient.callApi(
        '/api/v2/playout-history-template-fields/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
