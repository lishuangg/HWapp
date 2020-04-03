import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,TouchableOpacity,AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start =  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    };
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require("../../assets/images/slide_01.png")}/>
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={{color: '#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require("../../assets/images/slide_02.png")}/>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require("../../assets/images/slide_03.png")}/>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:"100%"
    },
    slide:{
        flex:1,
        height:'100%',
        alignItems:'center'
    },
    start:{
        bottom:150,
        width:100,
        height:40,
        color:'#fff',
        textAlignVertical:'center',
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:20
    }
})