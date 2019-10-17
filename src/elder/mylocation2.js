import React,{Component} from "react";
import { View, Text, ScrollView,Image } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
import MapView from 'react-native-maps';
let styles = require('../../public/stylesheet/dashboardstyle');
export default class mylocation extends Component{
    static navigationOptions = {
        header:null
    }
    render=()=>{
        return(
            <Container style={styles.container}>
                 <CustomHeader title="My Location" {...this.props}/>
                 <View style={styles.mylocationarea}>
                    <View style={styles.maparea}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}
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