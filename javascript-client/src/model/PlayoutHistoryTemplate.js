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
 * The PlayoutHistoryTemplate model module.
 * @module model/PlayoutHistoryTemplate
 * @version 2.0.0
 */
class PlayoutHistoryTemplate {
    /**
     * Constructs a new <code>PlayoutHistoryTemplate</code>.
     * @alias module:model/PlayoutHistoryTemplate
     * @param itemUrl {String} 
     * @param name {String} 
     * @param type {String} 
     */
    constructor(itemUrl, name, type) { 
        
        PlayoutHistoryTemplate.initialize(this, itemUrl, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, name, type) { 
        obj['item_url'] = itemUrl;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PlayoutHistoryTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlayoutHistoryTemplate} obj Optional instance to populate.
     * @return {module:model/PlayoutHistoryTemplate} The populated <code>PlayoutHistoryTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlayoutHistoryTemplate();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
PlayoutHistoryTemplate.prototype['item_url'] = undefined;

/**
 * @member {String} name
 */
PlayoutHistoryTemplate.prototype['name'] = undefined;

/**
 * @member {String} type
 */
PlayoutHistoryTemplate.prototype['type'] = undefined;






export default PlayoutHistoryTemplate;

