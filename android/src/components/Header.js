import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    const {viewStyle,textStyle} = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );

}

const styles = {
    viewStyle:{
        backgroundColor: 'grey',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 50,
        paddingBottom : 50,
        strong:10
    },
    textStyle:{
        fontSize:25,
        fontWeight : 'bold',
        textShadowColor:'black'
    }
}

export default Header;