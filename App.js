import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Elderdashboard from'./src/Elderdashboard';
import Main from './src/main'
const Allpages = createStackNavigator({
  Elderdashboard: Elderdashboard,
  Home: Main,
  //Parentdashboard: Parentdashboard,
},
{
  initialRouteName:"Elderdashboard",
});

export default createAppContainer(Allpages);
