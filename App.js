/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
import LiHomeScreen from './src/lihomescreen.js';
import LiPivotScreen from './src/lipivotscreen.js';
import LiChartScreen from './src/lichartscreen.js';
import LiReportScreen from './src/lireportscreen.js';
import LiChartViewer from './src/lichartviewer.js';
import LiWelcomeSscreen from './welcomescreen'

import allReducers from './src/liscannerreducer/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore(allReducers);



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="root">
            <Scene key="LiHomeScreen" component={LiHomeScreen} animation='fade' hideNavBar={true} initial={true} />
            <Scene key="LiPivotScreen" component={LiPivotScreen} animation='fade' hideNavBar={true}  />
            <Scene key="LiReportScreen" component={LiReportScreen} animation='fade' hideNavBar={true}  />
            <Scene key="LiChartScreen" component={LiChartScreen} animation='fade' hideNavBar={true} />
            <Scene key="LiChartViewer" component={LiChartViewer} animation='fade' hideNavBar={true} />
          </Scene>
        </Scene>
      </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
