import { Component } from 'react';
import axios from 'axios';

import OpenApiClient from './openapiclient';
import OpenApiException from './openapiexception';
import { MimeTypes } from './openapibody';
import OpenApiResponse from './openapiresponse';

class OpenApiClient_editor extends OpenApiClient {
    constructor(host, customer, site) {
        super(host, customer, site, 'editor');
    }

    GET_orders_category_order(callback, category, order, variant = null) {
        
        try {
            if (!this.verifyParamIsInteger(category, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }
            
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }
            
            if (!this.verifyParamIsInteger(variant, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }
            
            var headers = {};
            var queryParams = {};
            if(variant !== null) queryParams['variant'] = variant;
            const config = {
                url: this.getUrl(['orders', category, order], queryParams),
                method: 'get',
                headers: headers,
                onUploadProgress: function (progressEvent) {
                    console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    console.log(progressEvent, 'completed');
                }
            }
            axios.request(config)
                .then(function(response) {
                    callback(new OpenApiResponse(response));
                })
                .catch(function(err) {
                    callback(new OpenApiResponse(err));
                })
        }
        catch (e) {
            callback(new OpenApiResponse(e)); // pass exception object to err handler
        }
    }
    
    GET_orders_category_order_header(callback, category, order, variant = null, detail = null, lang_id3 = null) {
        
        try {
            if (!this.verifyParamIsInteger(category, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }
            
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }
            
            if (!this.verifyParamIsInteger(variant, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }
            
            if (!this.verifyParamIsString(detail, true)) {
                throw new OpenApiException("Parameter is not a String!");
            }
            
            if (!this.verifyParamIsString(lang_id3, true)) {
                throw new OpenApiException("Parameter is not a String!");
            }
            
            var headers = {};
            var queryParams = {};
            if(variant !== null) queryParams['variant'] = variant;
            if(detail !== null) queryParams['detail'] = detail;
            if(lang_id3 !== null) queryParams['lang_id3'] = lang_id3;
            const config = {
                url: this.getUrl(['orders', category, order, 'header'], queryParams),
                method: 'get',
                headers: headers,
                onUploadProgress: function (progressEvent) {
                    console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    console.log(progressEvent, 'completed');
                }
            }
            axios.request(config)
                .then(function(response) {
                    callback(new OpenApiResponse(response));
                })
                .catch(function(err) {
                    callback(new OpenApiResponse(err));
                })
        }
        catch (e) {
            callback(new OpenApiResponse(e)); // pass exception object to err handler
        }
    }
    
}

export default OpenApiClient_editor;
