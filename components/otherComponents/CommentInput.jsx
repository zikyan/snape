import { View, Text ,StyleSheet, Image, TouchableOpacity } from "react-native"

function CommentInput() {
  return (
    <View style={styles.commentInputContainer}>
            <Image style={styles.dpStyle} source={require('../../assets/dpLow.jpg')}/>
            <Text style={styles.commentInput}>Tap Here To Comment</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    commentInput:{
        backgroundColor:'#585B64',
        padding:10,
        borderRadius:8,
        color:'#eee',
        fontSize:15,
        opacity:0.8,
        fontWeight:'500',
        width:'85%',
        marginLeft:10,
        flexDirection:'row'
    },
    commentInputText:{
        color:'#eee',
        fontSize:15,
        opacity:0.8,
        fontWeight:'500',
    },
    dpStyle:{
        width:40,
        height:40,
        borderRadius:45/2,
        borderWidth:2,
        borderColor:'#6495ED'
    },
    commentInputContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default CommentInput