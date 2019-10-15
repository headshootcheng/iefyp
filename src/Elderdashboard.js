import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Container,Header,Title,Content} from 'native-base';
let styles = require('../public/stylesheet/dashboardstyle');
export default class Elderdashboard extends React.Component{

    componentDidMount(){
        SplashScreen.hide();  
    }
    static navigationOptions = {
        header:null
    }

    phonecall=()=>{
        let phonenumber='';
        if(Platform.OS=='android'){
            phonenumber = `tel:${'999'}`;
        }
        else{
            phonenumber = `telprompt:${'999'}`;
        }
        Linking.openURL(phonenumber)
    }
    gotoroutepage2 = () =>{
        this.props.navigation.navigate('Quickcall');
    }
    gotoroutepage3 = () =>{
        this.props.navigation.navigate('Locationsuggestion');
    }
    gotoroutepage4 = () =>{
        this.props.navigation.navigate('MyLocation');
    }
    render=()=>{
        
        return(
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Title style={styles.title}>SmartElder</Title>
                </Header>

                <View style={styles.content}>
                    <View style={styles.weather}>
                        <View style={styles.weatherinfo}>
                            <Text style={styles.infotext}>1/10</Text>
                            <Text style={styles.infotext}>11:30am</Text>
                            <Text style={styles.infotext}>Sunny</Text>
                            <Text style={styles.infotext}>24°C</Text>
                            <Text style={styles.infotext}>68%</Text>
                        </View>
                        <View style={styles.weatherimg}> 
                            <Image style={styles.img} source={require('../public/image/weather.png')}/>
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <View style={styles.menurow}>
                            <TouchableOpacity style={styles.menubutton1} onPress={this.phonecall}>
                                <Text style={styles.menutext}>Emergency Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menubutton2} onPress={this.gotoroutepage2}>
                                <Text style={styles.menutext}>Quick Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menurow}>
                            <TouchableOpacity style={styles.menubutton2} onPress={this.gotoroutepage3}>
                                <Text style={styles.menutext}>Route Suggestion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menubutton1} onPress={this.gotoroutepage4}>
                                <Text style={styles.menutext}>My Location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container>
            )
    }
}