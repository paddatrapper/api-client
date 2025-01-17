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
 * @interface ShowDays
 */
export interface ShowDays {
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'item_url': string;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'first_show': string;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'last_show'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'start_time': string;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'timezone': string;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'duration': string;
    /**
     * 
     * @type {number}
     * @memberof ShowDays
     */
    'day'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShowDays
     */
    'repeat_type': number;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'next_pop_date'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShowDays
     */
    'record'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ShowDays
     */
    'show': string;
}

