import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Products from "../pages/Products";
import { HomeDrawer } from "./Drawer";
import { HomeStacks } from "./Stacks";
const  Links=()=>{
    const Tabs= createBottomTabNavigator()
    return(
        <Tabs.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'blue'}}>
          <Tabs.Screen options={{tabBarLabel:'Home',tabBarIcon:({size,color})=>{
            return(
                <Icon name="home" size={size} color={color}/>
            )
          }}} name="Home" component={HomeDrawer}/>
          <Tabs.Screen  name="Produts" options={{tabBarIcon:({size,color})=>{
            return(
                <Icon name="list-alt" size={size} color={color}/>
            )
          }}} component={Products}/>
          <Tabs.Screen name="Likes" options={{tabBarIcon:({size,color})=>{
            return(
                <Icon name='heart' size={size} color={color}/>
            )
          }}}  component={Likes}/>
        </Tabs.Navigator>
    )
}
export default Links