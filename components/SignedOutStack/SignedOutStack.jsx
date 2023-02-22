import { View, Text, StyleSheet, StatusBar } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./Signup";
import Login from "./Login";
import { useSelector } from "react-redux";

function SignedOutStack() {
  const Stack = createStackNavigator();
  const {theme}=useSelector((state)=>state.themeReducer)
  return (
    <NavigationContainer>
        <StatusBar backgroundColor={theme=='dark' ? '#18191A':'#171544'} />
            <Stack.Navigator screenOptions={{
            tabBarShowLabel:false,
            header:()=>null,
            }}>
                <Stack.Screen name='signup' component={Signup} />
                <Stack.Screen name='login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

const styles=StyleSheet.create({
    parentContainer:{
        flex:1,
        padding:12
    }
})

export default SignedOutStack