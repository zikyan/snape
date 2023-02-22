import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import SearchPost from "../components/SignedInStack/SearchBarComponents/SearchPost"
import SearchPeople from "../components/SignedInStack/SearchBarComponents/SearchPeople"
import { useSelector } from "react-redux"

function SearchScreen() {
  const {theme} = useSelector((state)=>state.themeReducer)
  const HorizontalSearchTabs = createMaterialTopTabNavigator()
  return (
    <View style={styles.container}>
      <HorizontalSearchTabs.Navigator 
        screenOptions={{
          tabBarStyle:{
              backgroundColor: theme=='dark'? '#2E3035':'#3A3866',
              shadowColor:'none',
              height:45,
              marginLeft:12,
              marginRight:12,
              marginBottom:12,
              borderRadius:5,
          },
          tabBarLabelStyle: { 
            fontWeight:'700',
            color:'#eee',
            textTransform:'capitalize',
            fontSize:15
          },
          tabBarItemStyle:{
            
          },
          tabBarPressColor:'none',
          tabBarIndicatorStyle:{
            height:45,
            backgroundColor:'#32BE7C',
            borderRadius:5
          },
          // tabBarLabel:({focused, color, size})=>(
          //   focused ? <View style={{width:100}}><Text>Virals</Text></View> : <Text>Not</Text>
          // )
          
          
      }}
      style={styles.sliderColor(theme)}
      >
          <HorizontalSearchTabs.Screen name="Search Post" component={SearchPost} />
          <HorizontalSearchTabs.Screen name="Search People" component={SearchPeople} />

        </HorizontalSearchTabs.Navigator>
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      // backgroundColor:'#171544',
      width:'100%', 
  },
  sliderColor:theme=>({
    backgroundColor: theme == 'dark'? '#18191A':'#171544',
  })
})

export default SearchScreen