import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native"
import { Entypo } from '@expo/vector-icons';
import Reactions from "./Reactions";
import Comments from "./Comments";
import RealCommentInput from "./RealCommentInput";

function SinglePost() {
  const DATA =[
    {
      id:'1',
      name:'Zikyan Rasheed',
      dp: require('../../assets/dpLow.jpg'),
      postImage: require('../../assets/post1.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    }
  ]
  return (
    <FlatList showsVerticalScrollIndicator={false} style={{backgroundColor:'#171544'}} data={DATA} renderItem={(itemList)=>{
      return(
        <View style={styles.parentContainer}>
      <View style={styles.container}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
          <View style={styles.upperContainer}>
              <Image style={styles.dpStyle} source={itemList.item.dp}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.userTextStyle}>{itemList.item.name}</Text>
                <Text style={styles.belowUserTextStyle}>#snake | #mystory | 2h</Text>
              </View>
          </View>
          <View style={{justifyContent:'center'}}>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} color="#eee" style={{
                backgroundColor:'#585B64',
                padding:5,
                borderRadius:50
              }} />
            </TouchableOpacity>
          </View>
          </View>
          <View>
            <Text style={styles.captionTextStyle}>ye mere ak dost ki story he kasam se bht bara snake he or raj ke harami he</Text>
            <View style={{width:'100%', height:500, marginBottom:10}}>
              <Image style={{height: '100%', resizeMode:'contain', width:'auto', borderRadius:8}} source={itemList.item.postImage} />
            </View>
          </View>
          <Reactions />
          <Text style={styles.commentTextStyle}>Comments</Text>
          <RealCommentInput />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </View>
  </View>  
      )
    }}
    keyExtractor={(item,index)=>{
      return item.id
    }}/>
  )
}

const styles = StyleSheet.create({
  parentContainer:{
      flex:1,
      backgroundColor:'#171544',
      padding:12
  },
  container:{
    backgroundColor:'#2E3035',
    padding:10,
    borderRadius:10
  },
  dpStyle:{
    width:45,
    height:45,
    borderRadius:45/2
  },
  upperContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  userTextStyle:{
    color:'#eee',
    fontSize:16,
    fontWeight:'900'
  },
  belowUserTextStyle:{
    color:'#eee',
    opacity:0.7
  },
  captionTextStyle:{
    color:'#eee',
    fontSize:17,
    marginBottom:10
  },
  postImageStyle:{
    borderRadius:10,
  },
  commentTextStyle:{
    color:'#eee',
    fontSize:16,
    fontWeight:'900',
    opacity:0.7,
    marginTop:10,
    marginBottom:10
}
})

export default SinglePost