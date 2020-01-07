import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Choose from'./src/account/choose'
import Login from'./src/account/login'
import Dashboard from'./src/container/dashboard';
import Mylocation from './src/container/mylocation';
import BodyCheck from './src/container/bodycheck';
import MedicineAlert from './src/container/medicinealert'
const Allpages = createStackNavigator({
  Choose:Choose,
  Login:Login,
  Dashboard: Dashboard,
  MyLocation:Mylocation,
  BodyCheck:BodyCheck,
  MedicineAlert:MedicineAlert
},
{
  initialRouteName:"Choose",
});

export default createAppContainer(Allpages);
