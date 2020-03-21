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
            latitude: 22.41832,
            longitude: 114.208098,
            temperature:'',
            humidity:'',
            pressure:'',
            place:'',
            description:'',
            icon:'',
        }
    }

    componentDidMount(){
        SplashScreen.hide(); 
        this.getElderInfo();
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

    getElderInfo = () =>{
        let url = 'http://127.0.0.1/~petercheng/iot.php';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
           this.setState({elderinfo: data})
        })
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
            phonenumber = `tel:${'66042244'}`;
        }
        else{
            phonenumber = `telprompt:${'66042244'}`;
        }
        Linking.openURL(phonenumber)
    }

    gotoroutepage2 = () =>{
        this.props.navigation.navigate('BodyCheck',{
            heartbeatrate:this.state.elderinfo.heartbeatrate,
            heartbeatstatus:this.state.elderinfo.heartbeatstatus
        });
    }
    gotoroutepage3 = () =>{
        this.props.navigation.navigate('MedicineAlert');
    }
    gotoroutepage4 = () =>{
        this.props.navigation.navigate('MyLocation',{
            latitude:this.state.elderinfo.latitude,
            longitude:this.state.elderinfo.longitude
        });
    }
    render=()=>{
        //console.log(this.state);
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