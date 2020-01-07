import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import heartbeatimg from '../../public/image/heartbeat.jpg'
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/dashboardstyle');

export default class bodycheck extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props);
        this.state={         
        }
    }

    render(){
        return(
            <Container style={styles.container}>
                <CustomHeader title="Body Check" {...this.props} left={true}/>
                
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={heartbeatimg} style={{height:200,width:200}}/>
                    <Text style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>Heart Beat Rate: 70</Text>
                    <Text style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>Health Status: Good</Text>
                    <Text style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>Suggestion: None</Text>
                </View>
            </Container>
        )
    }

}