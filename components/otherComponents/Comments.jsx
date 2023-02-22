import { View, Text, StyleSheet, Image, TextInput } from "react-native"
import { TouchableOpacity } from "react-native"

function Comments() {
  return (
    <View>
        <View style={styles.commentContainer}>
            <Image style={styles.dpStyle} source={require('../../assets/usman.png')}/>
            <View style={styles.commentRightContainer}>
                <Text style={styles.commentUsername}>Usman Noor</Text>
                <Text style={styles.commentText}>bht bara snake paya gya he tu bhai</Text>
                {/* <Text style={styles.commentText}>bht bara snake paya gya he tu bhai bht bara snake paya gya he tu bhaibht bara snake paya gya he tu bhai bht bara snake paya gya he tu bhai bht bara snake paya gya he tu bhai bht bara snake paya gya he tu bhai</Text> */}
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    dpStyle:{
        width:40,
        height:40,
        borderRadius:45/2,
        borderWidth:2,
        borderColor:'#AFEE96'
    },
    commentContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginBottom:10
    },
    commentRightContainer:{
        backgroundColor:'#585B64',
        padding:8,
        maxWidth:'85%',
        borderRadius:8,
        marginLeft:10,
        // marginRight:39
    },
    commentUsername:{
        color:'#eee',
        fontSize:16,
        fontWeight:'900',
    },
    commentText:{
        color:'#eee',
        fontSize:15,
        fontWeight:'400'
    },
})

export default Comments