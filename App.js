import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	StatusBar,BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import List from './src/goods/List';
import Login from './src/common/Login'
import User from './src/userinfor/User';
import Release from './src/userinfor/Release'
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register';

console.disableYellowBox = true;
 
const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);//isInstall是否是第一次安装
	let now = 0;
	
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall:',res)
			if(res){
				setInstall(false)
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res);
			console.log(user);
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				AsyncStorage.getItem('isLogin')
				.then(req=>{
					console.log('isLogin:',req)
					if(req == 'false'){
						setLogin(false);
					}
					else if(req == 'true'){
						console.log(req);
						setLogin(true);
					}
					SplashScreen.hide();
				})
			}
		})
	}
	
	useEffect(()=>{
		init();//初始化 引导页+登录页
	},[])
	let afterInstall = () =>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
    return (
		<>
		<StatusBar backgroundColor='red'/>
		<Router 
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'release' ||  Actions.currentScene == 'register'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',50);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Lightbox key="lightbox">
			<Scene hideNavBar>
				<Tabs 
					key='tabbar'
					activeTintColor="red"
					inactiveTintColor="#949494"
					tabBarStyle={{backgroundColor:'white'}}
				>
					<Scene 
						hideNavBar
						key='homePage'
						title='首页'
						icon={({focused})=>
							<Icon color={focused?"#f23030":"#949494"} size={30}  name='home'/>
						}
					>
						<Scene key="home" component={Home}/>
					</Scene>
					<Scene 
						hideNavBar
						key='goodsPage'
						title='商品分类'
						icon={({focused})=>
							<Icon color={focused?"#f23030":"#949494"} size={30} name='appstore'/>
						}
					>
						<Scene key="goods" component={List} />
					</Scene>
					<Scene 
						hideNavBar
						key='userPage'
						title='个人中心'
						icon={({focused})=>
							<Icon color={focused?"#f23030":"#949494"} size={30}  name='user'/>
						}
					>
						<Scene key="user" component={User}/>
						<Scene 
							hideTabBar 
							key='release' 
							component={Release}
						/>
					</Scene>
				</Tabs>	
				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key="register" component={Register} hideNavBar={false} title='注册' 
				navigationBarStyle={{backgroundColor:'red'}}/>
			</Scene>
			</Lightbox>
		</Router>
		</>
	)
};
export default App;
