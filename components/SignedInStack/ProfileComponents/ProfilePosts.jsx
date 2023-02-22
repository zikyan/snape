import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { firebase, db } from "../../../firebase";
import { useIsFocused } from "@react-navigation/native";

function ProfilePosts() {
  const {theme} = useSelector((state)=>state.themeReducer)
  const [DATA, setDATA] = useState()
  const [email, setEmail] = useState()
  const isFocused = useIsFocused();
  const [user, setUser] = useState()
  useEffect(()=>{
    
    if(isFocused){
      const fetchData = async ()=>{
        const res = await db.collection('users').doc(firebase.auth().currentUser.uid).collection('posts').get()
        setDATA(res.docs.map(doc=> doc.data()))
        await db.collection('users').doc(firebase.auth().currentUser.uid).onSnapshot(snapshot=>{
          setUser(snapshot.data())
      })
      }
      fetchData()
    }

  },[isFocused])

  return (
    <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item, index) => {
      return index.toString();
  }} contentContainerStyle={{ paddingBottom: 70 }} style={styles.viralsBelow(theme)} data={DATA} renderItem={(itemList, index)=>{
      return(
        <View key={index} style={styles.parentContainer(theme)}>
      <View style={styles.container}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
          <View style={styles.upperContainer}>
              <Image style={styles.dpStyle} source={{uri : user?.profilePicture}}/>
              <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={styles.userTextStyle}>{user?.firstName+' '+user?.lastName}</Text>
                  <Text style={styles.postTime}>2h</Text>
                </View>
                <Text style={styles.belowUserTextStyle}>@{user?.username}</Text>
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
            <Text style={styles.captionTextStyle}>{itemList.item.title}</Text>
            <View style={{flexDirection:'row', marginBottom:10, flexWrap:'wrap'}}>
            {
                    itemList.item.tag1?(
                      <Text style={styles.tagStyle}>#{itemList.item.tag1}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag2?(
                      <Text style={styles.tagStyle}>#{itemList.item.tag2}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag3?(
                      <Text style={styles.tagStyle}>#{itemList.item.tag3}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag4?(
                      <Text style={styles.tagStyle}>#{itemList.item.tag4}</Text>
                    ):null
                  }

                  {
                    itemList.item.tag5?(
                      <Text style={styles.tagStyle}>#{itemList.item.tag5}</Text>
                    ):null
                  }
            </View>
            <View style={{width:'100%', height:500, marginBottom:10}}>
              <Image style={{height: '100%', resizeMode:'contain', width:'auto'}} source={{ uri : itemList.item.postImage}} />
            </View>
          </View>
        </View>
  </View>  
      )
    }}
    />  
  )
}
const styles = StyleSheet.create({
  parentContainer:theme=>({
    flex:1,
    backgroundColor: theme == 'dark'? '#18191A':'#171544',
    // width:'100%',
    paddingLeft:12,
    paddingRight:12,
    marginBottom:12,
    // marginTop:12,
  }),
  container:{
    backgroundColor:'#2E3035',
    padding:10,
    borderRadius:10,
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
},
postTime:{
  marginLeft:10,
  fontSize:14,
  color:'#eee',
  fontWeight:'700',
  opacity:0.5
},
tagStyle:{
  backgroundColor:'#585B64',
  padding:10,
  borderRadius:100,
  marginRight:5,
  color:'#eee',
  fontWeight:'700',
  marginTop:10
},
viralsBelow:theme=>({
  backgroundColor: theme == 'dark'? '#18191A':'#171544',
})

})
export default ProfilePosts