import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux";


function NotificationScreen() {
  const {theme}=useSelector((state)=>state.themeReducer)
  return (
    <View style={styles.container(theme)}>
        <Text style={{color:'#eee'}}>Notification Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: theme =>({
      flex:1,
      backgroundColor: theme == 'dark'? '#18191A':'#171544',
      padding:12
  })
})

export default NotificationScreen