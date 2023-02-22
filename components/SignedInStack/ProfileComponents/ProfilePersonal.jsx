import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../../redux/actions";
import { firebase, db } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";


function ProfilePersonal() {
    const {theme}=useSelector((state)=>state.themeReducer)
    const dispatch = useDispatch()
    const [follow, setFollow] = useState(false)
    const [checkSnapScore, setCheckSnapScore] = useState(false)
    const [checkTheme, setCheckTheme] = useState()
    const [user, setUser] = useState()
    const navigation = useNavigation()

    useEffect(()=>{
      
      db.collection('users').doc(firebase.auth().currentUser.uid).onSnapshot(snapshot=>{
        setUser(snapshot.data())
      })
      
    },[])

    const handleOnFollow = ()=>{
        setFollow(!follow)
    }
    const handleSnapScore = ()=>{
      setCheckSnapScore(!checkSnapScore)
    }

    const handleTheme = ()=>{
      setCheckTheme(!checkTheme)   
  }

  const changeTheme = ()=>{
    if(theme == 'light'){
      dispatch(setTheme('dark'))
    } else{
      dispatch(setTheme('light'))
    }
  }

  const handleEditProfile = ()=>{
    navigation.navigate('profileEdit')
  }

  return (
    <View style={styles.containerZik(theme)}>
      <View style={styles.parentContainer(theme)}>
        <ImageBackground style={styles.imageBackgroundStyle} borderRadius={8} source={require('../../../assets/cover.jpg')}>
          <View style={styles.container}>
            <Image style={styles.profileImageStyle} source={{uri : user?.profilePicture}} />
                <View style={styles.profileNamecontainer}>
                    <Text style={styles.profilename}>{user?.firstName+' '+user?.lastName}</Text>
                    <Text style={styles.profileUsername}>@{user?.username}</Text>
                    {/* <TouchableOpacity style={styles.followButtonStyle} onPress={handleOnFollow}>
                        <Text style={styles.followTextStyle}>{follow  ? 'Unfollow':'Follow'}</Text>
                    </TouchableOpacity> */}
            </View>
          </View>
          </ImageBackground>
          
          <View  style={styles.scoreContainer}>

            <View style={styles.scoreInnerContainer}>
              <Text style={styles.profileDetailsText}>22</Text>
              <Text style={{fontWeight:'600', color:'#eee', opacity:0.7}}>Posts</Text>
            </View>

            <View style={{width:1,backgroundColor:'#eee', height:25 }}></View>

            <View style={styles.scoreInnerContainer}>
              <Text style={styles.profileDetailsText}>25</Text>
              <Text style={{fontWeight:'600', color:'#eee', opacity:0.7}}>Followers</Text>
            </View>

            <View style={{width:1,backgroundColor:'#eee', height:25}}></View>

            <View style={styles.scoreInnerContainer}>
              <Text style={styles.profileDetailsText}>9</Text>
              <Text style={{fontWeight:'600', color:'#eee', opacity:0.7}}>Following</Text>
            </View>

            <View style={{width:1,backgroundColor:'#eee', height:25}}></View>

            <View style={styles.scoreInnerContainer}>
              <Text style={styles.profileDetailsText}>80</Text>
              <Text style={{fontWeight:'600', color:'#eee', opacity:0.7}}>Likes</Text>
            </View>

          </View>

          <View style={{alignItems:'center'}}>
            <View style={{width:'90%',backgroundColor:'#eee', height:1, marginTop:10, marginBottom:20}}></View>
          </View>

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.profileButton1} onPress={handleEditProfile}>
            <Image style={{width:18, height:18, tintColor:'#eee', marginRight:5}} source={require('../../../assets/edit.png')} />
            <Text style={{color:'#eee', fontWeight:'700'}}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton2} onPress={handleSnapScore}>
            <Image style={[{width:18, height:18, marginRight:5}, checkSnapScore? {tintColor:'#eee'}:{tintColor:'#2E3035'}]} source={require('../../../assets/snakeScore.png')} />
            <Text style={{color:'#eee', fontWeight:'700'}}>Score: 120</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.profileButton3(theme)]} onPress={()=>changeTheme()}>
            <MaterialCommunityIcons name="theme-light-dark" size={18} style={styles.darkLight(theme)} />
            <Text style={{fontWeight:'700', color:'#eee'}}>{theme === 'dark'? 'Purple':'Black'}</Text>
          </TouchableOpacity>
          
       </View>

      </View>

    </View>
    
  )
}
const styles = StyleSheet.create({
  containerZik: theme =>({
    flex:1,
    backgroundColor: theme == 'dark'? '#18191A':'#171544',
  }),
  parentContainer: theme =>({
      flex:1,
      backgroundColor: theme == 'dark'? '#18191A':'#171544',
      // padding:12,
      // margin:12,
      paddingLeft:12,
      paddingRight:12,
      borderRadius:8,
      // marginTop:12
      // justifyContent:'center',
  }),
  profileImageStyle:{
    width:110,
    height:110,
    resizeMode:'contain',
    borderRadius:110/2,
    borderWidth:3,
    borderColor:'#6495ED'
  },
  container:{
    flexDirection:'row',
    // alignItems:'center',
    marginTop:110,
    marginLeft:20,
  },
  profilename:{
    color:'#eee',
    fontSize:20,
    fontWeight:'900',
    marginTop:5,
  },
  profileUsername:{
    color:'#eee',
    opacity:0.7,
    fontSize:14,
    fontWeight:'600'
  },
  scoreContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    // backgroundColor:'#6495ED',
    // padding:10,
    // borderRadius:10,
    marginTop:80,
    // borderBottomWidth:1,
    // borderBottomColor:'#fff',
  },
  scoreInnerContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // borderRightWidth:1,
    // borderRightColor: '#fff',
    // marginBottom:10,
  },
  profileDetailsText:{
    color:'#eee',
    fontSize:16,
    fontWeight:'700',
  },
  imageBackgroundStyle:{
    width:'auto',
    // resizeMode:'conver',
    height:160,
    borderRadius:10,
    // opacity:0.5,
  },
  followButtonStyle:{
    marginTop:10,
    marginBottom:15,
    backgroundColor:'#585B64',
    borderRadius:5,
    // width:80,
    alignItems:'center'
  },
  followTextStyle:{
    color:'#eee',
    padding:10,
    fontWeight:'700'
  },
  profileNamecontainer:{
    marginLeft:10,
    marginTop:50
  },
  profileButton1:{
    flexDirection:'row',
    backgroundColor:'#6495ED',
    padding:8,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    width:120
  },
  profileButton2:{
    flexDirection:'row',
    backgroundColor:'#32BE7C',
    padding:8,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    width:120
  },
  profileButton3: theme=> ({
    flexDirection:'row',
    backgroundColor: theme=='dark'? '#5B589F':'#2E3035',
    padding:8,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    width:120
  }),
  darkLight: theme=>({
    marginRight:5,
    color: '#eee'
  })
})

export default ProfilePersonal