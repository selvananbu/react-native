/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LiReportScreen from './lireportscreen';

export default class LiPivotScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LiReportScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
