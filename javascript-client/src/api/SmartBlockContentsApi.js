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
import PatchedSmartBlockContent from '../model/PatchedSmartBlockContent';
import SmartBlockContent from '../model/SmartBlockContent';

/**
* SmartBlockContents service.
* @module api/SmartBlockContentsApi
* @version 2.0.0
*/
export default class SmartBlockContentsApi {

    /**
    * Constructs a new SmartBlockContentsApi. 
    * @alias module:api/SmartBlockContentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the smartBlockContentsCreate operation.
     * @callback module:api/SmartBlockContentsApi~smartBlockContentsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmartBlockContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/SmartBlockContent} smartBlockContent 
     * @param {module:api/SmartBlockContentsApi~smartBlockContentsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmartBlockContent}
     */
    smartBlockContentsCreate(smartBlockContent, callback) {
      let postBody = smartBlockContent;
      // verify the required parameter 'smartBlockContent' is set
      if (smartBlockContent === undefined || smartBlockContent === null) {
        throw new Error("Missing the required parameter 'smartBlockContent' when calling smartBlockContentsCreate");
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
      let returnType = SmartBlockContent;
      return this.apiClient.callApi(
        '/api/v2/smart-block-contents/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the smartBlockContentsDestroy operation.
     * @callback module:api/SmartBlockContentsApi~smartBlockContentsDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this smart block content.
     * @param {module:api/SmartBlockContentsApi~smartBlockContentsDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    smartBlockContentsDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling smartBlockContentsDestroy");
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
        '/api/v2/smart-block-contents/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the smartBlockContentsList operation.
     * @callback module:api/SmartBlockContentsApi~smartBlockContentsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SmartBlockContent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SmartBlockContentsApi~smartBlockContentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SmartBlockContent>}
     */
    smartBlockContentsList(callback) {
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
      let returnType = [SmartBlockContent];
      return this.apiClient.callApi(
        '/api/v2/smart-block-contents/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the smartBlockContentsPartialUpdate operation.
     * @callback module:api/SmartBlockContentsApi~smartBlockContentsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmartBlockContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this smart block content.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedSmartBlockContent} opts.patchedSmartBlockContent 
     * @param {module:api/SmartBlockContentsApi~smartBlockContentsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmartBlockContent}
     */
    smartBlockContentsPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedSmartBlockContent'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling smartBlockContentsPartialUpdate");
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
      let returnType = SmartBlockContent;
      return this.apiClient.callApi(
        '/api/v2/smart-block-contents/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the smartBlockContentsRetrieve operation.
     * @callback module:api/SmartBlockContentsApi~smartBlockContentsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmartBlockContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this smart block content.
     * @param {module:api/SmartBlockContentsApi~smartBlockContentsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmartBlockContent}
     */
    smartBlockContentsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling smartBlockContentsRetrieve");
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
      let returnType = SmartBlockContent;
      return this.apiClient.callApi(
        '/api/v2/smart-block-contents/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the smartBlockContentsUpdate operation.
     * @callback module:api/SmartBlockContentsApi~smartBlockContentsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmartBlockContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this smart block content.
     * @param {module:model/SmartBlockContent} smartBlockContent 
     * @param {module:api/SmartBlockContentsApi~smartBlockContentsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmartBlockContent}
     */
    smartBlockContentsUpdate(id, smartBlockContent, callback) {
      let postBody = smartBlockContent;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling smartBlockContentsUpdate");
      }
      // verify the required parameter 'smartBlockContent' is set
      if (smartBlockContent === undefined || smartBlockContent === null) {
        throw new Error("Missing the required parameter 'smartBlockContent' when calling smartBlockContentsUpdate");
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
      let returnType = SmartBlockContent;
      return this.apiClient.callApi(
        '/api/v2/smart-block-contents/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
