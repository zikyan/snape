import { View, Text, StyleSheet } from "react-native"

function Username({data1}) {
    
  return (
    <View>
        <Text style={styles.userTextStyle}>Username</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    userTextStyle:{
        color:'#eee',
        fontSize:16,
        fontWeight:'900'
      },
})

export default Username