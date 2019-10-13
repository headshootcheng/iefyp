import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Elderdashboard from'./src/Elderdashboard';
import Locationsuggestion from './src/elder/locationsuggestion'


const Allpages = createStackNavigator({
  Elderdashboard: Elderdashboard,
  Locationsuggestion: Locationsuggestion
},
{
  initialRouteName:"Elderdashboard",
});

export default createAppContainer(Allpages);
