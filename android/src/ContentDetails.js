import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './components/Card';
import CardItem from './components/CardItem';
import Button from './components/Button';
import Header from './components/Header';

const ContentDetails = ({container}) =>{
    

    const {manufacturer,title,thumbnail_image,image,url} = container;

    return(
        <View>
            <Card>
                <CardItem>
                    <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri:thumbnail_image}}></Image>
                    </View>
                    <View style={styles.headerContainerStyle} >
                        <Text style={styles.headerTextStyle}>{manufacturer}</Text>
                        <Text>{title}</Text>
                    </View>
                </CardItem>
                <CardItem>
                    
                        <Image style={styles.imageStyle} source={{uri:image}}></Image>
                    
                </CardItem>
                <CardItem>
                    <Button onPress={()=> Linking.openURL(url)}></Button>
                </CardItem>
                
            </Card>
        </View>
    );
}

const styles={
    headerContainerStyle:{
        flexDirection:'column',
        justifyContent:'space-around',
        marginLeft:20
    },
    headerTextStyle:{
        fontSize:20
    },
    thumbnailStyle:{
        height:50,
        width:60
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginright:10
    },
    imageStyle:{
        height:300,
        
        flex:1,
        width:null
    }
  };
export default ContentDetails;