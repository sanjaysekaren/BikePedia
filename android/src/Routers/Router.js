import React from 'react';
import { Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Contents from '../Contents';
import Splash from "../components/splashScreen";

const Route = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="splash" component={Splash} hideNavBar={true} panHandlers={null} initial />
                <Scene key="contents" component={Contents} hideNavBar={true} type="reset" />
            </Scene>
        </Router>
    );
}

export default Route;