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
import PatchedSchedule from '../model/PatchedSchedule';
import Schedule from '../model/Schedule';

/**
* Schedule service.
* @module api/ScheduleApi
* @version 2.0.0
*/
export default class ScheduleApi {

    /**
    * Constructs a new ScheduleApi. 
    * @alias module:api/ScheduleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the scheduleCreate operation.
     * @callback module:api/ScheduleApi~scheduleCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Schedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Schedule} schedule 
     * @param {module:api/ScheduleApi~scheduleCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Schedule}
     */
    scheduleCreate(schedule, callback) {
      let postBody = schedule;
      // verify the required parameter 'schedule' is set
      if (schedule === undefined || schedule === null) {
        throw new Error("Missing the required parameter 'schedule' when calling scheduleCreate");
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
      let returnType = Schedule;
      return this.apiClient.callApi(
        '/api/v2/schedule/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleDestroy operation.
     * @callback module:api/ScheduleApi~scheduleDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this schedule.
     * @param {module:api/ScheduleApi~scheduleDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    scheduleDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling scheduleDestroy");
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
        '/api/v2/schedule/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleList operation.
     * @callback module:api/ScheduleApi~scheduleListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Schedule>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.broadcasted 
     * @param {Number} opts.broadcastedGt 
     * @param {Number} opts.broadcastedGte 
     * @param {Number} opts.broadcastedLt 
     * @param {Number} opts.broadcastedLte 
     * @param {Array.<Number>} opts.broadcastedRange Multiple values may be separated by commas.
     * @param {Date} opts.ends 
     * @param {Date} opts.endsGt 
     * @param {Date} opts.endsGte 
     * @param {Date} opts.endsLt 
     * @param {Date} opts.endsLte 
     * @param {Array.<Date>} opts.endsRange Multiple values may be separated by commas.
     * @param {Boolean} opts.isValid Filter on valid instances
     * @param {Number} opts.playoutStatus 
     * @param {Number} opts.playoutStatusGt 
     * @param {Number} opts.playoutStatusGte 
     * @param {Number} opts.playoutStatusLt 
     * @param {Number} opts.playoutStatusLte 
     * @param {Array.<Number>} opts.playoutStatusRange Multiple values may be separated by commas.
     * @param {Date} opts.starts 
     * @param {Date} opts.startsGt 
     * @param {Date} opts.startsGte 
     * @param {Date} opts.startsLt 
     * @param {Date} opts.startsLte 
     * @param {Array.<Date>} opts.startsRange Multiple values may be separated by commas.
     * @param {module:api/ScheduleApi~scheduleListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Schedule>}
     */
    scheduleList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'broadcasted': opts['broadcasted'],
        'broadcasted__gt': opts['broadcastedGt'],
        'broadcasted__gte': opts['broadcastedGte'],
        'broadcasted__lt': opts['broadcastedLt'],
        'broadcasted__lte': opts['broadcastedLte'],
        'broadcasted__range': this.apiClient.buildCollectionParam(opts['broadcastedRange'], 'csv'),
        'ends': opts['ends'],
        'ends__gt': opts['endsGt'],
        'ends__gte': opts['endsGte'],
        'ends__lt': opts['endsLt'],
        'ends__lte': opts['endsLte'],
        'ends__range': this.apiClient.buildCollectionParam(opts['endsRange'], 'csv'),
        'is_valid': opts['isValid'],
        'playout_status': opts['playoutStatus'],
        'playout_status__gt': opts['playoutStatusGt'],
        'playout_status__gte': opts['playoutStatusGte'],
        'playout_status__lt': opts['playoutStatusLt'],
        'playout_status__lte': opts['playoutStatusLte'],
        'playout_status__range': this.apiClient.buildCollectionParam(opts['playoutStatusRange'], 'csv'),
        'starts': opts['starts'],
        'starts__gt': opts['startsGt'],
        'starts__gte': opts['startsGte'],
        'starts__lt': opts['startsLt'],
        'starts__lte': opts['startsLte'],
        'starts__range': this.apiClient.buildCollectionParam(opts['startsRange'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Schedule];
      return this.apiClient.callApi(
        '/api/v2/schedule/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulePartialUpdate operation.
     * @callback module:api/ScheduleApi~schedulePartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Schedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this schedule.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedSchedule} opts.patchedSchedule 
     * @param {module:api/ScheduleApi~schedulePartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Schedule}
     */
    schedulePartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedSchedule'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulePartialUpdate");
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
      let returnType = Schedule;
      return this.apiClient.callApi(
        '/api/v2/schedule/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleRetrieve operation.
     * @callback module:api/ScheduleApi~scheduleRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Schedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this schedule.
     * @param {module:api/ScheduleApi~scheduleRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Schedule}
     */
    scheduleRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling scheduleRetrieve");
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
      let returnType = Schedule;
      return this.apiClient.callApi(
        '/api/v2/schedule/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleUpdate operation.
     * @callback module:api/ScheduleApi~scheduleUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Schedule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this schedule.
     * @param {module:model/Schedule} schedule 
     * @param {module:api/ScheduleApi~scheduleUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Schedule}
     */
    scheduleUpdate(id, schedule, callback) {
      let postBody = schedule;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling scheduleUpdate");
      }
      // verify the required parameter 'schedule' is set
      if (schedule === undefined || schedule === null) {
        throw new Error("Missing the required parameter 'schedule' when calling scheduleUpdate");
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
      let returnType = Schedule;
      return this.apiClient.callApi(
        '/api/v2/schedule/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
