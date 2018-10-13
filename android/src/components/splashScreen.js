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
            <Image style={{ width: 525, height: 200, flex: 1 }} source={{ uri: "https://avante.biz/wp-content/uploads/Wallpaper-Motor/Wallpaper-Motor-001.jpg" }} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    splashStyle: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",paddingLeft:-100

    }
})

export default Splash;