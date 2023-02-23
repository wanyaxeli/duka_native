import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../pages/Home"
import Icon from'react-native-vector-icons/FontAwesome'
import Profile from "../pages/Profile"
import { HomeStacks } from "./Stacks"
export const HomeDrawer=()=>{
    const drawer= createDrawerNavigator()
 return(
     <drawer.Navigator screenOptions={{drawerStyle:{
        backgroundColor:'blue'
     },drawerActiveBackgroundColor:'red',drawerInactiveBackgroundColor:'yellow',drawerActiveTintColor:'white'}}>
        <drawer.Screen name="Home"options={{
            drawerIcon:({color,size})=>{
               return(
                <Icon name="home" color={color} size={size}/>
               )
            }
        }} component={HomeStacks}/>
        <drawer.Screen options={{
            drawerIcon:({color,size})=>{
               return(
                <Icon name="user" color={color} size={size}/>
               )
            }
        }} name="Profile" component={Profile}/>
     </drawer.Navigator>
 )
}