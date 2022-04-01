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
 * The PatchedSmartBlockCriteria model module.
 * @module model/PatchedSmartBlockCriteria
 * @version 2.0.0
 */
class PatchedSmartBlockCriteria {
    /**
     * Constructs a new <code>PatchedSmartBlockCriteria</code>.
     * @alias module:model/PatchedSmartBlockCriteria
     */
    constructor() { 
        
        PatchedSmartBlockCriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedSmartBlockCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedSmartBlockCriteria} obj Optional instance to populate.
     * @return {module:model/PatchedSmartBlockCriteria} The populated <code>PatchedSmartBlockCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedSmartBlockCriteria();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], 'String');
            }
            if (data.hasOwnProperty('modifier')) {
                obj['modifier'] = ApiClient.convertToType(data['modifier'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], 'String');
            }
            if (data.hasOwnProperty('criteriagroup')) {
                obj['criteriagroup'] = ApiClient.convertToType(data['criteriagroup'], 'Number');
            }
            if (data.hasOwnProperty('block')) {
                obj['block'] = ApiClient.convertToType(data['block'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedSmartBlockCriteria.prototype['item_url'] = undefined;

/**
 * @member {String} criteria
 */
PatchedSmartBlockCriteria.prototype['criteria'] = undefined;

/**
 * @member {String} modifier
 */
PatchedSmartBlockCriteria.prototype['modifier'] = undefined;

/**
 * @member {String} value
 */
PatchedSmartBlockCriteria.prototype['value'] = undefined;

/**
 * @member {String} extra
 */
PatchedSmartBlockCriteria.prototype['extra'] = undefined;

/**
 * @member {Number} criteriagroup
 */
PatchedSmartBlockCriteria.prototype['criteriagroup'] = undefined;

/**
 * @member {String} block
 */
PatchedSmartBlockCriteria.prototype['block'] = undefined;






export default PatchedSmartBlockCriteria;

