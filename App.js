import 'react-native-gesture-handler';
import { StyleSheet,View,Text,TextInput ,ScrollView,Dimensions} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from'react-native-vector-icons/FontAwesome'
import BestSelling from "./components/BestSelling"
import Links from "./components/Links"
import {NavigationContainer} from '@react-navigation/native';
import React,{useState,createContext} from "react"
export const Liked = createContext(null)
const App =()=>{
    var TotalHeight = Dimensions.get("window").height
    const [like,setLiked]=useState(false)
    return(
      <NavigationContainer>
           <Liked.Provider value={like}>
            <Links/>
           </Liked.Provider>
      </NavigationContainer>
    )
}
export default App
const styles = StyleSheet.create({
app:{
 flex:1,
 display:'flex',
 backgroundColor:'#e8e8ee',
},
header:{
    width:'100%',
    height:60,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:10
},
searchBar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:50,
    paddingHorizontal:10
},
input:{
    width:'80%',
    height:40,
    backgroundColor:'#ddd',
    borderRadius:14,
    paddingHorizontal:10
},
cartWrapper:{
 width:40,
 height:40,
 display:'flex',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:50,
 backgroundColor:'#ddd'
},
exporeWrapper:{
    paddingHorizontal:10,
    paddingVertical:15,
},
exporeText:{
    fontSize:25,
    paddingBottom:10,
},
ExporeCardWrapper:{
    width:'100%',
    height:'auto',
},
exporeCard:{
    width:180,
    height:200,
    backgroundColor:'blue',
    borderRadius:15,
    padding:10
},
exporeCardImage:{
    height:130,
    width:'100%',
    backgroundColor:'white',
    borderRadius:10,
    marginBottom:6
},
exporeCardText:{
    fontSize:18
},
exporeCardPrice:{
    fontSize:17
}
})