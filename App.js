import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Elderdashboard from'./src/Elderdashboard';
import Locationsuggestion from './src/elder/locationsuggestion';
import Quickcall from './src/elder/quickcall';
import Mylocation from './src/elder/mylocation';
import Mylocation2 from './src/elder/mylocation2';
const Allpages = createStackNavigator({
  Elderdashboard: Elderdashboard,
  Locationsuggestion: Locationsuggestion,
  Quickcall: Quickcall,
  MyLocation:Mylocation,
  MyLocation2:Mylocation2
},
{
  initialRouteName:"Elderdashboard",
});

export default createAppContainer(Allpages);
