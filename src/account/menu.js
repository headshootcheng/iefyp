import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Container,Header,Title,Content} from 'native-base';
let styles = require('../../public/stylesheet/accountstyle');
export default class Menu extends React.Component{
    componentDidMount(){
        SplashScreen.hide(); 
    }
    static navigationOptions = {
        header:null
    }

    render=()=>{
        return(
            <Container>
                <Header style={styles.header}>
                    <Title style={styles.title}>SmartElder</Title>
                </Header>
                <View style={styles.menuview}>
                    <Text style={styles.choosetext}>Choose Your Identity</Text>
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20}]}>
                        <Text style={styles.choosetext2}>Parent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20}]} onPress={()=>{this.props.navigation.navigate('ElderChoose');}}>
                        <Text style={styles.choosetext2}>Elder</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}