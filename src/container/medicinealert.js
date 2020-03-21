import React,{Component} from "react";
import FormData from 'FormData';
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
        //console.log('alert')
        let formData = new FormData();
        formData.append('test', 1);
        fetch('http://127.0.0.1/~petercheng/iot.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:FormData
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
                    <TouchableOpacity style={[styles.menubutton,{marginTop:20,backgroundColor:'red'}]}>
                        <Text style={styles.choosetext2}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

}