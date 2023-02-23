import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,SafeAreaView,ScrollView,Dimensions,Image, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Likes=({navigation})=>{
    var TotalHeight = Dimensions.get("window").height
    const [item,setItem]=useState([])
    async function getLiked(){
      let pro= await AsyncStorage.getItem('item')
      if (pro){
       let parsedItem= JSON.parse(pro)
       setItem(pre=>[...pre,parsedItem])
      }
    }
    const handleEmptyCart=()=>{
        navigation.navigate('Produts')
    }
    const handleDelete=(id)=>{
     let removed=item.filter(i=>i.id !== id)
     setItem(removed)
    }
    const Likes = item.flat()
    useEffect(()=>{
     getLiked()
    },[])
    if (item.length ===0){
        return(
            <View style={styles.emptyCart}>
                <Text style={{fontSize:20}}>No liked Items yet!</Text>
                <Pressable onPress={handleEmptyCart} style={styles.emptyBtn}><Text style={{color:'#fff'}}>Shop Now</Text></Pressable>
            </View>
        )
    }
    return(
       <SafeAreaView>
        <ScrollView>
            <View style={[styles.likeWrapper,{height:TotalHeight}]}>
                {
                    Likes.map(like=>{
                        return(
                    <View key={like.id} style={styles.cardItem}>
                        <View style={styles.cardImage}>
                           <Image style={styles.image} source={like.url}/>
                        </View>
                        <View>
                          <Text>{like.name}</Text>
                          <Text>{like.price}</Text>
                          <Pressable style={[styles.btn,styles.addBtn]}><Text style={{color:'white'}}>Add Cart</Text></Pressable>
                          <Pressable onPress={()=>handleDelete(like.id)} style={[styles.btn]}><Text style={{color:'white'}}>Remove</Text></Pressable>
                        </View>
                    </View>  
                        )
                    })
                }
            </View>
        </ScrollView>
       </SafeAreaView>
    )
}
export default Likes
const styles = StyleSheet.create({
    likeWrapper:{
        padding:10,
        width:'100%',
        flex:1,
        backgroundColor:'#e8e8ee',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        gap:10,
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    cardItem:{
        width:180,
        height:230,
        backgroundColor:'#fff',
        borderRadius:10,
        padding:10
    },
    cardImage:{
        height:'35%',
        width:'100%',
        borderRadius:10,
        marginBottom:10
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:10
    },
    btn:{
        width:'100%',
        height:30,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        backgroundColor:'red',
        borderRadius:5
    },
    addBtn:{
        backgroundColor:'blue',
        marginTop:10
    } ,
  emptyCart:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  emptyBtn:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:'#000',
    margin:10,
    borderRadius:15,
  }
})