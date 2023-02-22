import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import AddPost from "../components/SignedInStack/AddScreenComponents/AddPost"

function AddScreen() {
  const {theme} = useSelector((state)=>state.themeReducer)
  return (
    <View style={styles.container(theme)}>
        <AddPost />
    </View>
  )
}
const styles = StyleSheet.create({
  container:theme=>({
      flex:1,
      backgroundColor: theme == 'dark'? '#18191A':'#171544',
      // padding:12
  })
})

export default AddScreen