import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert, StyleSheet,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            secondpwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    pwdsecondhandle = (text)=>{
        this.setState({secondpwd:text})
    }
    register = ()=>{
        if(this.state.username != '' && this.state.pwd == this.state.secondpwd && this.state.pwd != ''){
            this.setState({isloading:true})
            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                if(res.data.token=='111'){
                    Alert.alert('账户已存在！')
                }else if(res.data.token == '222'){
                    Alert.alert('密码设置不符合要求！');
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.login();
                        ToastAndroid.show('注册成功！', ToastAndroid.SHORT)
                    })
                }
            })      
        }else if(this.state.username != '' && this.state.pwd != this.state.secondpwd){
            Alert.alert('两次输入的密码不同！')
        }else{
            Alert.alert('用户名或密码不能为空！')
        }
        
    } 
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
                <View
                style={{ alignItems: 'center'}}>
                <View style={styles.line}>
                    <Icon name="user" color="red" size={18}/>
                    <TextInput placeholder="用户名" 
                        onChangeText={this.userhandle}
                    />
                </View>
                <View style={styles.line}>
                    <Icon name="lock" color="red" size={18}/>
                    <TextInput 
                        onChangeText={this.pwdhandle}
                        placeholder="密码" 
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.line}>
                    <Icon name="lock" color="red" size={18}/>
                    <TextInput 
                        onChangeText={this.pwdsecondhandle}
                        placeholder="确认密码" 
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity 
                    style={[styles.btn,{backgroundColor:'red'}]}
                    onPress={this.register}
                ><Text style={{color:'#fff'}}>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>Actions.login()}
                ><Text style={{color:'blue'}}>返回登录</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    line:{
        width: '80%',
        marginRight: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    btn:{
        width: '80%',
        height: 40,
        marginTop: 10,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})