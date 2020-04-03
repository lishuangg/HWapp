import React, { Component } from 'react'
import {StatusBar,StyleSheet,View,Text,TextInput,Dimensions,Image} from 'react-native';
import { Grid, Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import icon_01 from '../assets/images/icon_01.png';
import icon_02 from '../assets/images/icon_02.png';
import icon_03 from '../assets/images/icon_03.png';
import icon_04 from '../assets/images/icon_04.png';

console.disableYellowBox = true;

const {width,scale} = Dimensions.get('window');
const s = width/640;

const list = [
    {pic:icon_01,bgcolor:'#fcc',title:'居家维修保养'},
    {pic:icon_02,bgcolor:'#ffe1b1',title:'住宿优惠'},
    {pic:icon_03,bgcolor:'#bfe6a8',title:'出行接送'},
    {pic:icon_04,bgcolor:'#c3ddf2',title:'E族活动'},
]

const styles = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:'red',
        paddingLeft:20*s,
        paddingTop:15*s,
        paddingBottom:10*s,
        flexDirection:'row'
    },
    search:{
        width:530*s,
        height:50*s,
        borderRadius:25*s,
        backgroundColor:'rgba(255,255,255,.5)',
        flexDirection:'row',
    },
    swiper_dot:{
        width:10,
        height:10,
        borderRadius:5,
        marginLeft:8,
        marginRight:8,
        marginBottom:-20
    },
    menu:{
        width:width,
        padding:5*s,
        marginTop:8*s,
        backgroundColor:'#fff',
        justifyContent:"space-around",
        flexDirection:'row'
    },
    menu_pic:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        justifyContent:'center',
        alignItems:'center'
    },
    menu_text:{
        width:380*s,
        height:100*s,
        justifyContent:'center'
    },
    menu_right:{
        height:100*s,
        justifyContent:'center'
    },
    btn:{
        width:540*s,
        height:65*s,
        margin:50*s,
        fontSize:18,
        color:'#fff',
        backgroundColor:'#f23030',
        borderRadius:10*s,
        textAlignVertical:'center'
    },
})

export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#f5f5f5"}}>
                <StatusBar backgroundColor="red"/>
                {/* 搜索框 */}
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Icon 
                            name='search' 
                            style={{paddingLeft:15*s,paddingTop:10*s,color:"#fff"}}
                        />
                        <TextInput 
                            placeholder="请输入你要搜索的关键字"
                            placeholderTextColor="#fff"
                            style={{fontSize:16}}
                        />
                    </View>
                    <Icon
                        name="shopping-cart" 
                        style={{paddingLeft:15*s,paddingTop:5*s,fontSize:30,color:"#fff"}}
                    />
                </View>
                {/* 轮播图 */}
                <View style={{width:width,height:280*s}}> 
                    <Swiper
                        dot={<View style={[styles.swiper_dot,{backgroundColor:'#fff'}]} />}
                        activeDot={<View style={[styles.swiper_dot,{backgroundColor:'red'}]} />}
                        loop={true}
                        autoplay={true}
                    >
                        <Image source={require('../assets/images/lunbo_01.jpg')} style={{width:width,height:280*s}}/>
                        <Image source={require('../assets/images/lunbo_02.jpg')} style={{width:width,height:280*s}}/>
                        <Image source={require('../assets/images/lunbo_01.jpg')} style={{width:width,height:280*s}}/>
                    </Swiper>
                </View>
                {/* 菜单 */}
                <View>
                    {
                        list.map((item)=>(
                            <View style={styles.menu}>
                                <View style={[styles.menu_pic,{backgroundColor:item.bgcolor}]}>
                                    <Image source={item.pic} />
                                </View>
                                <View style={styles.menu_text}>
                                    <Text style={{fontSize:18,color:'#333'}}>{item.title}</Text>
                                </View>
                                <View style={styles.menu_right}><Icon name="right"/></View>
                            </View>
                        ))
                    }
                </View>
                <Button style={styles.btn}>发布需求</Button>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#767676'}}>©E族之家 版权所有</Text>
                </View>
            </View>
        )
    }
}
