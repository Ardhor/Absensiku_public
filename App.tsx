import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import Toast from 'react-native-toast-message';
import "./global.css"
import React from 'react';
import { AuthProvider } from './components/AuthContext';

export default function App() {

  return (
    <>
    <AuthProvider>
      <StackNavigator />
      <StatusBar style="auto" />
      <Toast />
    </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({});
