import React,{Component} from "react";
import { View, Text, ScrollView,Image,Dimensions } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
import MapView,{Marker} from 'react-native-maps';

let styles = require('../../public/stylesheet/dashboardstyle');
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
export default class mylocation extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props);
        this.state={         
            latitude: 37.785834,
            longitude: -122.406417, 
            place:'',
            administration:'',
            country:'',
            smallplace:'',
            neighborhood:'',
            street:'',
            streetnumber:''
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
        this.getData();
    }
    gofailure=(error)=>{
        console.log(error);
    }
    
    getData(){
        Geocoder.init('AIzaSyAH3V3pnztTZbSUsR5nPGuYfltD7kSczGs');
        Geocoder.from(this.state.latitude,this.state.longitude).then(
            json=>{
                //console.log(json.results[0].address_components[0]);
                var place=json.results[0].address_components[6].short_name;
                this.setState({place:place});
                var administration=json.results[0].address_components[5].short_name;
                this.setState({administration:administration});
                var country=json.results[0].address_components[4].short_name;
                this.setState({country:country});
                var smallplace=json.results[0].address_components[3].short_name;
                this.setState({smallplace:smallplace});
                var smallplace=json.results[0].address_components[3].short_name;
                this.setState({smallplace:smallplace});
                var neighborhood=json.results[0].address_components[2].short_name;
                this.setState({neighborhood:neighborhood});
                var street=json.results[0].address_components[1].long_name;
                this.setState({street:street});
                var streetnumber=json.results[0].address_components[0].short_name;
                this.setState({streetnumber:streetnumber});
            })
       
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
                            <Text style={styles.locationhinttext2}>{this.state.streetnumber}, {this.state.street}, {this.state.neighborhood}, {this.state.smallplace}, {this.state.country}, {this.state.administration}, {this.state.place}</Text>
                        </View>
                    </View>
                 </View>
            </Container>
        )
    }
}