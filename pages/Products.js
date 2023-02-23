import React from "react";
import {SafeAreaView,Image,Dimensions,ScrollView, View,Text, StyleSheet } from "react-native";
import { data } from "../components/data";
import Search from "../components/Search";
const Products=({navigation})=>{
    const height= Dimensions.get('window').height
    return(
       <SafeAreaView>
            <ScrollView>
                <View style={[styles.productWrapper,{height:height}]}>
                    <Search navigation={navigation}/>
                  {data.map(item=>{
                    return(
                    <View key={item.id} style={styles.cardItem}>
                        <View style={styles.cardImage}>
                           <Image style={styles.image} source={item.url}/>
                        </View>
                        <View>
                          <Text>{item.name}</Text>
                          <Text>{item.price}</Text>
                        </View>
                    </View>
                    )
                  })}
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}
export default Products
const styles = StyleSheet.create({
    productWrapper:{
        flex:1,
        padding:10,
        backgroundColor:'#e8e8ee',
        display:'flex',
        flexDirection:'row',
        gap:12,
        flexWrap:'wrap'
    },
    cardItem:{
        width:180,
        height:200,
        backgroundColor:'#fff',
        borderRadius:10,
        padding:10
    },
    cardImage:{
        height:'65%',
        width:'100%',
        borderRadius:10,
        marginBottom:10
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:10
    }
})