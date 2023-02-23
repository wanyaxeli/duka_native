import React from "react";
import{ StyleSheet,View,Text,TextInput ,ScrollView,Dimensions,Image,Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from'react-native-vector-icons/FontAwesome'
import BestSelling from "../components/BestSelling";
import { data } from "../components/data";
import Carousel from 'react-native-snap-carousel'
import Search from "../components/Search";
const Home =({navigation})=>{
    var TotalHeight = Dimensions.get("window").height
    let sliderWidth = Dimensions.get('window').width
    const handleRedirect=(id)=>{
      const item= data.find(item=>item.id===id)
       navigation.navigate('item',{item:item})  
    }
    const renderCarousel=({item})=>{
        return(
        <Pressable onPress={()=>handleRedirect(item.id)}>
          <View style={styles.exporeCard}>
                <View style={styles.exporeCardImage}>
                <Image style={styles.exporeImage} source={item.url} />
                </View>
                <View>
                <Text style={styles.exporeCardText}>{item.name}</Text>
                <Text style={styles.exporeCardPrice}>$ {item.price}</Text>
                </View> 
            </View>
        </Pressable>
        )
    }
    return(
       <SafeAreaView>
         <ScrollView style={styles.scrollApp}>
            <View style={[styles.app,{height:TotalHeight}]} >
                    {/* <View style={styles.header}>
                        <Icon name='bars' size={20} color='black'/>
                        <Icon name="user" size={20} color='black'/>
                    </View> */}
                     <Search navigation={navigation}/>
                    <View style={styles.exporeWrapper}>
                      <Text style={styles.exporeText}>Expore</Text>
                      <Carousel style={styles.ExporeCardWrapper}
                       data={data}
                       renderItem={renderCarousel}
                       sliderWidth={sliderWidth}
                       itemWidth={180}
                       firstItem={2}
                      />
                    </View>
                   <BestSelling/>
            </View>
            </ScrollView>
       </SafeAreaView>
    )
}
export default Home
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
           backgroundColor:'#fff',
           borderRadius:15,
           padding:10
       },
       exporeCardImage:{
           height:130,
           width:'100%',
           borderRadius:10,
           marginBottom:6
       },
       exporeImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:10
       },
       exporeCardText:{
           fontSize:18
       },
       exporeCardPrice:{
           fontSize:17
       }  
})