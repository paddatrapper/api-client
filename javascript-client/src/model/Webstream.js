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
 * The Webstream model module.
 * @module model/Webstream
 * @version 2.0.0
 */
class Webstream {
    /**
     * Constructs a new <code>Webstream</code>.
     * @alias module:model/Webstream
     * @param itemUrl {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param description {String} 
     * @param url {String} 
     * @param length {String} 
     * @param creatorId {Number} 
     * @param mtime {Date} 
     * @param utime {Date} 
     */
    constructor(itemUrl, id, name, description, url, length, creatorId, mtime, utime) { 
        
        Webstream.initialize(this, itemUrl, id, name, description, url, length, creatorId, mtime, utime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, id, name, description, url, length, creatorId, mtime, utime) { 
        obj['item_url'] = itemUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['description'] = description;
        obj['url'] = url;
        obj['length'] = length;
        obj['creator_id'] = creatorId;
        obj['mtime'] = mtime;
        obj['utime'] = utime;
    }

    /**
     * Constructs a <code>Webstream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webstream} obj Optional instance to populate.
     * @return {module:model/Webstream} The populated <code>Webstream</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webstream();

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
Webstream.prototype['item_url'] = undefined;

/**
 * @member {Number} id
 */
Webstream.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Webstream.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Webstream.prototype['description'] = undefined;

/**
 * @member {String} url
 */
Webstream.prototype['url'] = undefined;

/**
 * @member {String} length
 */
Webstream.prototype['length'] = undefined;

/**
 * @member {Number} creator_id
 */
Webstream.prototype['creator_id'] = undefined;

/**
 * @member {Date} mtime
 */
Webstream.prototype['mtime'] = undefined;

/**
 * @member {Date} utime
 */
Webstream.prototype['utime'] = undefined;

/**
 * @member {Date} lptime
 */
Webstream.prototype['lptime'] = undefined;

/**
 * @member {String} mime
 */
Webstream.prototype['mime'] = undefined;






export default Webstream;
