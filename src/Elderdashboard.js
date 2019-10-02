import React,{Component} from "react";
import { View, Text, ScrollView } from "react-native";
import {Container,Header,Title} from 'native-base';
let styles = require('../public/stylesheet/dashboardstyle');
export default class Elderdashboard extends React.Component{

    static navigationOptions = {
        header:null
    }


    render=()=>{
        
        return(
            <View style={styles.container}>
            
                <Text style={styles.text1} >elderdashboard</Text>
            
            </View>
            )
    }
}