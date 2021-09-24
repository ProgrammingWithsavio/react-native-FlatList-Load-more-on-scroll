import React ,{useState,useEffect} from 'react';
import {  FlatList, Image, SafeAreaView,ScrollView,Text, TouchableOpacity, View } from 'react-native';
const App =() =>  {
const [data,setData]=useState([])
const [limit,setLimit]=useState(10)
const apiurl="https://jsonplaceholder.typicode.com/photos?_limit="+limit
const fetchdata=()=>{
  fetch(apiurl)
  .then((response)=>response.json())
  .then((jsondata)=>{setData(jsondata)})
  .catch((err)=>console.log(err))
}
useEffect(()=>{
fetchdata()
},[])
const render=({item})=>{
  return(
    <View>
      <Text>{item.id}-{item.title}</Text>
      <Image
      source={{uri:item.url}}
      style={{width:'100%',height:180}}
      />
    </View>
  )
}
const loadmore=()=>{
  //onsole.log('end reached!!')
  setLimit(limit+5)
  fetchdata()
  console.log(apiurl)
}

return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}} >

 {/* <Text style={{fontSize:18,fontWeight:'bold'}}>React Native FlatList Load More On Scroll</Text> 
  <Text style={{fontSize:16,fontWeight:'bold'}}>Programming with savio</Text> */}

<FlatList
data={data}
renderItem={render}
keyExtractor={(item,i)=>i.toString()}
onEndReached={()=>{loadmore()}}
/>


   </SafeAreaView>
  );
};

export default App;
