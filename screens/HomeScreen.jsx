import { StyleSheet} from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Virals from "../components/SignedInStack/HomeScreenComponents/Virals"
import Snakes from "../components/SignedInStack/HomeScreenComponents/Snakes"
import Stories from "../components/SignedInStack/HomeScreenComponents/Stories"
import Voices from "../components/SignedInStack/HomeScreenComponents/Voices"
import Followings from "../components/SignedInStack/HomeScreenComponents/Followings"
import { useSelector } from "react-redux"

function HomeScreen() {
  const HorizontalHomeTabs = createMaterialTopTabNavigator()
  const {theme}=useSelector((state)=>state.themeReducer)
  return (
      <HorizontalHomeTabs.Navigator 
      screenOptions={{
        tabBarStyle:{
            backgroundColor:'none',
            shadowColor:'none',
            height:45,
            // margin:12
            marginLeft:12,
            marginRight:12,
            marginBottom:12
        },
        tabBarLabelStyle: { 
          fontWeight:'700',
          color:'#eee',
          textTransform:'capitalize',
          fontSize:15
        },
        tabBarItemStyle:{
          width:100,
        },
        tabBarScrollEnabled:true,
        tabBarPressColor:'none',
        tabBarIndicatorStyle:{
          height:45,
          // width:100,
          backgroundColor:'#32BE7C',
          borderRadius:8,
        },
        // tabBarLabel:({focused, color, size})=>(
        //   focused ? <View style={{width:100}}><Text>Virals</Text></View> : <Text>Not</Text>
        // )
        
        
    }}
    style={styles.sliderColor(theme)}
    >
        <HorizontalHomeTabs.Screen name="virals" component={Virals} />
        <HorizontalHomeTabs.Screen name="snakes" component={Snakes} />
        <HorizontalHomeTabs.Screen name="stories" component={Stories} />
        <HorizontalHomeTabs.Screen name="voices" component={Voices} />
        <HorizontalHomeTabs.Screen name="follows" component={Followings} />
        
      </HorizontalHomeTabs.Navigator>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1
  },
  sliderColor:theme=>({
    backgroundColor: theme == 'dark'? '#18191A':'#171544',
  })
})



export default HomeScreen