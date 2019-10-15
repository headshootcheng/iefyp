import React,{Component} from "react";
import { View, Text, ScrollView,Image } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
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
                        <Image style={styles.mapimg} source={require('../../public/image/map/map.jpg')}/>
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