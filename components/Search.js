import React from "react";
import { View,Text,TextInput ,StyleSheet,Pressable} from "react-native";
import Icon from'react-native-vector-icons/FontAwesome'
const Search=({navigation})=>{
    const handleCartRedirect =()=>{
        navigation.navigate('cart')
    }
  return(
    <View style={styles.searchBar}>
             <TextInput placeholder="Search..." style={styles.input}/>
             <Pressable onPress={handleCartRedirect}>
                <View style={styles.cartWrapper}>
                   <Icon name="shopping-cart" size={20} color='black'/>
                 </View>
             </Pressable>
      </View>
  )
}
export default Search
const styles =StyleSheet.create({
    searchBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:50,
        paddingHorizontal:10,
        marginTop:10
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
       }
})