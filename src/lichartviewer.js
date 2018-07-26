/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import Image from 'react-native-remote-svg';
import { width, height, totalSize } from 'react-native-dimension';
import * as Progress from 'react-native-progress';
import OpenApiClient_workbench from './openapi/openapiclient_workbench.js';
import {  Footer, FooterTab, Button, Text,Fab} from 'native-base';
import MenuExample from './nativeconnector/menuconnector'
import RNFetchBlob from 'react-native-fetch-blob';
import Icon from 'react-native-vector-icons/Ionicons';
var obj = new OpenApiClient_workbench('http://swpdmsrv4.lisec.internal:18705', 'DEFAULT', 'PROD');

export default class LiChartViewer extends Component {


  constructor(props){
    super(props);
    this.state = {
      content:'',
      isDataLoading:true,
      active:false
    }
  }
 componentDidMount(){
   // workbenchId:this.state.datasource.workbenchId,
   // configId:this.state.datasource.configId,
   // datasource:this.state.datasource.dataSource,
   // criteriaId:this.state.criteria.id
    if(this.props.workbenchId !== null){
      // console.log("@############",this.state.datasource.workbenchId,this.state.datasource.configId,this.state.datasource.dataSource,this.state.criteria.id);
      // obj.GET_charts_workbenchId_dataSource_configID_viewcritID_file_type(this.callBackForFileDownload.bind(this),this.state.datasource.workbenchId, this.state.datasource.dataSource, this.state.datasource.configId, this.state.criteria.id, 'svg');

      obj.GET_charts_workbenchId_dataSource_configID_viewcritID_file_type(this.callBackArg.bind(this),this.props.workbenchId, this.props.datasource, this.props.configId,this.props.criteriaId, 'svg');
    }
  }
downloadPNG(){
  obj.GET_charts_workbenchId_dataSource_configID_viewcritID_file_type(this.callBackForFileDownload.bind(this,'png'),this.props.workbenchId, this.props.datasource, this.props.configId,this.props.criteriaId, 'png',null,null,true,this.props.fileName);
}
downloadSVG(){
  obj.GET_charts_workbenchId_dataSource_configID_viewcritID_file_type(this.callBackForFileDownload.bind(this,'svg'),this.props.workbenchId, this.props.datasource, this.props.configId,this.props.criteriaId, 'svg',null,null,true,this.props.fileName);
}
callBackForFileDownload(file_type,responseData){
  console.log("Response",responseData,this.props.fileName);
  if(responseData !== null && responseData.state !== undefined)
  {
    let fs = RNFetchBlob.fs;
    let PictureDir = fs.dirs.PictureDir;
    let fileName = this.props.fileName + "." + file_type;
    var path =  PictureDir + "/"+ fileName;
    MenuExample.showDownloadToast(path,fileName);
  }
  }
  callBackArg(responseData){
    if( responseData.state.response.data !== undefined){
      // var svgnode = responseData.state.response.data;
      // var svgnodeutf = utf8.encode(svgnode);

        console.log("@@@@@@@@",responseData);
      var binary = '';
      var result = responseData.state.response.data;
      var bytes = new Uint8Array(result);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
      }
      var responseDataString = JSON.stringify(binary);

      var final = 'data:image/svg+xml;utf8,'+responseDataString;
      this.setState({content:final,isDataLoading:false});
  }
}

  render() {
    return (
      <View style={styles.container}>
        {this.props.fileName ?
          <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.fileName}</Text>
          </View>
        :
          <View/>
        }
        {this.state.isDataLoading === true ?

          <View style={styles.containerPlain}>
            <Progress.Circle showText={true} size={30} indeterminate={true} />
            <Text> Fetching details from Server... </Text>
          </View>
            :
            <ImageZoom cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={width(98)}
              imageHeight={height(85)}
              enableSwipeDown={true}>
              <Image style={{width:width(98), height:height(85),marginBottom:2}}
                source={{uri:this.state.content}}/>
              </ImageZoom>
          }
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{marginBottom:40 }}
            style={{backgroundColor: '#a0185c' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="md-download" />
            <Button onPress={() => this.downloadPNG()} style={{ backgroundColor: '#a0185c' }}>
              <Icon name="md-image" />
            </Button>
            <Button onPress={() => this.downloadSVG()} style={{ backgroundColor: '#a0185c' }}>
              <Icon name="md-medical" />
            </Button>
          </Fab>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerPlain: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },header: {
      backgroundColor: '#dfcee7',
      padding:5,
    },
    headerText: {
      color:'#660033',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      // paddingBottom:10
    },
  });
