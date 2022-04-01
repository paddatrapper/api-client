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
 * The PatchedPreference model module.
 * @module model/PatchedPreference
 * @version 2.0.0
 */
class PatchedPreference {
    /**
     * Constructs a new <code>PatchedPreference</code>.
     * @alias module:model/PatchedPreference
     */
    constructor() { 
        
        PatchedPreference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedPreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedPreference} obj Optional instance to populate.
     * @return {module:model/PatchedPreference} The populated <code>PatchedPreference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedPreference();

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
PatchedPreference.prototype['item_url'] = undefined;

/**
 * @member {String} keystr
 */
PatchedPreference.prototype['keystr'] = undefined;

/**
 * @member {String} valstr
 */
PatchedPreference.prototype['valstr'] = undefined;

/**
 * @member {String} subjid
 */
PatchedPreference.prototype['subjid'] = undefined;






export default PatchedPreference;
