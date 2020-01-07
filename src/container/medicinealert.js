import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/dashboardstyle');

export default class medicinealert extends React.Component{
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
                <CustomHeader title="Medicine Alert" {...this.props} left={true}/>
            </Container>
        )
    }

}