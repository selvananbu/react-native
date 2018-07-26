import { Component } from 'react';
import axios from 'axios';

import OpenApiClient from './openapiclient';
import OpenApiException from './openapiexception';
import { MimeTypes } from './openapibody';
import OpenApiResponse from './openapiresponse';
import OpenApiClient_array_helper from './openapiclient_array_helper';
import RNFetchBlob from 'react-native-fetch-blob';

export const WORKBENCH_FILE_TYPE_SVG = "svg";
export const WORKBENCH_FILE_TYPE_PDF = "pdf";
export const WORKBENCH_FILE_TYPE_PNG = "png";


var ArrayHelper = new OpenApiClient_array_helper();
class OpenApiClient_workbench extends OpenApiClient {

    constructor(host, customer, site) {
        super(host, customer, site, 'workbench');
    }

    GET_datasources(callback, siteType = null) {

        try {
            if (!this.verifyParamIsString(siteType, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            var headers = {};
            var queryParams = {};
            if(siteType !== null) queryParams['siteType'] = siteType;
            const config = {
                url: this.getUrl(['datasources'], queryParams),
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

    GET_view_criteria(callback, workbenchId) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            var headers = {};
            var queryParams = {};
            if(workbenchId !== null) queryParams['workbenchId'] = workbenchId;
            const config = {
                url: this.getUrl(['view_criteria'], queryParams),
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
console.log("URLLLLLLLLL",config.url);
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

    GET_reports(callback, workbenchId = null, siteType = null) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(siteType, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            var headers = {};
            var queryParams = {};
            if(workbenchId !== null) queryParams['workbenchId'] = workbenchId;
            if(siteType !== null) queryParams['siteType'] = siteType;
            const config = {
                url: this.getUrl(['reports'], queryParams),
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

    GET_reports_workbenchId_dataSource_configID_viewcritID_file_type(callback, workbenchId, dataSource, configID, viewcritID, file_type, triggerType = null, triggerValue = null) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(dataSource, false, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(configID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(viewcritID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(file_type, false, [WORKBENCH_FILE_TYPE_SVG, WORKBENCH_FILE_TYPE_PDF, WORKBENCH_FILE_TYPE_PNG])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(triggerType, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            // if (!this.verifyParamIsStringArray(triggerValue, true, [])) {
            //     throw new OpenApiException("Parameter is not a valid string array!");
            // }
            console.log("Came Here");
            var headers = {};
            var queryParams = {};
            if(triggerType !== null) queryParams['triggerType'] = triggerType;
            if(triggerValue !== null) queryParams['triggerValue'] = ArrayHelper.GET_QUERY_serialized_array(triggerValue, "STYLE_PIPEDELIMITED", "triggerValue", false);
            const config = {
                url: this.getUrl(['reports', workbenchId, dataSource, configID, viewcritID, file_type], queryParams),
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

            let fs = RNFetchBlob.fs;
            let DownloadDir = fs.dirs.DownloadDir;
            console.log((config.url));
            RNFetchBlob
            .config({
              addAndroidDownloads : {
                useDownloadManager : true,
                notification : true,
                path:  DownloadDir + "/" + dataSource + ".pdf",
                title: dataSource + ".pdf",
                mime : 'application/pdf',
                description : 'File downloaded by download manager.'
              },
            })
            .fetch('GET',  this.getUrl(['reports', workbenchId, dataSource, configID, viewcritID, file_type], queryParams))
            .then((resp) => {
              callback(new OpenApiResponse(resp));
            })
            .catch((err) => {
              callback(new OpenApiResponse(err));
            })
        }
        catch (e) {
            callback(new OpenApiResponse(e)); // pass exception object to err handler
        }
    }

    GET_charts(callback, workbenchId = null, siteType = null) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(siteType, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            var headers = {};
            var queryParams = {};
            if(workbenchId !== null) queryParams['workbenchId'] = workbenchId;
            if(siteType !== null) queryParams['siteType'] = siteType;
            const config = {
                url: this.getUrl(['charts'], queryParams),
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

    GET_charts_workbenchId_dataSource_configID_viewcritID_file_type(callback, workbenchId, dataSource, configID, viewcritID, file_type, triggerType = null, triggerValue = null,isDownload = null,fileName = null) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(dataSource, false, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(configID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(viewcritID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(file_type, false, [WORKBENCH_FILE_TYPE_SVG, WORKBENCH_FILE_TYPE_PDF, WORKBENCH_FILE_TYPE_PNG])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(triggerType, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            // if (!this.verifyParamIsStringArray(triggerValue, true, [])) {
            //     throw new OpenApiException("Parameter is not a valid string array!");
            // }

            var headers = {};
            var queryParams = {};
            if(triggerType !== null) queryParams['triggerType'] = triggerType;
            if(triggerValue !== null) queryParams['triggerValue'] = ArrayHelper.GET_QUERY_serialized_array(triggerValue, "STYLE_PIPEDELIMITED", "triggerValue", false);
            const config = {
                url: this.getUrl(['charts', workbenchId, dataSource, configID, viewcritID, file_type], queryParams),
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
           if(isDownload !== null){
               console.log("@@@@@@@@@@@@@@@@",file_type, configID);
               let fs = RNFetchBlob.fs;
               let PictureDir = fs.dirs.PictureDir;
               console.log((config.url));
               RNFetchBlob
               .config({
                 addAndroidDownloads : {
                   useDownloadManager : true,
                   notification : true,
                   path:  PictureDir + "/" + fileName + "." + file_type,
                   title: fileName + "." + file_type,
                   mime : 'image/'+file_type,
                   description : 'File downloaded by download manager.'
                 },
               })
               .fetch('GET',  config.url)
               .then((resp) => {
                 callback(new OpenApiResponse(resp));
               })
               .catch((err) => {
                 callback(new OpenApiResponse(err));
             })
            }
           else{
             axios.request(config)
                 .then(function(response) {
                     callback(new OpenApiResponse(response));
                 })
                 .catch(function(err) {
                     callback(new OpenApiResponse(err));
                 })
          }

          //   let fs = RNFetchBlob.fs;
          //   let PictureDir = fs.dirs.PictureDir;
          //   console.log((config.url));
          //   RNFetchBlob
          //   .config({
          //     addAndroidDownloads : {
          //       useDownloadManager : true,
          //       notification : true,
          //       path:  PictureDir + "/" + dataSource + ".png",
          //       title: dataSource + ".png",
          //       mime : 'image/png',
          //       description : 'File downloaded by download manager.'
          //     },
          //   })
          //   .fetch('GET',  this.getUrl(['charts', workbenchId, dataSource, configID, viewcritID, file_type], queryParams))
          //   .then((resp) => {
          //     callback(new OpenApiResponse(resp));
          //   })
          //   .catch((err) => {
          //     callback(new OpenApiResponse(err));
          // })
        }
        catch (e) {
            callback(new OpenApiResponse(e)); // pass exception object to err handler
        }
    }

    GET_pivots(callback, workbenchId = null, siteType = null) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(siteType, true, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            var headers = {};
            var queryParams = {};
            if(workbenchId !== null) queryParams['workbenchId'] = workbenchId;
            if(siteType !== null) queryParams['siteType'] = siteType;
            const config = {
                url: this.getUrl(['pivots'], queryParams),
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

    GET_pivots_workbenchId_dataSource_configID_viewcritID_file_type(callback, workbenchId, dataSource, configID, viewcritID, file_type, triggerType = null, triggerValue = null) {

        try {
            if (!this.verifyParamIsInteger(workbenchId, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(dataSource, false, [])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(configID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsInteger(viewcritID, false, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsString(file_type, false, [WORKBENCH_FILE_TYPE_SVG, WORKBENCH_FILE_TYPE_PDF, WORKBENCH_FILE_TYPE_PNG])) {
                throw new OpenApiException("Parameter is not a valid string!");
            }

            if (!this.verifyParamIsInteger(triggerType, true, [])) {
                throw new OpenApiException("Parameter is not a valid number!");
            }

            if (!this.verifyParamIsStringArray(triggerValue, true, [])) {
                throw new OpenApiException("Parameter is not a valid string array!");
            }

            var headers = {};
            var queryParams = {};
            if(triggerType !== null) queryParams['triggerType'] = triggerType;
            if(triggerValue !== null) queryParams['triggerValue'] = ArrayHelper.GET_QUERY_serialized_array(triggerValue, "STYLE_PIPEDELIMITED", "triggerValue", false);
            const config = {
                url: this.getUrl(['pivots', workbenchId, dataSource, configID, viewcritID, file_type], queryParams),
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

export default OpenApiClient_workbench;
