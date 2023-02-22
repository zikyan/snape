import { StyleSheet} from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ProfilePosts from "../components/SignedInStack/ProfileComponents/ProfilePosts"
import ProfileVideos from "../components/SignedInStack/ProfileComponents/ProfileVideos"
import ProfileComments from "../components/SignedInStack/ProfileComponents/ProfileComments"
import ProfileSaved from "../components/SignedInStack/ProfileComponents/ProfileSaved"
import ProfileVoices from "../components/SignedInStack/ProfileComponents/ProfileVoices"
import ProfilePersonal from "../components/SignedInStack/ProfileComponents/ProfilePersonal"
import { useSelector } from "react-redux"

function ProfileScreen() {
  const HorizontalSearchTabs = createMaterialTopTabNavigator()
  const {theme}=useSelector((state)=>state.themeReducer)
  return (
      <HorizontalSearchTabs.Navigator 
      screenOptions={{
        tabBarStyle:{
            backgroundColor:'none',
            shadowColor:'none',
            height:45,
            // margin:12
            marginLeft:12,
            marginRight:12,
            marginBottom:12,
        },
        tabBarLabelStyle: { 
          fontWeight:'700',
          color:'#eee',
          textTransform:'capitalize',
          fontSize:15,
        },
        tabBarItemStyle:{
          width:130,
        },
        tabBarScrollEnabled:true,
        tabBarPressColor:'none',
        tabBarIndicatorStyle:{
        height:45,
        // width:100,
        backgroundColor:'#DE3163',
        borderRadius:8,
        }
        // tabBarLabel:({focused, color, size})=>(
        //   focused ? <View style={{width:100}}><Text>Virals</Text></View> : <Text>Not</Text>
        // )
        
        
    }}
    style={styles.sliderColor(theme)}
    >
        <HorizontalSearchTabs.Screen name="Personal" component={ProfilePersonal} />
        <HorizontalSearchTabs.Screen name="Posts" component={ProfilePosts} />
        <HorizontalSearchTabs.Screen name="Videos" component={ProfileVideos} />
        <HorizontalSearchTabs.Screen name="Voices" component={ProfileVoices} />
        <HorizontalSearchTabs.Screen name="Comments" component={ProfileComments} />
        <HorizontalSearchTabs.Screen name="Saved" component={ProfileSaved} />
        
      </HorizontalSearchTabs.Navigator>
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



export default ProfileScreen