import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {Container,Header,Title,Content} from 'native-base';
import Geolocation from '@react-native-community/geolocation';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/dashboardstyle');
export default class dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={         
            latitude: 22.4185,
            longitude: 114.2041,
            temperature:'',
            humidity:'',
            pressure:'',
            place:'',
            description:'',
            icon:''
        }
    }

    componentDidMount(){
        //SplashScreen.hide(); 
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
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        },this.getWeather);
        
    }

    gofailure=(error)=>{
        console.log(error);
    }

    getWeather(){
        let url = 'http://api.openweathermap.org/data/2.5/weather?lat='+this.state.latitude+'&lon='+this.state.longitude+'&units=metric&appid=5910c335c2f1852ab4bd5dfad422094a';
        fetch(url)
        .then(response => response.json())
        .then(data => {
           this.setState({
               temperature:data.main.temp,
               humidity:data.main.humidity,
               pressure:data.main.pressure,
               place:data.name,
               description:data.weather[0].description,
               icon:data.weather[0].icon
            })
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
        this.props.navigation.navigate('BodyCheck');
    }
    gotoroutepage3 = () =>{
        this.props.navigation.navigate('MedicineAlert');
    }
    gotoroutepage4 = () =>{
        this.props.navigation.navigate('MyLocation');
    }
    render=()=>{
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        return(
            <Container style={styles.container}>

                <CustomHeader title="Smart Elder" {...this.props} right={true}/>

                <View style={styles.content}>
                    
                    <View style={styles.weather}>
                        <View style={styles.weatherinfo}>
                            <Text style={styles.infotext}>{date}/{month}/{year}</Text>
                            <Text style={styles.infotext}>{hours}:{min}</Text>
                            <Text style={styles.infotext}>{this.state.temperature}°C</Text>
                            <Text style={styles.infotext}>{this.state.humidity}%</Text>
                            <Text style={styles.infotext}>{this.state.description}</Text>
                            <Text style={styles.infotext}>{this.state.place}</Text>
                        </View>
                        <View style={styles.weatherimg}> 
                            <Image style={styles.img} source={{uri:"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png"}}/>
                        </View>
                    </View>

                    <View style={styles.menu}>
                        <View style={styles.menurow}>
                            <TouchableOpacity style={styles.menubutton1} onPress={this.gotoroutepage2}>
                                <Text style={styles.menutext}>Body Check</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menubutton2} onPress={this.phonecall}>
                                <Text style={styles.menutext}>Quick Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menurow}>
                            <TouchableOpacity style={styles.menubutton2} onPress={this.gotoroutepage3}>
                                <Text style={styles.menutext}>Medicine Alert</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menubutton1} onPress={this.gotoroutepage4}>
                                <Text style={styles.menutext}>Location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container>
            )
    }
}