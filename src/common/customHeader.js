import React,{Component} from 'react';
import {Header,Title} from 'native-base';
import {TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
let styles = require('../../public/stylesheet/dashboardstyle');

export default class customHeader extends Component{
    render() {
        const {title} = this.props
        return(
            <Header style={styles.customheader}>
                <Icon style={styles.title} name="chevron-left" size={20} onPress={()=>{this.props.navigation.goBack()}}/>
                <Title style={styles.title}>{title}</Title>
                <Text></Text>
            </Header>
        )
    }
}