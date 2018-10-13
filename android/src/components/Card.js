import React from 'react';
import {View,Text} from 'react-native';

const Card = (props) => {
    return(
        <View>
                {props.children}
            
        </View>
    );
}

const styles={
    containerStyle:{
        paddingBottom:5,
        paddingTop:1,
        borderWidth:2,
        borderColor:"black",
        borderRadius:3
    }
}

export default Card;