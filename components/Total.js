import React from "react";
import { View ,StyleSheet,Pressable,Text,Dimensions} from "react-native";
const Total=({total})=>{
    return(
        <View style={styles.totalWrapper}>
           <Text>Total:<Text style={{color:'tomato'}}> ${total}</Text></Text>
           <Pressable style={styles.totalBTn}><Text style={{color:'#fff'}}>CheckOut</Text></Pressable>
        </View>
    )
}
export default Total
const styles = StyleSheet.create({
    totalWrapper:{
        width:'98%',
        height:150,
        borderRadius:10,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingLeft:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    totalBTn:{
        width:'95%',
        height:50,
        backgroundColor:'#000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:15,
    }
})