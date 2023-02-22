import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import AddScreen from '../screens/AddScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ProfileScreen from '../screens/ProfileScreen'
import {NavigationContainer} from "@react-navigation/native"
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Image } from 'react-native'
import { useSelector } from 'react-redux'




function Tabs() {
    const Tab = createBottomTabNavigator()
    const {theme} = useSelector((state)=>state.themeReducer)
    const CustomTapbarButton=({children, onPress})=>(
        <TouchableOpacity onPress={onPress} style={{
            top:-30,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <View style={{
                width:55,
                height:56,
                borderRadius:35,
                backgroundColor:'#DE3163',
            }}>
                {children}
            </View>
        </TouchableOpacity>
    )
  return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            header:()=>null,
            tabBarStyle:{
                position:'absolute',
                backgroundColor: '#eee',
                borderRadius:8,
                elevation:0,
                height:55,
                justifyContent:'space-evenly',
                alignItems:'center',
                margin:12,
                borderTopWidth:0
            }
        }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon:({focused, color, size})=>(
                    focused ? <Image source={require('../assets/home.png')} style={{width:25, height:25, tintColor:'#32BE7C'}} /> : <Image source={require('../assets/homeOutlined.png')} style={{width:25, height:25}} />
                )
            }} />
            <Tab.Screen  name='Search' component={SearchScreen} options={{
                tabBarIcon:({focused})=>(
                    focused ? <Image source={require('../assets/search.png')} style={{width:25, height:25, tintColor:'#32BE7C'}} /> : <Image source={require('../assets/searchOutlined.png')} style={{width:25, height:25}} />
                )
            }} />
            <Tab.Screen  name='Add' component={AddScreen} options={{
                tabBarIcon:({focused})=>(
                    <Image source={require('../assets/plus.png')} resizeMode='contain' style={{width:30, height:30, tintColor:'#eee'}}/>
                ),
                tabBarButton:(props)=>(
                    <CustomTapbarButton {...props}/>
                )
            }} />
            <Tab.Screen name='Notification' component={NotificationScreen} options={{
                tabBarIcon:({focused})=>(
                    focused ? <Image source={require('../assets/bell.png')} style={{width:25, height:25, tintColor:'#32BE7C'}} /> : <Image source={require('../assets/bellOutlined.png')} style={{width:25, height:25}} />
                    // <Lottie
                        
                    //     source={require('../assets/animations/notification.json')}
                    //     autoPlay loop
                    // />
                    // <Lottie source={require('../assets/animations/notification.json')} style={{width:200,height:200}} />
                )

                // tabBarIcon:({focused})=>(
                //     focused? 
                //     <Lottie source={require('../assets/animations/notEdit.json')} autoPlay={true} loop={true} />
                //     :
                //     <Lottie source={require('../assets/animations/notification.json')}/>
                // )
                
            }} />
            <Tab.Screen  name='Profile' component={ProfileScreen} options={{
                tabBarIcon:({focused})=>(
                    focused ? <Image source={require('../assets/user.png')} style={{width:25, height:25, tintColor:'#32BE7C'}} /> : <Image source={require('../assets/userOutlined.png')} style={{width:25, height:25}} />
                )
            }} />
            
            
        </Tab.Navigator>
        
  )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    lottieBell:{
        width:100,
        height:100
    }
})

export default Tabs