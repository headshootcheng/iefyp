import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Container,Header,Title,Content} from 'native-base';
import Geolocation from '@react-native-community/geolocation';
let styles = require('../public/stylesheet/dashboardstyle');
export default class Elderdashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={         
            latitude: 37.785834,
            longitude: -122.406417,
            temperature:24
        }
    }

    componentDidMount(){
        SplashScreen.hide(); 
        let geoOptions={
            enableHighAccuaracy: true,
            timeOut:20000,
            maximumAge: 2000
        };
        Geolocation.getCurrentPosition(this.gosuccess,this.gofailure,geoOptions); 
    }
    static navigationOptions = {
        header:null
    }
    gosuccess=(position)=>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        },this.getWeather);
        
    }

    gofailure=(error)=>{
        console.log(error);
    }

    getWeather(){
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=5910c335c2f1852ab4bd5dfad422094a';
        fetch(url)
        .then(response => response.json())
        .then(data => {
           console.log(data);
        })
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
        this.props.navigation.navigate('MyLocation2');
    }
    render=()=>{
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        return(
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Title style={styles.title}>SmartElder</Title>
                </Header>

                <View style={styles.content}>
                    <View style={styles.weather}>
                        <View style={styles.weatherinfo}>
                            <Text style={styles.infotext}>{date}/{month}/{year}</Text>
                            <Text style={styles.infotext}>{hours}:{min}</Text>
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