import React, { Component } from 'react'
import {View,Text,Image,ScrollView, StyleSheet,AsyncStorage}from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import { Icon} from '@ant-design/react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
export default class My extends Component {
    constructor(){
        super();
        this.state={
            ImageUrl:require('../Images/tou.jpg'),
        }
    }
    
    componentDidMount(){
        AsyncStorage.getItem('touxiang')
        .then((res)=>{
            this.setState({ImageUrl:{uri:res}})
        })
    }
    
    takephoto = () => {
        ImageCropPicker.openCamera({
            width: 100,
            height: 100,
            cropping: true,
        }).then(image => {
            this.setState({ ImageUrl:{uri: image.path} })
            AsyncStorage.setItem('touxiang',image.path,()=>{console.log(image.path)})
        });
    }
    render() {
        return (
            <ScrollView>
                <View>
                    {/* 头部背景红色 */}
                    <View style={styles.tou}>
                        <View style={styles.beijing}>
                            <Button
                                onPress={() => {this.takephoto()}}
                            >
                            <Image source={this.state.ImageUrl} style={{ width: 100, height: 100}}/>
                            </Button>
                        </View>
                        <Text style={{fontSize:20,color:'white',marginTop:20,marginLeft:-20}}>BINNT DHLLION</Text>
                    </View>
                    {/* 个人中心 */}
                    <View style={{backgroundColor:'white',paddingLeft:10,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#eeeeee',height:40,alignItems:'center'}}>
                        <Icon name="key"/>
                        <Text style={{marginLeft:10,color:'#5b5b5b'}}>我的个人中心</Text>
                    </View>
                    
                    <View style={{backgroundColor:'white'}}>
                        <View style={styles.ico}>
                            <View style={{alignItems:'center'}}>
                                <Icon name="setting"/>
                                <Text style={{color:"#c4c4c4"}}>账户管理</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="alert"/>
                                <Text style={{color:"#c4c4c4"}}>收货地址</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="contacts"/>
                                <Text style={{color:"#c4c4c4"}}>我的信息</Text>
                            </View>
                        </View>

                        <View style={styles.ico}>
                            <View style={{alignItems:'center'}}>
                                <Icon name="file-text"/>
                                <Text style={{color:"#c4c4c4"}}>我的订单</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="qrcode"/>
                                <Text style={{color:"#c4c4c4"}}>我的二维码</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="bell"/>
                                <Text style={{color:"#c4c4c4"}}>我的积分</Text>
                            </View>
                        </View>

                        <View style={{width:160}}>
                            <View style={{alignItems:'center'}}>
                                <Icon name="star"/>
                                <Text style={{color:"#c4c4c4"}}>我的收藏</Text>
                            </View>
                        </View>
                    </View>
                    {/* E族活动 */}
                    <View style={{backgroundColor:'white',marginTop:10}}>
                    <View style={{paddingLeft:10,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#eeeeee',height:40,alignItems:'center'}}>
                        <Icon name="key"/>
                        <Text style={{marginLeft:10,color:'#5b5b5b'}}>E族活动</Text>
                    </View>
                        <View style={styles.ico}>
                            <View style={{alignItems:'center'}}>
                                <Icon name="tool"/>
                                <Text style={{color:"#c4c4c4"}}>居家维修保养</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="car"/>
                                <Text style={{color:"#c4c4c4"}}>出行接送</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="home"/>
                                <Text style={{color:"#c4c4c4"}}>我的受赠人</Text>
                            </View>
                        </View>
                        <View style={styles.ico}>
                            <View style={{alignItems:'center'}}>
                                <Icon name="home"/>
                                <Text style={{color:"#c4c4c4"}}>我的住宿优惠</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Icon name="flag"/>
                                <Text style={{color:"#c4c4c4"}}>我的活动</Text>
                            </View>
                            <Button onPress={()=>Actions.mydetail()}>
                                <View style={{alignItems:'center'}}>
                                    <Icon name="form"/>
                                    <Text style={{color:"#c4c4c4"}}>我的发布</Text>
                                </View>
                            </Button>   
                        </View>
                    </View>


                   <Text style={{color:'#a4a4a4',textAlign:'center',marginTop:40}}>BINNT DHLLION | 退出</Text>


                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    ico:{
        flexDirection:"row",
        justifyContent:'space-around',
        margin:15
    },
    tou:{
        width:'100%',
        height:250,
        backgroundColor:'red',
        paddingTop:30,
        paddingLeft:200,
    },
    beijing:{
        width:100,
        height:100,
        borderRadius:100,
        overflow:'hidden',
        justifyContent:'center',
        borderWidth:1
    }
})