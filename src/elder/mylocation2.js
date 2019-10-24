import React,{Component} from "react";
import { View, Text, ScrollView,Image,Dimensions } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
import MapView,{Marker} from 'react-native-maps';

let styles = require('../../public/stylesheet/dashboardstyle');
import Geolocation from '@react-native-community/geolocation';

export default class mylocation extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props);
        this.state={         
            latitude: 37.785834,
            longitude: -122.406417,      
        }
    }
    componentDidMount(){
        let geoOptions={
            enableHighAccuaracy: true,
            timeOut:20000,
            maximumAge: 2000
        };
        Geolocation.getCurrentPosition(this.gosuccess,this.gofailure,geoOptions);
    }
    gosuccess=(position)=>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        });
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
                            region={{
                                latitude:this.state.latitude,
                                longitude:this.state.longitude,
                                latitudeDelta:0.015,
                                longitudeDelta:0.0121
                            }}
                        >
                            <Marker coordinate={this.state} />
                        </MapView>
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