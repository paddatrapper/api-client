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
 * The LoginAttempt model module.
 * @module model/LoginAttempt
 * @version 2.0.0
 */
class LoginAttempt {
    /**
     * Constructs a new <code>LoginAttempt</code>.
     * @alias module:model/LoginAttempt
     * @param itemUrl {String} 
     */
    constructor(itemUrl) { 
        
        LoginAttempt.initialize(this, itemUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemUrl) { 
        obj['item_url'] = itemUrl;
    }

    /**
     * Constructs a <code>LoginAttempt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginAttempt} obj Optional instance to populate.
     * @return {module:model/LoginAttempt} The populated <code>LoginAttempt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginAttempt();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('attempts')) {
                obj['attempts'] = ApiClient.convertToType(data['attempts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
LoginAttempt.prototype['item_url'] = undefined;

/**
 * @member {Number} attempts
 */
LoginAttempt.prototype['attempts'] = undefined;






export default LoginAttempt;

