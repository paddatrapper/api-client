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
 * The StreamSetting model module.
 * @module model/StreamSetting
 * @version 2.0.0
 */
class StreamSetting {
    /**
     * Constructs a new <code>StreamSetting</code>.
     * @alias module:model/StreamSetting
     * @param itemUrl {String} 
     * @param type {String} 
     */
    constructor(itemUrl, type) { 
        
        StreamSetting.initialize(this, itemUrl, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, type) { 
        obj['item_url'] = itemUrl;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>StreamSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamSetting} obj Optional instance to populate.
     * @return {module:model/StreamSetting} The populated <code>StreamSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamSetting();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
StreamSetting.prototype['item_url'] = undefined;

/**
 * @member {String} value
 */
StreamSetting.prototype['value'] = undefined;

/**
 * @member {String} type
 */
StreamSetting.prototype['type'] = undefined;






export default StreamSetting;

