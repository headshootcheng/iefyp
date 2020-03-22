import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/accountstyle');

export default class medicinealert extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props);
        this.state={         
        }
    }

    alert=()=>{

        fetch('http://3.20.56.148/iot.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            alert:1
        })
    }).then((response)=>{
        return response.json()
    }).then((myJson)=>{
        console.log(myJson);
    })
    }

    
    cancel=()=>{
       
        fetch('http://3.20.56.148/iot.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            alert:0
        })
        }).then((response)=>{
            return response.json()
        }).then((myJson)=>{
            console.log(myJson);
        })
    }

    render(){
        return(
            <Container>
                <CustomHeader title="Medicine Alert" {...this.props} left={true}/>
                <View style={styles.menuview}>              
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20}]} onPress={this.alert} >
                        <Text style={styles.choosetext2}>Alert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20,backgroundColor:'red'}]} onPress={this.cancel}>
                        <Text style={styles.choosetext2}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}