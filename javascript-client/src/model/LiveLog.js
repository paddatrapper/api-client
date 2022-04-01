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

import ApiClient from '../ApiClient';

/**
 * The LiveLog model module.
 * @module model/LiveLog
 * @version 2.0.0
 */
class LiveLog {
    /**
     * Constructs a new <code>LiveLog</code>.
     * @alias module:model/LiveLog
     * @param itemUrl {String} 
     * @param state {String} 
     * @param startTime {Date} 
     */
    constructor(itemUrl, state, startTime) { 
        
        LiveLog.initialize(this, itemUrl, state, startTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, state, startTime) { 
        obj['item_url'] = itemUrl;
        obj['state'] = state;
        obj['start_time'] = startTime;
    }

    /**
     * Constructs a <code>LiveLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LiveLog} obj Optional instance to populate.
     * @return {module:model/LiveLog} The populated <code>LiveLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LiveLog();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
LiveLog.prototype['item_url'] = undefined;

/**
 * @member {String} state
 */
LiveLog.prototype['state'] = undefined;

/**
 * @member {Date} start_time
 */
LiveLog.prototype['start_time'] = undefined;

/**
 * @member {Date} end_time
 */
LiveLog.prototype['end_time'] = undefined;






export default LiveLog;

