import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import Reactions from "../../otherComponents/Reactions";
import Comments from "../../otherComponents/Comments";
import { useNavigation } from '@react-navigation/native';
import CommentInput from "../../otherComponents/CommentInput";
// import ReactionBox from '../../components/Reactions'
import { useSelector } from "react-redux";
import {firebase, db } from "../../../firebase";
import { useIsFocused } from "@react-navigation/native";
import Username from "./Username";


function Virals() {
  const {theme}=useSelector((state)=>state.themeReducer)
  const navigation = useNavigation();
  const [DATA, setDATA] = useState();
  const isFocused = useIsFocused();
  const [user, setUser] = useState([]);

  useEffect(()=>{
    if(isFocused){
      db.collectionGroup('posts').onSnapshot(snapshot => {
        setDATA(snapshot.docs.map(post=>({id: post.id, ...post.data()})));
        // setUser(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      })

      db.collection('users').doc(firebase.auth().currentUser.uid).onSnapshot(snapshot=>{
        setUser(snapshot.data())
      })
      //   let arr = DATA?.map((data)=>{
      //       db.collection('users').doc(data.ownerUid).onSnapshot(snapshot=>{
      //         snapshot.data().firstName
      //       })
      // }
      // )
    }
  },[isFocused])

  // DATA?.map((data)=>{
  //   let res = data?.ownerUid
    
  // }) 
  // DATA.map((res)=>{
  //   console.log(res.ownerUid)
  // })
  // console.log(res)

  const data1 = [
    {
      firstName:'Zikyan Rasheed',
      username:'meraBehnoi69'
    },
    {
      firstName:'Usman Noor',
      username:'usmanPith'
    }
  ]
  // let res = data1.map((data)=>{
  //   data
  // })
  // console.log(res)
  return (
        <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => {
          return index.toString();
      }} contentContainerStyle={{ paddingBottom: 70 }} style={styles.viralsBelow(theme)} data={DATA} renderItem={(itemList, index)=>{
          return(
            <View key={index} style={styles.parentContainer(theme)}>
          <View style={styles.container(theme)}>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
              <View style={styles.upperContainer}>
                  <Image style={styles.dpStyle} source={{uri : user?.profilePicture}}/>
                  <View style={{marginLeft:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={styles.userTextStyle(theme)}>{user?.firstName+' '+user?.lastName}</Text>
                      {/* <Text style={styles.userTextStyle(theme)}>Zikyan Rasheed</Text> */}
                      <Text style={styles.postTime}>2h</Text>
                    </View>
                    <Text style={styles.belowUserTextStyle(theme)}>@{user?.username}</Text>
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
                <Text style={styles.captionTextStyle(theme)}>{itemList.item.title}</Text>
                <View style={{flexDirection:'row', marginBottom:10, flexWrap:'wrap'}}>
                  {
                    itemList.item.tag1?(
                      <Text style={styles.tagStyle(theme)}>#{itemList.item.tag1}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag2?(
                      <Text style={styles.tagStyle(theme)}>#{itemList.item.tag2}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag3?(
                      <Text style={styles.tagStyle(theme)}>#{itemList.item.tag3}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag4?(
                      <Text style={styles.tagStyle(theme)}>#{itemList.item.tag4}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag5?(
                      <Text style={styles.tagStyle(theme)}>#{itemList.item.tag5}</Text>
                    ):null
                  }
                  
                </View>
                {/* <View style={{width:'100%', height:'100%', marginBottom:10}}> */}
                  <Image style={{height: 500, resizeMode:'contain', width:'100%', marginBottom:10}} source={{uri: itemList.item.postImage}} />
                {/* </View> */}
              </View>
              <Reactions post={itemList.item} />
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.commentTextStyle}>Comments  </Text>
                <Text style={{color:'#eee', fontSize:14, fontWeight:'800', opacity:0.7}}>25</Text>
              </View>
              <Comments />
              <TouchableOpacity onPress={()=>navigation.navigate('singlePost')}>
                <CommentInput />
              </TouchableOpacity>
            </View>
      </View>  
          )
        }}
        />     
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

export default Virals