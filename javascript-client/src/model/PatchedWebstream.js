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
 * The PatchedWebstream model module.
 * @module model/PatchedWebstream
 * @version 2.0.0
 */
class PatchedWebstream {
    /**
     * Constructs a new <code>PatchedWebstream</code>.
     * @alias module:model/PatchedWebstream
     */
    constructor() { 
        
        PatchedWebstream.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedWebstream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedWebstream} obj Optional instance to populate.
     * @return {module:model/PatchedWebstream} The populated <code>PatchedWebstream</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedWebstream();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'String');
            }
            if (data.hasOwnProperty('creator_id')) {
                obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');
            }
            if (data.hasOwnProperty('mtime')) {
                obj['mtime'] = ApiClient.convertToType(data['mtime'], 'Date');
            }
            if (data.hasOwnProperty('utime')) {
                obj['utime'] = ApiClient.convertToType(data['utime'], 'Date');
            }
            if (data.hasOwnProperty('lptime')) {
                obj['lptime'] = ApiClient.convertToType(data['lptime'], 'Date');
            }
            if (data.hasOwnProperty('mime')) {
                obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedWebstream.prototype['item_url'] = undefined;

/**
 * @member {Number} id
 */
PatchedWebstream.prototype['id'] = undefined;

/**
 * @member {String} name
 */
PatchedWebstream.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PatchedWebstream.prototype['description'] = undefined;

/**
 * @member {String} url
 */
PatchedWebstream.prototype['url'] = undefined;

/**
 * @member {String} length
 */
PatchedWebstream.prototype['length'] = undefined;

/**
 * @member {Number} creator_id
 */
PatchedWebstream.prototype['creator_id'] = undefined;

/**
 * @member {Date} mtime
 */
PatchedWebstream.prototype['mtime'] = undefined;

/**
 * @member {Date} utime
 */
PatchedWebstream.prototype['utime'] = undefined;

/**
 * @member {Date} lptime
 */
PatchedWebstream.prototype['lptime'] = undefined;

/**
 * @member {String} mime
 */
PatchedWebstream.prototype['mime'] = undefined;






export default PatchedWebstream;

