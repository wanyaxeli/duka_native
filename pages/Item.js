import { SafeAreaView,View,Text,StyleSheet,Image,Pressable,Dimensions} from "react-native";
import { useState,useEffect } from "react";
import { data } from "../components/data";
import Icon from'react-native-vector-icons/FontAwesome'
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Item=({navigation,route})=>{
    const [product,setProduct]=useState([])
    const [liked,setLiked]=useState(false)
    const [cart,setCart]=useState([])
    const [color,setColor] = useState({iconColor:'#000'})
    const [likeItem,setLikeItem]=useState([])
    var TotalHeight = Dimensions.get("window").height
    const {item}= route.params
   async function StoreLiked(){
        try{
            await AsyncStorage.setItem('item',JSON.stringify(likeItem))
        }catch(error){
           console.log(error)
        }
    }
    async function StoreCart(){
        try{
            await  AsyncStorage.setItem("cart",JSON.stringify(cart))
        }catch(error){
       console.log(error)
        } 
    }
    
    useEffect(()=>{
     StoreLiked()
    },[likeItem])
    useEffect(()=>{
      StoreCart()
    },[cart])
    const handleLike =(id)=>{
        if (liked===false){
            setLiked(true)
        }else{
            setLiked(false)
        }
        if (liked=== true){
            setColor({iconColor:'tomato'})
           let item= data.find(item=>item.id===id)
           const newItem=Object.assign({},item,{quantity:1})
           setLikeItem(pre=>[...pre,newItem])
        }else{
            setColor({iconColor:'#000'}) 
           let removeItem= likeItem.filter(item=>item.id!==id)
            setLikeItem(removeItem)
        }
    }
    const handleAddCart =(id)=>{
     let item= data.find(item=>item.id===id)  
     const newItem=Object.assign({},item,{quantity:1})
     if (cart.includes(newItem)){
        return false
     }else{
     setCart(pre=>[...pre,newItem])
     }
    }
    useEffect(()=>{
      setProduct([item])
    },[])
    return(
       <SafeAreaView>
        <ScrollView>
        {product.map(item=>{
            return(
        <View key={item.id} style={[styles.itemWrapper,{height:TotalHeight}]}>
            <View style={styles.itemImage}>
             <Image style={styles.image} source={item.url}/>
            </View>
            <View style={styles.iconWrapper}>
                <Pressable onPress={()=>handleLike(item.id)}>
                <View style={styles.iconContainer}>
                <Icon style={{color:color.iconColor}} name="heart" size={20} />
                </View>
                </Pressable>
            </View>
            <View style={styles.itemDesWrapper}>
                <Text style={[styles.cardTeaxt,styles.name]}>{item.name}</Text>
                <Text style={styles.cardTeaxt}>{item.description}</Text>
                <Text >{item.price}</Text>
                 <Pressable style={styles.presBTn} onPress={()=>handleAddCart(item.id)}><Text style={{color:'#fff'}}>Add Cart</Text></Pressable>
            </View>
        </View>
            )
         })}
        
        </ScrollView>
       </SafeAreaView>
    )
}
export default Item
const styles = StyleSheet.create({
    itemWrapper:{
        flex:1,
        backgroundColor:'#e8e8ee'
    },
    itemImage:{
        width:'100%',
        height:'65%',
    },
    image:{
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:80,
        resizeMode:'contain'
    },
    iconWrapper:{
        width:'100%',
        height:'auto',
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'center',
        marginTop:-20,
        paddingHorizontal:10
    },
    iconContainer:{
        width:40,
        height:40,
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    itemDesWrapper:{
        paddingHorizontal:10,
        marginTop:10,
        width:'100%',
        height:'auto',
    },
    presBTn:{
        width:"100%",
        height:40,
        backgroundColor:'black',
        marginVertical:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    cardTeaxt:{
        marginBottom:10
    },
    name:{
        textTransform:'capitalize',
        fontSize:25
    }
})