import { Component } from 'react';
import axios from 'axios';

import OpenApiClient from './openapiclient';
import OpenApiException from './openapiexception';
import { MimeTypes } from './openapibody';
import OpenApiResponse from './openapiresponse';
import OpenApiClient_array_helper from './openapiclient_array_helper';



var ArrayHelper = new OpenApiClient_array_helper();
class OpenApiClient_user_management extends OpenApiClient {

    constructor(host, customer, site) {
        super(host, customer, site, 'user_management');
    }

    GET_users(callback) {

        try {
            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['users'], queryParams),
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

    POST_users(callback, body) {

        try {
            if (!this.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: this.getUrl(['users'], queryParams),
                method: 'post',
                data: body.getContent(),
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

    PUT_users(callback, body) {

        try {
            if (!this.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: this.getUrl(['users'], queryParams),
                method: 'put',
                data: body.getContent(),
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

    GET_users_userId(callback, userId) {

        try {
            if (!this.verifyParamIsInteger(userId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['users', userId], queryParams),
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

    DELETE_users_userId(callback, userId) {

        try {
            if (!this.verifyParamIsInteger(userId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['users', userId], queryParams),
                method: 'delete',
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

    GET_company_entities(callback, type = null) {

        try {
            if (!this.verifyParamIsInteger(type, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            if(type !== null) queryParams['type'] = type;
            const config = {
                url: this.getUrl(['company_entities'], queryParams),
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

    POST_company_entities(callback, body) {

        try {
            if (!this.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: this.getUrl(['company_entities'], queryParams),
                method: 'post',
                data: body.getContent(),
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

    PUT_company_entities(callback, body) {

        try {
            if (!this.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: this.getUrl(['company_entities'], queryParams),
                method: 'put',
                data: body.getContent(),
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

    GET_company_entities_entityId(callback, entityId) {

        try {
            if (!this.verifyParamIsInteger(entityId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['company_entities', entityId], queryParams),
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

    DELETE_company_entities_entityId(callback, entityId) {

        try {
            if (!this.verifyParamIsInteger(entityId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['company_entities', entityId], queryParams),
                method: 'delete',
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

    GET_sites(callback) {

        try {
            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['sites'], queryParams),
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

    POST_sites(callback, body) {
        
        try {
            if (!this.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: this.getUrl(['sites'], queryParams),
                method: 'post',
                data: body.getContent(),
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

    PUT_sites(callback, body) {

        try {
            if (!this.verifyBody(body, [MimeTypes.MIME_APPLICATION_JSON])) {
                throw new OpenApiException("Invalid MIME type");
            }
            var headers = {};
            var queryParams = {};
            headers['Content-Type'] = body.getMimeTypeAsString();
            const config = {
                url: this.getUrl(['sites'], queryParams),
                method: 'put',
                data: body.getContent(),
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

    GET_sites_siteId(callback, siteId) {

        try {
            if (!this.verifyParamIsInteger(siteId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['sites', siteId], queryParams),
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

    DELETE_sites_siteId(callback, siteId) {

        try {
            if (!this.verifyParamIsInteger(siteId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            const config = {
                url: this.getUrl(['sites', siteId], queryParams),
                method: 'delete',
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

export default OpenApiClient_user_management;
