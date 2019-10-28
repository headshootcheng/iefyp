import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,TextInput} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/accountstyle');
export default class ElderChoose extends React.Component{
    componentDidMount(){
       // SplashScreen.hide(); 
    }
    static navigationOptions = {
        header:null
    }

    render=()=>{
        return(
            <Container>
                <CustomHeader title="Smart Elder" {...this.props}/>
                <View style={styles.loginview}>
                    <Text style={styles.logintext}>Username:</Text>
                    <TextInput style={styles.loginfield} />
                    <Text style={styles.logintext}>Password:</Text>
                    <TextInput style={styles.loginfield} secureTextEntry={true}/>
                </View>
                <View style={styles.loginbuttonarea}>
                    <TouchableOpacity style={styles.loginbutton} onPress={()=>{this.props.navigation.navigate('Elderdashboard');}}>
                        <Text style={styles.choosetext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}