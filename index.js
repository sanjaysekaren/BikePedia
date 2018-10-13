/** @format */
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
// import App from './App';
import Header from './android/src/components/Header';
import Contents from './android/src/Contents';
import Route from './android/src/Routers/Router'
import Splash from './android/src/components/splashScreen';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Route />
        </View>
    );
}

AppRegistry.registerComponent('BikePedia', () => App);
