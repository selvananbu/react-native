/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import OpenApiClient_workbench from './openapi/openapiclient_workbench.js';
import OpenApiClient_usermanagement from './openapi/openapiclient_user_management.js';

import * as Progress from 'react-native-progress';
import { width, height, totalSize } from 'react-native-dimension';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
import * as Action from './liaction/index';
import MenuExample from './nativeconnector/menuconnector'

import RNFetchBlob from 'react-native-fetch-blob';

var obj = new OpenApiClient_workbench('http://swpdmsrv4.lisec.internal:18705', 'DEFAULT', 'PROD');

var objusr = new OpenApiClient_usermanagement('http://swpdmsrv4.lisec.internal:18724', 'DEFAULT', 'PROD');

class LiReportScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      siteList:[],
      isDataAvailable:false,
      isLoading:true,
      site:'assetcheck',
      datasource:'jln',
      dataSourceList:[],
      isCriteriaNotAvail:true,
      criteria:'No Criteria Avail.',
      criteriaList:[],
      reportList:[],
      isCriteriaLoading:false,
      isReportLoading:false,
      isReportNotAvailable:true,
      finalList:[]
    }

  }

  componentDidMount(){
    objusr.GET_sites(this.callbackWithArg.bind(this));
  }
  callbackWithArgforDataSources(responseData){
    if(responseData !== null && responseData.state.response.data !== undefined)
    {
      var binary = '';
      var result = responseData.state.response.data;
      var bytes = new Uint8Array(result);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }

      var responseDataJson = JSON.parse(binary);
      this.setState({
        dataSourceList:responseDataJson
      });
      obj.GET_reports(this.callbackWithArgForReports.bind(this));
    }
  }
  callbackWithArg(responseData){
    if(responseData !== null && responseData.state.response.data !== undefined)
    {
      var binary = '';
      var result = responseData.state.response.data;
      var bytes = new Uint8Array(result);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }
      var responseDataJson = JSON.parse(binary);
      this.setState({
        siteList:responseDataJson,
        isDataAvailable:true,
        isLoading:false,
        isReportNotAvailable:false,
        isReportLoading:true,
        site:responseDataJson.companyEntities[0]
      });
      this.props.setSiteList(responseDataJson);
      obj.GET_datasources(this.callbackWithArgforDataSources.bind(this));
    }
  }

  callbackWithArgForReports(responseData){
    if(responseData !== null && responseData.state.response.data !== undefined)
    {
      var binary = '';
      var result = responseData.state.response.data;
      var bytes = new Uint8Array(result);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }

      var responseDataJson = JSON.parse(binary);
        var reportTempList = [];
        var siteTypeList = [];

        switch (this.state.site.entityTypeField) {
          case 1:
          siteTypeList = ['masterdata','order'];
          break;
          case 2:
          siteTypeList = ["masterdata","assetcheck", "materials","prod","qms"];
          break;
          default:
        }
        responseDataJson.outputConfig.map((item,value) => {
                    if(siteTypeList.indexOf(item.siteType) !== -1){
                      reportTempList.push(item);
              }
        });
        this.setState({
          reportList:reportTempList,
          isReportLoading:false,
          isReportNotAvailable:false,
          isCriteriaLoading:true,
          isCriteriaNotAvail:false,
          datasource:reportTempList[0],
        });
        obj.GET_view_criteria(this.callbackWithViewCriteria.bind(this),reportTempList[0].workbenchId);
    }
  }

  callbackWithViewCriteria(responseData){
    if(responseData !== null && responseData.state.response.data !== undefined)
    {

      var binary = '';
      var result = responseData.state.response.data;
      var bytes = new Uint8Array(result);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }
      var responseDataJson = JSON.parse(binary);
      if(responseDataJson.viewCrit !== undefined && responseDataJson.viewCrit !== null){
        this.setState({
          criteriaList:responseDataJson.viewCrit,
          isCriteriaLoading:false,
          criteria:responseDataJson.viewCrit[0]
        });
      }
    }
  }

  onPress = () => {
          // {this.state.dataSourceList.datasourceSite.map((item,value) => {
          //         *****
          //   });}
          console.log("@############",this.state.datasource.workbenchId,this.state.datasource.configId,this.state.datasource.dataSource,this.state.criteria.id);
         // MenuExample.startConnectionActivity();
      obj.GET_reports_workbenchId_dataSource_configID_viewcritID_file_type(this.callBackForFileDownload.bind(this,this.state.datasource.dataSource),this.state.datasource.workbenchId, this.state.datasource.dataSource, this.state.datasource.configId, this.state.criteria.id, 'pdf');
    }

  callBackForFileDownload(fileName,responseData){
    console.log("Response",responseData);
    if(responseData !== null && responseData.state !== undefined)
    {
      let fs = RNFetchBlob.fs;
      let DownloadDir = fs.dirs.DownloadDir;
      var path =  DownloadDir + "/"+ fileName + ".pdf";
      MenuExample.showDownloadToast(path,fileName);
    }
  }

  onReportChanged(report){
    this.setState({datasource:report,isReportLoading:false,isCriteriaLoading:true});
    obj.GET_view_criteria(this.callbackWithViewCriteria.bind(this),report.workbenchId);

  }
  onSiteChanged(sitevalue){
    this.setState({site: sitevalue,isReportLoading:true,isCriteriaNotAvail:true});
    obj.GET_reports(this.callbackWithArgForReports.bind(this));
  }

  render() {
    var isLoading = this.state.isLoading;
    var isReportLoading = this.state.isReportLoading;
    var isReportNotAvailable = this.state.isReportNotAvailable;
    var currentSite = this.state.site;

    var self = this;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.items}>Site</Text>
          <View style={{margin:5,borderWidth:1, borderColor:'#881b4c',borderRadius:15}}>
            {isLoading ? <ActivityIndicator style={{ height: 50}}/> :
            <Picker
              selectedValue={this.state.site}
              style={{ height: 50, width: width(98) }}
              onValueChange={(item, itemIndex) => this.onSiteChanged(item)}>
              { this.state.siteList.companyEntities.map((item, key)=>(
                <Picker.Item label={item.entityDescField} color="#660033" value={item} key={key}/>)
              )}
            </Picker>
          }
        </View>
      </View>
      <View>
        <Text style={styles.items}>Reports</Text>
        <View style={{margin:5,borderWidth:1, borderColor:'#881b4c',borderRadius:15}}>
          {isReportNotAvailable ?
            <Picker
              selectedValue={this.state.datasource}
              style={{ height: 50, width: width(98) }}
              onValueChange={(sitevalue, itemIndex) => this.setState({criteria: sitevalue})}>
              <Picker.Item label="No Data Source Avail." color="#660033" value="0" />
            </Picker>
          :
          isReportLoading ? <ActivityIndicator style={{ height: 50}}/>
          :
          <View>
            <Picker
              selectedValue={this.state.datasource}
              style={{ height: 50, width: width(98) }}
              onValueChange={(innerItem, itemIndex) => this.onReportChanged(innerItem)}>
              {this.state.reportList.map((innerItem,value) => {
                return <Picker.Item label={innerItem.fileName} color="#660033" value={innerItem} key={value}/>
              })}
            </Picker>
          </View>
        }
      </View>
    </View>
    <View>
      <Text style={styles.items}>View Criteria</Text>
      <View style={{margin:5,borderWidth:1, borderColor:'#881b4c',borderRadius:15}}>
        {this.state.isCriteriaNotAvail === true
          ?
          <Picker
            selectedValue={this.state.criteria}
            style={{ height: 50, width: width(98) }}
            onValueChange={(sitevalue, itemIndex) => this.setState({criteria: sitevalue})}>
            <Picker.Item label="No Criteria Avail." color="#660033" value="0" />
          </Picker>
          :
          this.state.isCriteriaLoading ? <ActivityIndicator style={{ height: 50}}/>
          :
          <Picker
            selectedValue={this.state.criteria}
            style={{ height: 50, width: width(98) }}
            onValueChange={(sitevalue, itemIndex) => this.setState({criteria: sitevalue})}>
            { this.state.criteriaList.map((item, key)=> {
              return <Picker.Item label={item.name} color="#660033" value={item} key={key}/>
            })}
          </Picker>
        }
      </View>
    </View>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height:height(10)
    }}>
    <TouchableOpacity style={{height:height(8),width:width(90),borderRadius:15,borderColor:'#881b4c',flexDirection: 'row',justifyContent:'center',alignItems:'center',borderWidth:2}}
      onPress={this.onPress}>
      <Text style={styles.loadText}>LOAD</Text>
    </TouchableOpacity>
  </View>
</View>
);
}
}
function mapStateToProps(state) {
  return {
    obj: state.ItemReady
  };
}
function  mapDispatchToProps(dispatch) {
  return  bindActionCreators({
    setSiteList:  Action.setSiteList,
  }, dispatch)
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(LiReportScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin:3,
    marginBottom:5
  },

  items: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    alignItems:'center',
  },
  loadText:{
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    alignItems:'center',
    color:'#881b4c'
  }
});
