import React, { Component } from 'react'
import { Text, View ,StyleSheet, ToastAndroid,Button} from 'react-native';
import Router from 'react-native-router-flux';
import { WhiteSpace } from '@ant-design/react-native';

export default class  extends Component {
    constructor(){
        super();
        this.state={
            url:'https://cnodejs.org/api/v1/topics?page=1&limit=14',
            data:[],
            num:1
        }
    }
    componentWillMount(){
        fetch(this.state.url)
            .then(res=>res.json())
            .then(res=>{
               this.setState({
                   data:res.data
               })
            })
    }
    
    before=()=>{
        var k=this.state.num;
        k--
        if(k==0){
            k=1;
            ToastAndroid.show('已经是第一页',ToastAndroid.SHORT);
        }
        fetch(`https://cnodejs.org/api/v1/topics?page=${k}&limit=14`)
        .then(res=>res.json())
        .then(res=>{
           this.setState({
                num:k,
                data:res.data
           })
        })
    }
    after=()=>{
        var k=this.state.num;
        k++
        fetch(`https://cnodejs.org/api/v1/topics?page=${k}&limit=14`)
        .then(res=>res.json())
        .then(res=>{
           this.setState({
                num:k,
                data:res.data
           })
        })
    }
    render() {
        return (
            <View style={{paddingTop:10,backgroundColor:'white'}}>
                {
                    this.state.data.map((item) => (
                        <View style={{flexDirection:'row',height:40}}>
                            <View style={{width:270,marginLeft:30}}>
                            <Text style={{ fontSize: 17}}>{item.title.substring(0,13)+'...'}</Text>
                            </View>
                            <Text style={{paddingLeft:20}}>{item.create_at.substring(0,10)}</Text>
                            {Math.random()>0.5?<Text style={{paddingLeft:15}}>已回复</Text>:<Text style={{color:"red",paddingLeft:15}}>待回复</Text>}
                        </View>
                    ))
                }
                <View style={{ flexDirection: 'row',justifyContent:'space-evenly',marginTop:20}}>
                    <Button title="上一页" onPress={this.before}/>
                    <Text>第{this.state.num}页</Text>
                    <Button title="下一页" onPress={this.after}/>
                </View>
            </View>
        )
    }
}
