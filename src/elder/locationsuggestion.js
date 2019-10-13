import React,{Component} from "react";
import { View, Text, ScrollView,Image } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/dashboardstyle');
export default class locationsuggestion extends Component{
    static navigationOptions = {
        header:null
    }
    
    render=()=>{
        return(
            <Container styles={styles.container}>
                <CustomHeader title="Route Suggestion" {...this.props}/>
                <View style={styles.content}>

                    <View style={styles.menurow}>
                        <View style={styles.locationbutton1}>
                            <Text style={styles.menutext}>Toilet</Text>
                        </View>
                        <View style={styles.locationbutton2}>
                        <Text style={styles.menutext}>Restaurant</Text>
                        </View>
                    </View>

                    <View style={styles.menurow}>
                        <View style={styles.locationbutton2}>
                        <Text style={styles.menutext}>Library</Text>
                        </View>
                        <View style={styles.locationbutton1}>
                        <Text style={styles.menutext}>Park</Text>
                        </View>
                    </View>

                    <View style={styles.menurow}>
                        <View style={styles.locationbutton1}>
                            <Text style={styles.menutext}>Supermarket</Text>
                        </View>
                        <View style={styles.locationbutton2}>
                            <Text style={styles.menutext}>MTR Station</Text>
                        </View>
                    </View>

                </View>
            </Container>
        )
    }
}