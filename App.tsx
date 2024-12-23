import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import Toast from 'react-native-toast-message';
import "./global.css"
import React from 'react';

export default function App() {

  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({});
