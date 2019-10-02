import React,{Component} from "react";
import { View, Text, ScrollView } from "react-native";

export default class Main extends React.Component{

    static navigationOptions = {
        header:null
    }


    render=()=>{
        
        return(
            <View >
            
                <Text>Main</Text>
            
            </View>
            )
    }
}