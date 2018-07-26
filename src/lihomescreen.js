/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
import LiPivotScreen from './lipivotscreen.js';
import LiChartScreen from './lichartscreen.js';
import LiReportScreen from './lireportscreen.js';
import { width, height, totalSize } from 'react-native-dimension';

const Report = () => (
  <LiReportScreen/>
);
const Chart = () => (
  <LiChartScreen/>
);
const Pivot = () => (
  <LiPivotScreen/>
);

export default class LiHomeScreen extends Component {


  constructor(props){
    super(props)
    this.state = {
    index: 0,
    routes: [
      { key: 'report', title: 'Report' },
      { key: 'chart', title: 'Chart' },
      { key: 'pivot', title: 'Pivot' },
    ],
  };
  }
  render() {

    return (
      <TabView
         navigationState={this.state}
         renderScene={SceneMap({
           report: Report,
           chart: Chart,
           pivot: Pivot,
         })}
         onIndexChange={index => this.setState({ index })}
         initialLayout={{ width: Dimensions.get('window').width ,height:height(10)}}
         tabStyle={{backgroundColor: '#A32453'}}
         labelStyle={{backgroundColor: '#A32453'}}

       />
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
