import React,{useState} from 'react';
import {StyleSheet,View,Text,TextInput,Image,FlatList,StatusBar} from 'react-native';
import oishi_01 from '../assets/images/oishi_01.jpg';
import oishi_02 from '../assets/images/oishi_02.jpg';
// import AppTest from './AppTest';

console.disableYellowBox = true;

const List = () => {
  let header = [
    {title:'综合',selected:true},
    {title:'销量',selected:false},
    {title:'新品',selected:false},
    {title:'价格',selected:false},
    {title:'信用',selected:false}
  ];
  let list = [
    {pic:oishi_01,text:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',price:'36.00'},
    {pic:oishi_02,text:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',price:'36.00'},
    {pic:oishi_01,text:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',price:'36.00'},
    {pic:oishi_02,text:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',price:'36.00'},
    {pic:oishi_01,text:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',price:'36.00'},
    {pic:oishi_02,text:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',price:'36.00'}
  ];
  let [headerData,setHeaderData] = useState(header);
  let changeSelect = (index)=>{
    for(var i=0;i<header.length;i++){
      if(i === index){
        header[i].selected = true;
      }else{
        header[i].selected = false;
      }
    }
    setHeaderData(header);
    // console.log(headerData);
  }
  return (
    <View>
      {/* <AppTest /> */}
      <StatusBar backgroundColor="red" barStyle="light-content"/>
      <View style={styles.search}>
        <TextInput 
          placeholder="请输入商品名称"
          placeholderTextColor="#9f9f9f"
          style={{fontSize:20}}
        />
        <Image style={{margin:15}} source={require('../assets/images/sousuo.jpg')}/>
      </View>

      <View style={styles.header}>
        {
          headerData.map((item,index)=>(
            <Text key={index} 
              style={item.selected?styles.selectBox:styles.box}
              onPress={()=>changeSelect(index)}
            >{item.title}</Text>
        ))
        }
      </View>

      <FlatList 
        data={list}
        numColumns={2}
        style={{backgroundColor:'#f4f4f4',padding:'2%'}}
        renderItem={({item,index})=>(
          <View style={styles.list} key={index}>
            <Image source={item.pic} style={styles.pic}/>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={[styles.text,{color:'red'}]}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search:{
    width:'92%',
    height:50,
    margin:'4%',
    borderRadius:6,
    backgroundColor:'#eee',
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  header:{
    height:40,
    flexDirection:'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
  },
  box:{
    fontSize:20,
    color:'#333'
  },
  selectBox:{
    fontSize:20,
    color:'red'
  },
  list:{
    width:'46%',
    margin:'2%',
    backgroundColor:'#fff'
  },
  pic:{
    width:'100%'
  },
  text:{
    fontSize:16,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:15,
    color:'#666'
  }
});

export default List;
