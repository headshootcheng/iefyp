import React,{Component} from "react";
import { View, Text, ScrollView,Image,Dimensions } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
import MapView from 'react-native-maps';

let styles = require('../../public/stylesheet/dashboardstyle');
const {width, height} = Dimensions.get('window')
import Geolocation from '@react-native-community/geolocation';

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default class mylocation extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props);
        this.state={
            initialPosition:{
            latitude: 37.785834,
            longitude: -122.406417,
            latitudeDelta: 0,
            longitudeDelta: 0,
            }
        }
    }
    componentDidMount(){
        let geoOptions={
            enableHighAccuaracy: true,
            timeOut:20000,
            maximumAge: 60*60
        };
        Geolocation.getCurrentPosition(this.gosuccess,this.gofailure,geoOptions);
    }
    gosuccess=(position)=>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({initialPosition:{latitude:position.coords.latitude,
        longitude:position.coords.longitude}});
    }
    gofailure=(error)=>{
        console.log(error);
    } 
    render=()=>{
        return(
            <Container style={styles.container}>
                 <CustomHeader title="My Location" {...this.props}/>
                 <View style={styles.mylocationarea}>
                    <View style={styles.maparea}>
                        <MapView
                            style={styles.map}
                            initialRegion={this.state.initialPosition}
                        />
                    </View>

                    <View style={styles.locationhintarea}>
                        <View style={styles.locationhinttop}>
                            <Text style={styles.locationhinttext1}>Current Location</Text>
                        </View>
                        <View style={styles.locationhintbottom}>
                            <Text style={styles.locationhinttext2}>Testing</Text>
                        </View>
                    </View>
                 </View>
            </Container>
        )
    }
}