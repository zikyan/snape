import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import { Entypo } from '@expo/vector-icons';
import Reactions from "../../otherComponents/Reactions";
import Comments from "../../otherComponents/Comments";
import { useNavigation } from '@react-navigation/native';
import CommentInput from "../../otherComponents/CommentInput";
// import ReactionBox from '../../components/Reactions'
import { useSelector } from "react-redux";


function Followings() {
  const {theme}=useSelector((state)=>state.themeReducer)
  const navigation = useNavigation();
  const DATA = [
    {
      id:'1',
      name:'Zikyan Rasheed',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post1.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'2',
      name:'Usman Noor',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post3.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'3',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post4.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'4',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post5.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'5',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post6.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'6',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post7.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'7',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post8.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'8',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post9.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'9',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: null,
      tag:'#snake | #mystory | ',
      time: '2h'
    }
  ]
  return (
        <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 70 }} style={styles.viralsBelow(theme)} data={DATA} renderItem={(itemList)=>{
          return(
            <View style={styles.parentContainer(theme)}>
          <View style={styles.container(theme)}>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
              <View style={styles.upperContainer}>
                  <Image style={styles.dpStyle} source={itemList.item.dp}/>
                  <View style={{marginLeft:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={styles.userTextStyle(theme)}>{itemList.item.name}</Text>
                      <Text style={styles.postTime}>{itemList.item.time}</Text>
                    </View>
                    <Text style={styles.belowUserTextStyle(theme)}>@merabehnoi69</Text>
                    {/* <Lottie source={require('../../assets/animations/notification.json')} style={{backgroundColor:'#fff', padding:20}} /> */}
                  </View>
              </View>
              <View style={{justifyContent:'center'}}>
                <TouchableOpacity>
                  <Entypo name="dots-three-horizontal" size={24} color={'#eee'} style={{
                    backgroundColor:'#585B64',
                    padding:5,
                    borderRadius:50
                  }} />
                </TouchableOpacity>
              </View>
              </View>
              <View>
                <Text style={styles.captionTextStyle(theme)}>ye mere ak dost ki story he kasam se bht bara snake he or raj ke harami he</Text>
                <View style={{flexDirection:'row', marginBottom:10, flexWrap:'wrap'}}>
                  <Text style={styles.tagStyle(theme)}>#snake</Text>
                  <Text style={styles.tagStyle(theme)}>#gamdu</Text>
                  <Text style={styles.tagStyle(theme)}>#story</Text>
                </View>
                <View style={{width:'100%', height:500, marginBottom:10}}>
                  <Image style={{height: '100%', resizeMode:'contain', width:'auto', borderRadius:8}} source={itemList.item.postImage} />
                </View>
              </View>
              <Reactions />
              <Text style={styles.commentTextStyle}>Comments</Text>
              <Comments />
              <TouchableOpacity onPress={()=>navigation.navigate('singlePost')}>
                <CommentInput />
              </TouchableOpacity>
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
    parentContainer: theme=>({
        flex:1,
        // backgroundColor:'#171544',
        backgroundColor: theme == 'dark'? '#18191A':'#171544',
        // padding:12,
        paddingLeft:12,
        paddingRight:12,
        marginBottom:12
    }),
    container:theme=>({
      backgroundColor:'#2E3035',
      padding:10,
      borderRadius:10,
    }),
    dpStyle:{
      width:45,
      height:45,
      borderRadius:45/2
    },
    upperContainer:{
      flexDirection:'row',
      alignItems:'center',
    },
    userTextStyle:theme=>({
      color:'#eee',
      fontSize:16,
      fontWeight:'900'
    }),
    belowUserTextStyle:theme=>({
      color:'#eee',
      opacity:0.7
    }),
    captionTextStyle:theme=>({
      color:'#eee',
      fontSize:17,
    }),
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
  },
  postTime:{
    marginLeft:10,
    fontSize:14,
    color:'#eee',
    fontWeight:'700',
    opacity:0.5
  },
  tagStyle:theme=>({
    backgroundColor:'#585B64',
    padding:10,
    borderRadius:100,
    marginRight:5,
    color:'#eee',
    fontWeight:'700',
    marginTop:10
  }),
  viralsBelow:theme=>({
    backgroundColor: theme == 'dark'? '#18191A':'#171544',
  })
})

export default Followings