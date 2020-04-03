import React, { Component } from 'react'
import {StatusBar,StyleSheet,View,Text,Image, ScrollView,Dimensions,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import Button from 'react-native-button';
import ImageCropPicker from 'react-native-image-crop-picker';
import pic from '../assets/images/pic.jpg';

console.disableYellowBox = true;

const {width,scale} = Dimensions.get('window');
const s = width/640;

const myMsg = [
    {pic:"setting",title:"账户管理"},
    {pic:"environment",title:"收货地址"},
    {pic:"solution",title:"我的信息"},
    {pic:"calendar",title:"我的订单"},
    {pic:"qrcode",title:"我的二维码"},
    {pic:"sketch",title:"我的积分"},
    {pic:"star",title:"我的收藏"}
];
const eActivity = [
    {pic:"tool",title:"居家维修保养"},
    {pic:"car",title:"出行接送"},
    {pic:"user",title:"我的受赠人"},
    {pic:"sound",title:"我的住宿优惠"},
    {pic:"flag",title:"我的活动"}
]

const styles = StyleSheet.create({
    btn:{
        width:200,
        height:40,
        color:'#fff',
        textAlignVertical:'center',
        borderRadius:20,
        backgroundColor:'red',
        marginBottom:10
    },
    header:{
        width:width,
        height:300*s,
        backgroundColor:'#f23030',
        alignItems:'center',
        justifyContent:'center'
    },
    header_pic:{
        width:150*s,
        height:150*s,
        borderRadius:75*s,
        borderWidth:5*s,
        borderColor:'#fff',
        borderWidth:3*s
    },
    list_title:{
        height:75*s,
        borderColor:"#eee",
        borderWidth:1,
        fontSize:20,
        flexDirection:'row',
        alignItems:'center'
    },
    list:{
        margin:10*s,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    content:{
        width:200*s,
        height:120*s,
        justifyContent:'center',
        alignItems:'center'
    },
    list_icon:{
        color:"#bbb",
        paddingLeft:15*s,
        paddingRight:15*s
    },
    list_text:{
        fontSize:20,
        color:"#666"
    }
})

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            iamgeUrl:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('imageUrl')
        .then((res)=>{
            if(res !== null){
                this.setState({imageUrl:{uri:res}});
            }else{
                this.setState({imageUrl:pic});
            }
        });     
    }
    takephoto = () =>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
            AsyncStorage.setItem('imageUrl',image.path,(res)=>{console.log("success")});
        });
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#eee'}}>
                <StatusBar backgroundColor='#f23030'/>
                <ScrollView>
                    {/* 头像区域 */}
                    <View style={styles.header}>
                        <Button onPress={this.takephoto}>
                            <Image 
                                style={styles.header_pic} 
                                source={this.state.imageUrl}
                            />
                        </Button>
                        <Text style={{fontSize:20,color:'#fff'}}>BINNU DHILLON</Text>
                    </View>
                    {/* 我的个人中心 */}
                    <View style={{marginBottom:10*s,backgroundColor:'#fff'}}>
                        <View style={styles.list_title}>
                            <Icon name="smile" size={30} style={styles.list_icon}/>
                            <Text style={styles.list_text}>我的个人中心</Text>
                        </View>
                        <View style={styles.list}>
                            {
                                myMsg.map((item)=>(
                                    <View style={styles.content}>
                                        <Icon name={item.pic} size={30} style={styles.list_icon} />
                                        <Text style={styles.list_text}>{item.title}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                    {/* E族活动 */}
                    <View style={{marginBottom:10*s,backgroundColor:'#fff'}}>
                        <View style={styles.list_title}>
                            <Icon name="tag" size={30} style={styles.list_icon}/>
                            <Text style={styles.list_text}>E族活动</Text>
                        </View>
                        <View style={styles.list}>
                            {
                                eActivity.map((item)=>(
                                    <View style={styles.content}>
                                        <Icon name={item.pic} size={30} style={styles.list_icon} />
                                        <Text style={styles.list_text}>{item.title}</Text>
                                    </View>
                                ))
                            }
                            <Button onPress={()=>{Actions.release()}}>
                                <View style={styles.content}>
                                    <Icon name="form" size={30} style={styles.list_icon} />
                                    <Text style={styles.list_text}>我的发布</Text>
                                </View>
                            </Button>
                        </View>
                    </View>
                    <View style={{alignItems:'center',padding:20*s}}>
                        <Text style={{color:'#aaa'}}>BINNU DHILLON | 退出</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
