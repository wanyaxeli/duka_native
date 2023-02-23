import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import  {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
export const HomeStacks= ({navigation,route})=>{
    const Stack= createNativeStackNavigator()
       useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName=== "item"||routeName=== "cart" ){
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        }else {
            navigation.setOptions({tabBarStyle: {display: 'flex'}});
        }
    }, [navigation, route]);
    return(
       <Stack.Navigator screenOptions={{headerTransparent: true}}>
         <Stack.Screen name="HomePage" options={{headerShown:false}} component={Home}/>
         <Stack.Screen name="item" component={Item}/>
         <Stack.Screen name="cart" component={Cart}/>    
         <Stack.Screen name="Profile" component={Profile}/>   
       </Stack.Navigator>
    )
}