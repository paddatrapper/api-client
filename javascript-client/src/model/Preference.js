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
 * The Preference model module.
 * @module model/Preference
 * @version 2.0.0
 */
class Preference {
    /**
     * Constructs a new <code>Preference</code>.
     * @alias module:model/Preference
     * @param itemUrl {String} 
     * @param keystr {String} 
     * @param subjid {String} 
     */
    constructor(itemUrl, keystr, subjid) { 
        
        Preference.initialize(this, itemUrl, keystr, subjid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl, keystr, subjid) { 
        obj['item_url'] = itemUrl;
        obj['keystr'] = keystr;
        obj['subjid'] = subjid;
    }

    /**
     * Constructs a <code>Preference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Preference} obj Optional instance to populate.
     * @return {module:model/Preference} The populated <code>Preference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Preference();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('keystr')) {
                obj['keystr'] = ApiClient.convertToType(data['keystr'], 'String');
            }
            if (data.hasOwnProperty('valstr')) {
                obj['valstr'] = ApiClient.convertToType(data['valstr'], 'String');
            }
            if (data.hasOwnProperty('subjid')) {
                obj['subjid'] = ApiClient.convertToType(data['subjid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
Preference.prototype['item_url'] = undefined;

/**
 * @member {String} keystr
 */
Preference.prototype['keystr'] = undefined;

/**
 * @member {String} valstr
 */
Preference.prototype['valstr'] = undefined;

/**
 * @member {String} subjid
 */
Preference.prototype['subjid'] = undefined;






export default Preference;
