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
 * The PatchedSmartBlock model module.
 * @module model/PatchedSmartBlock
 * @version 2.0.0
 */
class PatchedSmartBlock {
    /**
     * Constructs a new <code>PatchedSmartBlock</code>.
     * @alias module:model/PatchedSmartBlock
     */
    constructor() { 
        
        PatchedSmartBlock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedSmartBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedSmartBlock} obj Optional instance to populate.
     * @return {module:model/PatchedSmartBlock} The populated <code>PatchedSmartBlock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedSmartBlock();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mtime')) {
                obj['mtime'] = ApiClient.convertToType(data['mtime'], 'Date');
            }
            if (data.hasOwnProperty('utime')) {
                obj['utime'] = ApiClient.convertToType(data['utime'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedSmartBlock.prototype['item_url'] = undefined;

/**
 * @member {String} name
 */
PatchedSmartBlock.prototype['name'] = undefined;

/**
 * @member {Date} mtime
 */
PatchedSmartBlock.prototype['mtime'] = undefined;

/**
 * @member {Date} utime
 */
PatchedSmartBlock.prototype['utime'] = undefined;

/**
 * @member {String} description
 */
PatchedSmartBlock.prototype['description'] = undefined;

/**
 * @member {String} length
 */
PatchedSmartBlock.prototype['length'] = undefined;

/**
 * @member {String} type
 */
PatchedSmartBlock.prototype['type'] = undefined;

/**
 * @member {String} creator
 */
PatchedSmartBlock.prototype['creator'] = undefined;






export default PatchedSmartBlock;

