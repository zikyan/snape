import { View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import * as Haptics from 'expo-haptics';

function RealCommentInput() {
  return (
    <View style={styles.commentInputContainer}>
        <View style={styles.commentContainer1}>
            <Image style={styles.dpStyle} source={require('../../assets/dpLow.jpg')}/>
            <TextInput placeholder="Type Your Comment Here" multiline={true} style={styles.commentInput} />
        </View>
        <View style={styles.commentContainer2}>

            <TouchableOpacity onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }>
                <Image style={styles.commentIconStyle} source={require('../../assets/microphone.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) }>
                <Image style={styles.commentIconStyleClip} source={require('../../assets/clip.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }>
                <Image style={styles.commentIconStyle} source={require('../../assets/interface.png')} />
            </TouchableOpacity>
        </View>
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
        fontWeight:'500',
        width:'85%',
        marginLeft:10,
        flexDirection:'row',
        marginBottom:10,
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
    commentContainer1:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    commentContainer2:{
        justifyContent:'flex-end',
        flexDirection:'row',
        marginBottom:10
    },
    commentIconStyle:{
        width:25,
        height:25,
        tintColor:'#eee'
    },
    commentIconStyleClip:{
        width:25,
        height:25,
        tintColor:'#eee',
        marginLeft:15,
        marginRight:15
    }
})

export default RealCommentInput