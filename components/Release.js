import React, { Component } from 'react'
import { Text, View, StatusBar,StyleSheet, Dimensions, FlatList, ToastAndroid } from 'react-native'
import {Icon} from '@ant-design/react-native'
import Button from 'react-native-button'

console.disableYellowBox = true;
const {width,scale} = Dimensions.get('window');
const s = width/640;

const styles = StyleSheet.create({
    header:{
        width:width,
        height:60*s,
        paddingLeft:20*s,
        paddingRight:20*s,
        backgroundColor:'red',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    line:{
        height:50*s,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        fontSize:16
    },
    pages:{
        paddingTop:20*s,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    btn:{
        width:150*s,
        height:50*s,
        color:'#fff',
        fontSize:18,
        textAlignVertical:'center',
        backgroundColor:'red',
        borderRadius:25*s
    }
})

export default class Release extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
    }
    componentDidMount(){
        this.getDate(1);
    }
    leftPages = () =>{
        if(this.state.page == '1'){
            ToastAndroid.show('已经没有上一页了！！！', ToastAndroid.SHORT);
        }else{
            var pa = this.state.page - 1;
            this.getDate(pa);
        }
    }
    rightPages = () =>{
        var pa = this.state.page + 1;
        this.getDate(pa);
    }
    getDate = (page) =>{
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+page)
        .then(res => res.json())
        .then(res => {
            this.setState({
                data:res.data,
                page:page
            })
        })
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="red" />
                {/* 头部 */}
                <View style={styles.header}>
                    <Icon name='left' style={{color:'#fff'}} />
                    <Text style={{color:'#fff',fontSize:20}}>我的发布</Text>
                    <Icon name='bars' style={{color:'#fff'}}/>
                </View>
                {/* 信息列表 */}
                <FlatList 
                    data={this.state.data}
                    style={{padding:30*s}}
                    ListFooterComponent={<View style={styles.pages}>
                        <Button style={styles.btn} onPress={()=>this.leftPages()}>上一页</Button>
                        <Text style={styles.text}>第 {this.state.page} 页</Text>
                        <Button style={styles.btn} onPress={()=>this.rightPages()}>下一页</Button>
                    </View>}
                    renderItem={({item,index})=>(
                    <View key={index} style={styles.line}>
                        <Text style={[styles.text,{width:380*s}]}>{item.title.substring(0,15)+'...'}</Text>
                        <Text style={styles.text}>{item.create_at.slice(0,10)}</Text>
                        {
                            Math.round(Math.random())
                            ?<Text style={styles.text}>已回复</Text>
                            :<Text style={[styles.text,{color:'red'}]}>待回复</Text>
                        }
                    </View>
                    )}
                />
            </View>
        )
    }
}