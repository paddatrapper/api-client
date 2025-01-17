/* tslint:disable */
/* eslint-disable */
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
 */



/**
 * 
 * @export
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'item_url': string;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'starts': string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'ends': string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'file'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'file_id': number;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'stream'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'stream_id': number;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'clip_length'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'fade_in'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'fade_out'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'cue_in': string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'cue_out': string;
    /**
     * 
     * @type {boolean}
     * @memberof Schedule
     */
    'media_item_played'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    'instance': string;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'instance_id': number;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'playout_status': number;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'broadcasted': number;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    'position': number;
}

