import React,{useState,useEffect} from "react";
import { View,Text,SafeAreaView,FlatList,Dimensions,StyleSheet,Pressable,Image, ToastAndroid} from "react-native";
import Total from "../components/Total";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native-gesture-handler";
const Cart=({navigation})=>{
    var TotalHeight = Dimensions.get("window").height
    const [product,setItem]=useState([])
    const [price,setPrice]=useState()
    const [Totalprice,setTotalPrice]=useState([])
    const [total,setTotal]=useState()
    const [initialTotal,setInitialTotal]=useState()
    let item = product.flat()
    const handleEmptyCart=()=>{
        navigation.navigate('Produts')
    }
    const handleIncrement =(id)=>{
      let pro=item.find(item=>item.id===id) 
        pro.quantity ++  
       getPrice()
       getTotal()
       getTotalPrice()
    }
    const handleDelete =(id)=>{
    let removeItem= product.filter(item=>item.id !==id)
    console.log(removeItem)
     setItem(removeItem)
      getPrice()
      getTotal()
      getTotalPrice()
    }
    const handleDecrement=(id)=>{
        let pro=item.find(item=>item.id===id) 
      if(pro.quantity > 1){
        pro.quantity --
        getPrice()
        getTotal()
        getTotalPrice()
      }else{
        return false
      }
    }
    function getPrice (){
    item.forEach(item=>{
       let price = item.price * item.quantity
       setPrice(price)
    })
    }
    function getTotalPrice(){
        setTotalPrice([price])
    }
    function Prices(){
      let initialtotal=item.reduce((accu,cur)=>{
        return accu + cur.price
      },0)
      setInitialTotal(initialtotal)
    }
    function getTotal(){
     let t = Totalprice.reduce((accu,cur)=>{
            return accu + cur
        },0)
        setTotal(t)
       }
      
    async function GetCart(){
      try{
        let item=await AsyncStorage.getItem('cart')
        if (item){
          let parsedItem=JSON.parse(item)
         if(product.includes(item)){
            return false
         }else{
            setItem(pre=>[...pre,parsedItem])
         }
        }
      }catch(error){
       console.log(error)
      }
    }
    useEffect(()=>{
     GetCart()
     getTotal()
     getPrice()
     getTotalPrice()
     Prices()
     console.log(initialTotal)
    },[])
    useEffect(()=>{
        getPrice()
        getTotal()
        Prices()
       },[item])
    if(item.length===0){
        return(
            <View style={styles.emptyCart}>
                <Text style={{fontSize:20}}>Your cart is empty</Text>
                <Pressable onPress={handleEmptyCart} style={styles.emptyBtn}><Text style={{color:'#fff'}}>Shop Now</Text></Pressable>
            </View>
        )
    }else{ 
    return(
       <SafeAreaView>
            <View >
               <ScrollView style={styles.cartCardWrapper}>
                  {item.map(item=>{
                    return(
                   <Pressable onLongPress={()=>handleDelete(item.id)}>
                     <View key={item.id} style={styles.card}>
                        <View style={styles.cardImage}>
                        <Image style={styles.image} source={item.url}/>
                        </View>
                        <View style={styles.cardText}>
                        <Text style={{fontSize:25}}>{item.name}</Text>
                        <View style={styles.CardBtnWrapper}>
                            <Text>{
                            price}</Text>
                            <View style={styles.CardBtn}>
                                <Pressable onPress={()=>handleIncrement(item.id)} style={styles.btn}><Text>+</Text></Pressable>
                                <Text style={{marginHorizontal:5}}>{item.quantity}</Text>
                                <Pressable onPress={()=>handleDecrement(item.id)}  style={styles.btn}><Text>-</Text></Pressable>
                            </View>
                        </View>
                        </View>
                   </View>
                   </Pressable>
                    )
                  })}
                </ScrollView>        
                    <Total total={total}/>
           </View>
       </SafeAreaView>
    )
}}
export default Cart
const styles =StyleSheet.create({
    cartContainer:{
        flex:1,
        backgroundColor:'yellow'
    },
  cartWrapper:{
    width:'100%',
    flex:1,
    backgroundColor:'#e8e8ee',
    padding:10
  },
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
  },
  cartCardWrapper:{
    width:'98%',
    height: 508,
    paddingTop:10,
    marginHorizontal:'auto',
    marginBottom:10
  },
  card:{
    width:'100%',
    height:'auto',
    padding:10,
    backgroundColor:'#fff',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:10,
    marginBottom:10
  },
  cardImage:{
    flex:.5,
    height:100,
    backgroundColor:'blue',
    borderRadius:10
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:5
  },
  cardText:{
    flex:.4,
    height:100,
  },
    CardBtnWrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:50,
    alignItems:'center'
  },
  CardBtn:{
    display:'flex',
    flexDirection:'row',
  },
  btn:{
    width:20,
    height:20,
    backgroundColor:'#e8e8ee',
    borderRadius:50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
})