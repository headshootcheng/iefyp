import React,{Component} from 'react';
import {Header,Title,View} from 'native-base';
import {TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
let styles = require('../../public/stylesheet/dashboardstyle');

export default class customHeader extends Component{
    render() {
        const {title,left,right} = this.props
        return(
            <Header style={styles.customheader}>
                {left?<Icon style={styles.title} name="chevron-left" size={20} onPress={()=>{this.props.navigation.goBack()}}/>:<View/>}
                <Title style={[styles.title,right&&{left:25}]}>{title}</Title>
                {right?<TouchableOpacity  onPress={()=>{this.props.navigation.goBack()}}><Text style={styles.title}>Logout</Text></TouchableOpacity>:<View/>}
            </Header>
        )
    }
}