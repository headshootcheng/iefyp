import React,{Component} from "react";
import { View, Text, ScrollView,Image } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
import CustomHeader from '../common/customHeader';
let styles = require('../../public/stylesheet/dashboardstyle');
export default class quickcall extends Component{
    static navigationOptions = {
        header:null
    }
    render=()=>{
        return(
            <Container style={styles.container}>
                <CustomHeader title="Quick Call" {...this.props}/>
                <Content style={styles.contactlistarea}>
                    <View style={styles.contactlistarea2}>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample1.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample2.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample3.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample4.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample5.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample6.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample7.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample8.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample9.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample1.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample2.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample3.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample4.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample5.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample6.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample7.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample8.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample9.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample1.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample2.jpg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample3.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample4.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample5.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample6.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample7.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample8.jpeg')}/>
                    <Image style={styles.contactimg} source={require('../../public/image/contactlist/sample9.jpg')}/>
                    
                    </View>
                    
                </Content>
            </Container>
        )
    }
}