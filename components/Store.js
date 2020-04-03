import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TextInput,
    Image,
    View,
    Text
  } from 'react-native';

  const Store = () => {
      return(
          <ScrollView>
          <View>
              <View style={{ alignItems: 'center',marginTop:5 }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                      <TextInput placeholder="请输入产品名称" style={styles.inp} />
                      <Image source={require('../Images/sou.jpg')} style={{ height:40 }} />
                  </View>
              </View>

              <View style={styles.tex}>
                  <Text style={styles.text}>综合</Text>
                  <Text style={styles.text}>销量</Text>
                  <Text style={styles.text}>新品</Text>
                  <Text style={styles.text}>价格</Text>
                  <Text style={styles.text}>信用</Text>
              </View>

              <View style={{alignItems:'center',width:'100%',backgroundColor:'#d1cbca'}}>
                  <View style={{flexDirection:'row'}}>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lielie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                  </View>

                  <View style={{flexDirection:'row'}}>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lielie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                  </View>

                  <View style={{flexDirection:'row'}}>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lielie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                  </View>

                  <View style={{flexDirection:'row'}}>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                      <View style={{width:'45%',margin:5,backgroundColor:'white'}}>
                          <Image source={require('../Images/lielie.jpg')} style={{width:'100%',height:250}}/>
                          <Text style={{color:'#d1cbca',paddingLeft:5,paddingTop:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                          <Text style={{color:'red',paddingLeft:5,paddingTop:10}}>36.00</Text>
                      </View>
                  </View>
              </View>

          </View>
          </ScrollView>
 
      )
  }


  const styles = StyleSheet.create({
      inp:{
        backgroundColor: '#d1cbca',
        width: '70%', 
        height: 40, 
        paddingLeft: 10 
      },
      tex:{
          marginTop:5,
          width:'100%',
          height:50,
          borderWidth:1,
          borderColor:'#d1cbca',
          flexDirection:"row",
          paddingLeft:20
      },
      text:{
          width:"20%",
          lineHeight:50
      }
  })

  export default Store;