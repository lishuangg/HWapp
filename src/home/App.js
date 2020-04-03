import React,{useState,useEffect} from 'react';
import { Grid, Icon } from '@ant-design/react-native';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid,AsyncStorage } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import {Router,Scene,Tabs,Overlay,Modal,Lightbox,Drawer} from 'react-native-router-flux';
import Login from './src/common/Login';
import Home from './src/home/Home';
import List from './src/goods/List';
import User from './src/userinfor/User';
import Release from './components/Release';
import SwiperPage from './src/common/SwiperPage';

console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/0679e0f235c9db07e93321733692299d/hybird';

const App = () => {
    let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
    return (
        <Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								<Scene key='homePage'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
								>
									<Scene key='home' hideNavBar={true} component={Home}/>
								</Scene>
								<Scene key='goodsPage'
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
								>
									<Scene key="goods" component={List}/>
								</Scene>
								<Scene 
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='file'/>
										}
									title="用户中心"
									component={User}
								/>
							</Tabs>
						</Scene>
					</Drawer>
				</Lightbox>
                <Scene initial={true} key="login" component={Login} />
				{/* initial 先显示 login */}
			</Modal>
			</Overlay>
		</Router>
    );
};

export default App;
