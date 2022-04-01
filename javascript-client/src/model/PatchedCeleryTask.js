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
 * The PatchedCeleryTask model module.
 * @module model/PatchedCeleryTask
 * @version 2.0.0
 */
class PatchedCeleryTask {
    /**
     * Constructs a new <code>PatchedCeleryTask</code>.
     * @alias module:model/PatchedCeleryTask
     */
    constructor() { 
        
        PatchedCeleryTask.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedCeleryTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedCeleryTask} obj Optional instance to populate.
     * @return {module:model/PatchedCeleryTask} The populated <code>PatchedCeleryTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedCeleryTask();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('task_id')) {
                obj['task_id'] = ApiClient.convertToType(data['task_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('dispatch_time')) {
                obj['dispatch_time'] = ApiClient.convertToType(data['dispatch_time'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('track_reference')) {
                obj['track_reference'] = ApiClient.convertToType(data['track_reference'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedCeleryTask.prototype['item_url'] = undefined;

/**
 * @member {String} task_id
 */
PatchedCeleryTask.prototype['task_id'] = undefined;

/**
 * @member {String} name
 */
PatchedCeleryTask.prototype['name'] = undefined;

/**
 * @member {Date} dispatch_time
 */
PatchedCeleryTask.prototype['dispatch_time'] = undefined;

/**
 * @member {String} status
 */
PatchedCeleryTask.prototype['status'] = undefined;

/**
 * @member {String} track_reference
 */
PatchedCeleryTask.prototype['track_reference'] = undefined;






export default PatchedCeleryTask;

