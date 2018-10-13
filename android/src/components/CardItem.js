import React from 'react';
import {Text,View} from 'react-native';

const CardItem = (props) =>{
    return(
        <View style={styles.containerstyle}>
            
                {props.children}
            
        </View>
    );
}

const styles ={
    containerstyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'lightgrey',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'black',
        position:'relative'
    }
}

export default CardItem;