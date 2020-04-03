import React,{useState} from 'react';
import { Grid, Icon } from '@ant-design/react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import Home from './components/Home';
import List from './components/List';
import Shopping from './components/Shopping';
import User from './components/User';
import Release from './components/Release';

// const tab = [
//     {key:'home',title:'首页',name:'home',comp:Home},
//     {key:'list',title:'商品分类',name:'appstore',comp:List},
//     {key:'shopping',title:'购物车',name:'shopping-cart',comp:Shopping},
//     {key:'user',title:'个人中心',name:'user',comp:User}
// ]

const App = () => {
  return (
    <Router>
        <Scene key="root">
            <Tabs 
                key="tabbar" 
                hideNavBar
                activeTintColor="#f23030"
                inactiveTintColor="#949494"
                tabBarBackgroundColor="#fff"
            >
                {/* {
                    tab.map((item)=>(
                        <Scene 
                            hideNavBar
                            key={item.key} 
                            title={item.title}
                            icon={({focused})=>
                                <Icon color={focused?"#f23030":"#949494"} size={30} name={item.name}/>
                            }
                            component={item.comp}
                        />
                    ))
                } */}
                <Scene 
                    hideNavBar
                    key='home'
                    title='首页'
                    icon={({focused})=>
                        <Icon color={focused?"#f23030":"#949494"} size={30} name='home'/>
                    }
                    component={Home}
                />
                <Scene 
                    hideNavBar
                    key='list'
                    title='商品分类'
                    icon={({focused})=>
                        <Icon color={focused?"#f23030":"#949494"} size={30} name='appstore'/>
                    }
                    component={List}
                />
                <Scene 
                    hideNavBar
                    key='shopping'
                    title='购物车'
                    icon={({focused})=>
                        <Icon color={focused?"#f23030":"#949494"} size={30} name='shopping-cart'/>
                    }
                    component={Shopping}
                />
                <Scene 
                    hideNavBar
                    key='user'
                    title='个人中心'
                    icon={({focused})=>
                        <Icon color={focused?"#f23030":"#949494"} size={30} name='user'/>
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
        </Scene>
    </Router>
  );
};

export default App;
