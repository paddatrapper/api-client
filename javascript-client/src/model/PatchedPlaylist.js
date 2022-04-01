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
 * The PatchedPlaylist model module.
 * @module model/PatchedPlaylist
 * @version 2.0.0
 */
class PatchedPlaylist {
    /**
     * Constructs a new <code>PatchedPlaylist</code>.
     * @alias module:model/PatchedPlaylist
     */
    constructor() { 
        
        PatchedPlaylist.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedPlaylist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedPlaylist} obj Optional instance to populate.
     * @return {module:model/PatchedPlaylist} The populated <code>PatchedPlaylist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedPlaylist();

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
PatchedPlaylist.prototype['item_url'] = undefined;

/**
 * @member {String} name
 */
PatchedPlaylist.prototype['name'] = undefined;

/**
 * @member {Date} mtime
 */
PatchedPlaylist.prototype['mtime'] = undefined;

/**
 * @member {Date} utime
 */
PatchedPlaylist.prototype['utime'] = undefined;

/**
 * @member {String} description
 */
PatchedPlaylist.prototype['description'] = undefined;

/**
 * @member {String} length
 */
PatchedPlaylist.prototype['length'] = undefined;

/**
 * @member {String} creator
 */
PatchedPlaylist.prototype['creator'] = undefined;






export default PatchedPlaylist;
