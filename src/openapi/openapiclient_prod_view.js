import { Component } from 'react';
import axios from 'axios';

import OpenApiClient from './openapiclient';
import OpenApiException from './openapiexception';
import { MimeTypes } from './openapibody';
import OpenApiResponse from './openapiresponse';
import OpenApiClient_array_helper from './openapiclient_array_helper';



var ArrayHelper = new OpenApiClient_array_helper();
class OpenApiClient_prod_view extends OpenApiClient {

    constructor(host, customer, site) {
        super(host, customer, site, 'prod_view');
    }

    GET_machine_parts(callback, machineID = null, alarm_only = null, offline_only = null) {

        try {
            if (!this.verifyParamIsInteger(machineID, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(alarm_only, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(offline_only, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            if(machineID !== null) queryParams['machineID'] = machineID;
            if(alarm_only !== null) queryParams['alarm_only'] = alarm_only;
            if(offline_only !== null) queryParams['offline_only'] = offline_only;
            const config = {
                url: this.getUrl(['machine_parts'], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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
                    console.log("Responseeeee ",response);
                    callback(new OpenApiResponse(response));
                })
                .catch(function(err) {
                    console.log("Errorrrr ",err);
                    callback(new OpenApiResponse(err));
                })
        }
        catch (e) {
            callback(new OpenApiResponse(e)); // pass exception object to err handler
        }
    }

    GET_machine_parts_machineID_part_now(callback, machineID, part) {

        try {
            if (!this.verifyParamIsInteger(machineID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(part, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['machine_parts', machineID, part, 'now'], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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

    GET_machine_parts_machineID_part_gauges_table(callback, machineID, part, gauge_name, from_timestamp = null, to_timestamp = null) {

        try {
            if (!this.verifyParamIsInteger(machineID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(part, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsStringArray(gauge_name, false, [])) {
                throw new OpenApiException("Parameter is not a valid string array!");
            }

            if (!this.verifyParamIsString(from_timestamp, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsString(to_timestamp, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            var headers = {};
            var queryParams = {};
            if(gauge_name !== null) queryParams['gauge_name'] = ArrayHelper.GET_QUERY_serialized_array(gauge_name, "STYLE_PIPEDELIMITED", "gauge_name", false);
            if(from_timestamp !== null) queryParams['from_timestamp'] = from_timestamp;
            if(to_timestamp !== null) queryParams['to_timestamp'] = to_timestamp;
            const config = {
                url: this.getUrl(['machine_parts', machineID, part, 'gauges', 'table'], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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

    GET_machine_parts_machineID_part_gauges_svg(callback, machineID, part, gauge_name, from_timestamp = null, to_timestamp = null, show_3d = null, show_legend = null, show_own_axis = null) {

        try {
            if (!this.verifyParamIsInteger(machineID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(part, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsStringArray(gauge_name, false, [])) {
                throw new OpenApiException("Parameter is not a valid string array!");
            }

            if (!this.verifyParamIsString(from_timestamp, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsString(to_timestamp, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(show_3d, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(show_legend, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(show_own_axis, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            if(gauge_name !== null) queryParams['gauge_name'] = ArrayHelper.GET_QUERY_serialized_array(gauge_name, "STYLE_PIPEDELIMITED", "gauge_name", false);
            if(from_timestamp !== null) queryParams['from_timestamp'] = from_timestamp;
            if(to_timestamp !== null) queryParams['to_timestamp'] = to_timestamp;
            if(show_3d !== null) queryParams['show_3d'] = show_3d;
            if(show_legend !== null) queryParams['show_legend'] = show_legend;
            if(show_own_axis !== null) queryParams['show_own_axis'] = show_own_axis;
            const config = {
                url: this.getUrl(['machine_parts', machineID, part, 'gauges', 'svg'], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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

    GET_machine_parts_machineID_part_maintenances_outstanding(callback, machineID, part) {

        try {
            if (!this.verifyParamIsInteger(machineID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(part, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['machine_parts', machineID, part, 'maintenances', 'outstanding'], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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

    GET_machine_parts_machineID_part_day_counts_table(callback, machineID, part) {

        try {
            if (!this.verifyParamIsInteger(machineID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(part, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['machine_parts', machineID, part, 'day_counts', 'table'], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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

    GET_gauge_texts_langID3(callback, langID3) {

        try {
            if (!this.verifyParamIsString(langID3, false, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['gauge_texts', langID3], queryParams),
                method: 'get',
                responseType: 'arraybuffer',
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

export default OpenApiClient_prod_view;
