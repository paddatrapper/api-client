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
 * The PatchedSchedule model module.
 * @module model/PatchedSchedule
 * @version 2.0.0
 */
class PatchedSchedule {
    /**
     * Constructs a new <code>PatchedSchedule</code>.
     * @alias module:model/PatchedSchedule
     */
    constructor() { 
        
        PatchedSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedSchedule} obj Optional instance to populate.
     * @return {module:model/PatchedSchedule} The populated <code>PatchedSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedSchedule();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('starts')) {
                obj['starts'] = ApiClient.convertToType(data['starts'], 'Date');
            }
            if (data.hasOwnProperty('ends')) {
                obj['ends'] = ApiClient.convertToType(data['ends'], 'Date');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('file_id')) {
                obj['file_id'] = ApiClient.convertToType(data['file_id'], 'Number');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], 'String');
            }
            if (data.hasOwnProperty('stream_id')) {
                obj['stream_id'] = ApiClient.convertToType(data['stream_id'], 'Number');
            }
            if (data.hasOwnProperty('clip_length')) {
                obj['clip_length'] = ApiClient.convertToType(data['clip_length'], 'String');
            }
            if (data.hasOwnProperty('fade_in')) {
                obj['fade_in'] = ApiClient.convertToType(data['fade_in'], 'String');
            }
            if (data.hasOwnProperty('fade_out')) {
                obj['fade_out'] = ApiClient.convertToType(data['fade_out'], 'String');
            }
            if (data.hasOwnProperty('cue_in')) {
                obj['cue_in'] = ApiClient.convertToType(data['cue_in'], 'String');
            }
            if (data.hasOwnProperty('cue_out')) {
                obj['cue_out'] = ApiClient.convertToType(data['cue_out'], 'String');
            }
            if (data.hasOwnProperty('media_item_played')) {
                obj['media_item_played'] = ApiClient.convertToType(data['media_item_played'], 'Boolean');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('instance_id')) {
                obj['instance_id'] = ApiClient.convertToType(data['instance_id'], 'Number');
            }
            if (data.hasOwnProperty('playout_status')) {
                obj['playout_status'] = ApiClient.convertToType(data['playout_status'], 'Number');
            }
            if (data.hasOwnProperty('broadcasted')) {
                obj['broadcasted'] = ApiClient.convertToType(data['broadcasted'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedSchedule.prototype['item_url'] = undefined;

/**
 * @member {Number} id
 */
PatchedSchedule.prototype['id'] = undefined;

/**
 * @member {Date} starts
 */
PatchedSchedule.prototype['starts'] = undefined;

/**
 * @member {Date} ends
 */
PatchedSchedule.prototype['ends'] = undefined;

/**
 * @member {String} file
 */
PatchedSchedule.prototype['file'] = undefined;

/**
 * @member {Number} file_id
 */
PatchedSchedule.prototype['file_id'] = undefined;

/**
 * @member {String} stream
 */
PatchedSchedule.prototype['stream'] = undefined;

/**
 * @member {Number} stream_id
 */
PatchedSchedule.prototype['stream_id'] = undefined;

/**
 * @member {String} clip_length
 */
PatchedSchedule.prototype['clip_length'] = undefined;

/**
 * @member {String} fade_in
 */
PatchedSchedule.prototype['fade_in'] = undefined;

/**
 * @member {String} fade_out
 */
PatchedSchedule.prototype['fade_out'] = undefined;

/**
 * @member {String} cue_in
 */
PatchedSchedule.prototype['cue_in'] = undefined;

/**
 * @member {String} cue_out
 */
PatchedSchedule.prototype['cue_out'] = undefined;

/**
 * @member {Boolean} media_item_played
 */
PatchedSchedule.prototype['media_item_played'] = undefined;

/**
 * @member {String} instance
 */
PatchedSchedule.prototype['instance'] = undefined;

/**
 * @member {Number} instance_id
 */
PatchedSchedule.prototype['instance_id'] = undefined;

/**
 * @member {Number} playout_status
 */
PatchedSchedule.prototype['playout_status'] = undefined;

/**
 * @member {Number} broadcasted
 */
PatchedSchedule.prototype['broadcasted'] = undefined;

/**
 * @member {Number} position
 */
PatchedSchedule.prototype['position'] = undefined;






export default PatchedSchedule;
