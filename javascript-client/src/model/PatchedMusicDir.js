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
 * The PatchedMusicDir model module.
 * @module model/PatchedMusicDir
 * @version 2.0.0
 */
class PatchedMusicDir {
    /**
     * Constructs a new <code>PatchedMusicDir</code>.
     * @alias module:model/PatchedMusicDir
     */
    constructor() { 
        
        PatchedMusicDir.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedMusicDir</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedMusicDir} obj Optional instance to populate.
     * @return {module:model/PatchedMusicDir} The populated <code>PatchedMusicDir</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedMusicDir();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('directory')) {
                obj['directory'] = ApiClient.convertToType(data['directory'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('exists')) {
                obj['exists'] = ApiClient.convertToType(data['exists'], 'Boolean');
            }
            if (data.hasOwnProperty('watched')) {
                obj['watched'] = ApiClient.convertToType(data['watched'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedMusicDir.prototype['item_url'] = undefined;

/**
 * @member {String} directory
 */
PatchedMusicDir.prototype['directory'] = undefined;

/**
 * @member {String} type
 */
PatchedMusicDir.prototype['type'] = undefined;

/**
 * @member {Boolean} exists
 */
PatchedMusicDir.prototype['exists'] = undefined;

/**
 * @member {Boolean} watched
 */
PatchedMusicDir.prototype['watched'] = undefined;






export default PatchedMusicDir;
