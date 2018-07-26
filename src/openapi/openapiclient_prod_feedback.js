import { Component } from 'react';
import axios from 'axios';

import OpenApiClient from './openapiclient';
import OpenApiException from './openapiexception';
import { MimeTypes } from './openapibody';
import OpenApiResponse from './openapiresponse';

class OpenApiClient_prod_feedback extends OpenApiClient {
    constructor(host, customer, site) {
        super(host, customer, site, 'prod_feedback');
    }

    GET_delivery_racks_rackID(callback, rackID) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['delivery_racks', rackID], queryParams),
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

    PATCH_delivery_racks_rackID_clear(callback, rackID) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['delivery_racks', rackID, 'clear'], queryParams),
                method: 'patch',
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

    PATCH_delivery_racks_rackID_outgoing(callback, rackID) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['delivery_racks', rackID, 'outgoing'], queryParams),
                method: 'patch',
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

    PATCH_delivery_racks_rackID_incoming(callback, rackID) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['delivery_racks', rackID, 'incoming'], queryParams),
                method: 'patch',
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

    GET_delivery_racks_rackID_print(callback, rackID) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['delivery_racks', rackID, 'print'], queryParams),
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

    GET_delivery_racks_rackID_pdf(callback, rackID) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['delivery_racks', rackID, 'pdf'], queryParams),
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

    GET_todo_lists(callback, order = null, item = null, barcode = null, batch = null, visualUF = null, deliveryID = null, optimisationID = null, stepID = null, machineID = null, rackID = null, externalBarcode = null) {

        try {
            if (!this.verifyParamIsInteger(order, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(item, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(barcode, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(batch, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(visualUF, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(deliveryID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(optimisationID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(stepID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(machineID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsString(rackID, true)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            if (!this.verifyParamIsString(externalBarcode, true)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            if(order !== null) queryParams['order'] = order;
            if(item !== null) queryParams['item'] = item;
            if(barcode !== null) queryParams['barcode'] = barcode;
            if(batch !== null) queryParams['batch'] = batch;
            if(visualUF !== null) queryParams['visualUF'] = visualUF;
            if(deliveryID !== null) queryParams['deliveryID'] = deliveryID;
            if(optimisationID !== null) queryParams['optimisationID'] = optimisationID;
            if(stepID !== null) queryParams['stepID'] = stepID;
            if(machineID !== null) queryParams['machineID'] = machineID;
            if(rackID !== null) queryParams['rackID'] = rackID;
            if(externalBarcode !== null) queryParams['externalBarcode'] = externalBarcode;
            const config = {
                url: this.getUrl(['todo_lists'], queryParams),
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

    PATCH_orders_order_item_pane_component_pieceCount_worksteps_stepID_ready(callback, order, item, pane, component, pieceCount, stepID, machineID, rackID = null) {

        try {
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(item, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pane, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(component, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pieceCount, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(stepID, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(machineID, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsString(rackID, true)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            if(machineID !== null) queryParams['machineID'] = machineID;
            if(rackID !== null) queryParams['rackID'] = rackID;
            const config = {
                url: this.getUrl(['orders', order, item, pane, component, pieceCount, 'worksteps', stepID, 'ready'], queryParams),
                method: 'patch',
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

    PATCH_orders_order_item_pane_component_pieceCount_worksteps_stepID_undo(callback, order, item, pane, component, pieceCount, stepID, machineID, rackID = null) {

        try {
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(item, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pane, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(component, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pieceCount, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(stepID, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(machineID, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsString(rackID, true)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            if(machineID !== null) queryParams['machineID'] = machineID;
            if(rackID !== null) queryParams['rackID'] = rackID;
            const config = {
                url: this.getUrl(['orders', order, item, pane, component, pieceCount, 'worksteps', stepID, 'undo'], queryParams),
                method: 'patch',
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

    PATCH_orders_order_item_pane_component_pieceCount_remake(callback, order, item, pane, component, pieceCount, machineID = null, stepID = null, remakePane = null, remakeComponent = null) {

        try {
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(item, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pane, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(component, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pieceCount, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(machineID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(stepID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(remakePane, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(remakeComponent, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            var headers = {};
            var queryParams = {};
            if(machineID !== null) queryParams['machineID'] = machineID;
            if(stepID !== null) queryParams['stepID'] = stepID;
            if(remakePane !== null) queryParams['remakePane'] = remakePane;
            if(remakeComponent !== null) queryParams['remakeComponent'] = remakeComponent;
            const config = {
                url: this.getUrl(['orders', order, item, pane, component, pieceCount, 'remake'], queryParams),
                method: 'patch',
                headers: headers,
                onUploadProgress: function (progressEvent) {
                    console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    console.log(progressEvent, 'completed');
                }
            }
            console.log("@@@",config.url);
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

    PATCH_orders_order_item_pane_component_pieceCount_assign_rack(callback, order, item, pane, component, pieceCount, rackID) {

        try {
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(item, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pane, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(component, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pieceCount, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            var headers = {};
            var queryParams = {};
            if(rackID !== null) queryParams['rackID'] = rackID;
            const config = {
                url: this.getUrl(['orders', order, item, pane, component, pieceCount, 'assign_rack'], queryParams),
                method: 'patch',
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

    PATCH_orders_order_item_pieceCount_add_to_delivery(callback, order, item, pieceCount, deliveryID = null, route = null) {

        try {
            if (!this.verifyParamIsInteger(order, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(item, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(pieceCount, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(deliveryID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(route, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            var headers = {};
            var queryParams = {};
            if(deliveryID !== null) queryParams['deliveryID'] = deliveryID;
            if(route !== null) queryParams['route'] = route;
            const config = {
                url: this.getUrl(['orders', order, item, pieceCount, 'add_to_delivery'], queryParams),
                method: 'patch',
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

    PATCH_delivery_racks_rackID_add_to_delivery(callback, rackID, deliveryID = null, route = null) {

        try {
            if (!this.verifyParamIsString(rackID, false)) {
                throw new OpenApiException("Parameter is not a String!");
            }

            if (!this.verifyParamIsInteger(deliveryID, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(route, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            var headers = {};
            var queryParams = {};
            if(deliveryID !== null) queryParams['deliveryID'] = deliveryID;
            if(route !== null) queryParams['route'] = route;
            const config = {
                url: this.getUrl(['delivery_racks', rackID, 'add_to_delivery'], queryParams),
                method: 'patch',
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

    POST_delivery_lists(callback, route, stock = null) {

        try {
            if (!this.verifyParamIsInteger(route, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(stock, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            var headers = {};
            var queryParams = {};
            if(route !== null) queryParams['route'] = route;
            if(stock !== null) queryParams['stock'] = stock;
            const config = {
                url: this.getUrl(['delivery_lists'], queryParams),
                method: 'post',
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

    GET_delivery_lists_deliveryID(callback, deliveryID, route = null) {

        try {
            if (!this.verifyParamIsInteger(deliveryID, false)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsInteger(route, true)) {
                throw new OpenApiException("Parameter is not a number!");
            }

            var headers = {};
            var queryParams = {};
            if(route !== null) queryParams['route'] = route;
            const config = {
                url: this.getUrl(['delivery_lists', deliveryID], queryParams),
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

    GET_reason_codes(callback, group_no = null, station_key = null) {

        try {


            if (!this.verifyParamIsInteger(group_no, true)) {
              console.log("RESOPNSSSSSSSSSSS");
                throw new OpenApiException("Parameter is not a number!");
            }

            if (!this.verifyParamIsString(station_key, true)) {
              console.log("RESOPNSSSSSSSSSSS 11");
                throw new OpenApiException("Parameter is not a String!");
            }
            var headers = {};
            var queryParams = {};
            if(group_no !== null) queryParams['group_no'] = group_no;
            if(station_key !== null) queryParams['station_key'] = station_key;
            const config = {
                url: this.getUrl(['reason_codes'], queryParams),
                method: 'get',
                headers: headers,
                responseType: 'arraybuffer',
                onUploadProgress: function (progressEvent) {
                    console.log(progressEvent,'in progress');
                },
                onDownloadProgress: function (progressEvent) {
                    console.log(progressEvent, 'completed');
                }
            }
            console.log("UERLLLL",config.url);
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

export default OpenApiClient_prod_feedback;
