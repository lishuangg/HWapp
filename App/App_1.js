import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import { Icon} from '@ant-design/react-native';
import My from './components/My';
import Home from './components/Home';
import Store from './components/Store';
import MyDetail from './components/MyDetail';
const App=()=>{
    return (
        <Router>
            <Scene key="root">
                <Tabs
                    key='tabbar'
                    hideNavBar
                    activeTintColor="red"
                    inactiveTintColor="#4f4e4e"
                    tabBarStyle={{backgroundColor:'white'}}
                    >
                        {/* 首页 */}
                        <Scene key="home"
                        hideNavBar
                             title="首页"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="home"
                                />
                             } 
                             component={Home}      
                        />
                           
                        {/* 商品分类 */}
                        <Scene key="store"
                            hideNavBar
                             title="商品分类"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="appstore"
                                />
                             } 
                             component={Store}      
                        />
                            
                        {/* 购物车 */}
                        <Scene key="shop"
                            hideNavBar
                             title="购物车"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="shopping-cart"
                                />
                             } 
                             component={Store}      
                        />
                            
                        {/* 个人中心 */}
                        <Scene key="user"
                            title="个人中心"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="user"
                                />
                             }      
                        >
                        <Scene key="my" hideNavBar component={My} />
                        <Scene
                            key="mydetail"
                            title="我的发布"
                            hideTabBar
                            titleStyle={{textAlign:'center'}}
                            component={MyDetail}
                        />
                        </Scene>

                </Tabs>
            </Scene>
        </Router>
    )
}

const styles=StyleSheet.create({

})

export default App;