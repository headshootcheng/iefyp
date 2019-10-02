import React,{Component} from "react";
import { View, Text, ScrollView,Image } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
let styles = require('../public/stylesheet/dashboardstyle');
export default class Elderdashboard extends React.Component{

    static navigationOptions = {
        header:null
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
                            <View style={styles.menubutton1}>
                                <Text style={styles.menutext}>Emergency Call</Text>
                            </View>
                            <View style={styles.menubutton2}>
                            <Text style={styles.menutext}>Quick Call</Text>
                            </View>
                        </View>
                        <View style={styles.menurow}>
                        <View style={styles.menubutton2}>
                            <Text style={styles.menutext}>Route Suggestion</Text>
                        </View>
                        <View style={styles.menubutton1}>
                        <Text style={styles.menutext}>My Location</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </Container>
            )
    }
}