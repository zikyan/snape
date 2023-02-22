import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useSelector } from "react-redux"
import SnakeDay from "../components/SnakeComponents/SnakeDay"
import SnakeWeek from "../components/SnakeComponents/SnakeWeek"

function SnakeScreen() {
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
              borderRadius:100,
          },
          tabBarLabelStyle: { 
            fontWeight:'700',
            color:'#eee',
            textTransform:'capitalize',
            fontSize:15,
          },
          tabBarItemStyle:{
            
          },
          tabBarPressColor:'none',
          tabBarIndicatorStyle:{
            height:45,
            backgroundColor:'#32BE7C',
            borderRadius:100,
          },
          // tabBarLabel:({focused, color, size})=>(
          //   focused ? <View style={{width:100}}><Text>Virals</Text></View> : <Text>Not</Text>
          // )
          
          
      }}
      style={styles.sliderColor(theme)}
      >
          <HorizontalSearchTabs.Screen name="Snake of Week" component={SnakeWeek} />
          <HorizontalSearchTabs.Screen name="Snake of Day" component={SnakeDay} />

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

export default SnakeScreen