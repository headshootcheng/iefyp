import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/accountstyle');
export default class ElderChoose extends React.Component{
    componentDidMount(){
        SplashScreen.hide(); 
    }
    static navigationOptions = {
        header:null
    }

    render=()=>{
        return(
            <Container>
                <CustomHeader title="Smart Elder" {...this.props}/>
                <View style={styles.menuview}>
                    
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20}]}>
                        <Text style={styles.choosetext2}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20}]}>
                        <Text style={styles.choosetext2}>Register</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}