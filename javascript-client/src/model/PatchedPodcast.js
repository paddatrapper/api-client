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
 * The PatchedPodcast model module.
 * @module model/PatchedPodcast
 * @version 2.0.0
 */
class PatchedPodcast {
    /**
     * Constructs a new <code>PatchedPodcast</code>.
     * @alias module:model/PatchedPodcast
     */
    constructor() { 
        
        PatchedPodcast.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedPodcast</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedPodcast} obj Optional instance to populate.
     * @return {module:model/PatchedPodcast} The populated <code>PatchedPodcast</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedPodcast();

            if (data.hasOwnProperty('item_url')) {
                obj['item_url'] = ApiClient.convertToType(data['item_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('copyright')) {
                obj['copyright'] = ApiClient.convertToType(data['copyright'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('itunes_author')) {
                obj['itunes_author'] = ApiClient.convertToType(data['itunes_author'], 'String');
            }
            if (data.hasOwnProperty('itunes_keywords')) {
                obj['itunes_keywords'] = ApiClient.convertToType(data['itunes_keywords'], 'String');
            }
            if (data.hasOwnProperty('itunes_summary')) {
                obj['itunes_summary'] = ApiClient.convertToType(data['itunes_summary'], 'String');
            }
            if (data.hasOwnProperty('itunes_subtitle')) {
                obj['itunes_subtitle'] = ApiClient.convertToType(data['itunes_subtitle'], 'String');
            }
            if (data.hasOwnProperty('itunes_category')) {
                obj['itunes_category'] = ApiClient.convertToType(data['itunes_category'], 'String');
            }
            if (data.hasOwnProperty('itunes_explicit')) {
                obj['itunes_explicit'] = ApiClient.convertToType(data['itunes_explicit'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} item_url
 */
PatchedPodcast.prototype['item_url'] = undefined;

/**
 * @member {String} url
 */
PatchedPodcast.prototype['url'] = undefined;

/**
 * @member {String} title
 */
PatchedPodcast.prototype['title'] = undefined;

/**
 * @member {String} creator
 */
PatchedPodcast.prototype['creator'] = undefined;

/**
 * @member {String} description
 */
PatchedPodcast.prototype['description'] = undefined;

/**
 * @member {String} language
 */
PatchedPodcast.prototype['language'] = undefined;

/**
 * @member {String} copyright
 */
PatchedPodcast.prototype['copyright'] = undefined;

/**
 * @member {String} link
 */
PatchedPodcast.prototype['link'] = undefined;

/**
 * @member {String} itunes_author
 */
PatchedPodcast.prototype['itunes_author'] = undefined;

/**
 * @member {String} itunes_keywords
 */
PatchedPodcast.prototype['itunes_keywords'] = undefined;

/**
 * @member {String} itunes_summary
 */
PatchedPodcast.prototype['itunes_summary'] = undefined;

/**
 * @member {String} itunes_subtitle
 */
PatchedPodcast.prototype['itunes_subtitle'] = undefined;

/**
 * @member {String} itunes_category
 */
PatchedPodcast.prototype['itunes_category'] = undefined;

/**
 * @member {String} itunes_explicit
 */
PatchedPodcast.prototype['itunes_explicit'] = undefined;

/**
 * @member {String} owner
 */
PatchedPodcast.prototype['owner'] = undefined;






export default PatchedPodcast;

