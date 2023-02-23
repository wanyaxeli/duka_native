import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import Icon from'react-native-vector-icons/FontAwesome'
import { data } from "./data";
const BestSelling=()=>{
    return(
        <View style={styles.sellingWrapper}>
        <Text style={styles.bestTest}>Best Selling</Text>
        <View style={styles.bestSellingItemsWrapper}>
          {data.map(item=>{
            return(
            <View key={item.id} style={styles.bestSellingCard}>
                <View style={styles.bestSellingImageWrapper}>
                   <Image style={styles.sellingImage} source={item.url}/>
                </View>
                <View style={styles.sellingTextWrapper}>
                 <Text>{item.name}</Text>
                 <Text>{item.price}</Text>
                 <View style={styles.arrowWrapper}>
                    <View style={styles.arrowHolder}>
                    <Icon name="long-arrow-right" color='white' size={20} />
                    </View>
                 </View>
                </View>
           </View>
            )
          })}
        </View>
        </View>  
    )
}

export default BestSelling
const styles = StyleSheet.create({
    sellingWrapper:{
        height:'auto',
        width:'100%',
        paddingHorizontal:10,
    } ,
    bestTest:{
        fontSize:25,
        paddingVertical:10
    },
    bestSellingItemsWrapper:{
        height:'auto',
        width:'100%',
        marginVertical:10,
    },
    bestSellingCard:{
        width:'98%',
        marginHorizontal:5,
        borderRadius:10,
        height:100,
        backgroundColor:'#fff',
        paddingVertical:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        marginBottom:15
    },
    bestSellingImageWrapper:{
        flex:.5,
        height:'100%',
        borderRadius:10
    },
    sellingTextWrapper:{
        flex:.4,
        height:'100%',
        textAlign:"ce"
    },
    sellingImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        borderRadius:10
    },
    arrowHolder:{
        width:30,
        height:25,
        backgroundColor:'#000',
        borderRadius:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    arrowWrapper:{
        width:'100%',
        height:40,
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'center'
    }
})
