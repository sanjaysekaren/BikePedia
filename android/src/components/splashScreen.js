import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from "react-native-router-flux";
// componentDidMount() {
//     setTimeout(() => {

//     }, 2500)
// }

const Splash = () => {
    setTimeout(() => {
        Actions.contents();
    }, 3000)
    return (
        <View style={styles.splashStyle}>
            {/* <Image style={{ width: 200, height: 200, flex: 1 }} source={{ uri: "http://www.beautifullife.info/wp-content/uploads/2018/02/28/kawasaki_ninja.jpg" }} /> */}
            <Text>Hi here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    splashStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Splash;