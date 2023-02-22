import { StatusBar, StyleSheet } from "react-native";
import SinglePost from "../otherComponents/SinglePost";
import Tabs from "../../navigation/Tabs";
import Header from "../otherComponents/Header";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import { MenuProvider } from 'react-native-popup-menu';
import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileComponents/ProfileEdit";
import SnakeScreen from "../../screens/SnakeScreen";

function SignedInStack() {
const Stack = createStackNavigator();
const {theme}=useSelector((state)=>state.themeReducer)
  return (
    <MenuProvider>
        <NavigationContainer>
        <StatusBar backgroundColor={theme=='dark' ? '#18191A':'#171544'} />
            <Header />
            <Stack.Navigator screenOptions={{
            tabBarShowLabel:false,
            header:()=>null,
            }}>
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='singlePost' component={SinglePost} />
                <Stack.Screen name='profileEdit' component={ProfileEdit} />
                <Stack.Screen name='snakeScreen' component={SnakeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </MenuProvider>
  )
}

const styles = StyleSheet.create({

})

export default SignedInStack