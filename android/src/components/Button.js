import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

const Button = ({onPress}) => {
    return (
<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
        Rev
    </Text>
</TouchableOpacity>
    );
}

const styles={
    textStyle:{
        alignSelf:'center',
        color:'grey',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'grey',
        marginLeft:5,
        marginRight:5
    }
}

export default Button;