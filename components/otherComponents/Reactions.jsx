import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native"
import { Feather } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useState, useEffect } from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {firebase, db } from "../../firebase";
import { increment } from "firebase/firestore";

function Reactions({post}) {
  // const [votes, setVotes] = useState(128)
  const [checkSaved, setCheckSaved] = useState(false)
  // const [checkPerfect, setCheckPerfect] = useState(false)
  // const [checkMiddle, setCheckMiddle] = useState(false)
  // const [checkEggPlant, setCheckEggPlant] = useState(true)
  // const [checkPeach, setCheckPeach] = useState(false)
  // const [checkHand, setCheckHand] = useState(false)
  // const [checkDevil, setCheckDevil] = useState(false)
  // const [checkHaha, setCheckHaha] = useState(false)
  const [checkUp, setCheckUp] = useState()
  const [checkDown, setCheckDown] = useState()

  const [checkR1, setCheckR1] = useState()
  const [checkR2, setCheckR2] = useState()
  const [checkR3, setCheckR3] = useState()
  const [checkR4, setCheckR4] = useState()
  const [checkR5, setCheckR5] = useState()
  const [checkSave, setCheckSave] = useState()
  // const [user, setUser] = useState()
  const [render, setRender] = useState(false)

  // db.collection('users').doc(firebase.auth().currentUser.uid).onSnapshot(snapshot=>{
  //   setZik(snapshot.data())
  // })

  // db.collection('users').doc(firebase.auth().currentUser.uid).onSnapshot(snapshot=>{
  //   setUser(snapshot.data())
  // })

  useEffect(()=>{
    const checkUpVote = post?.Liked?.includes(
      firebase.auth().currentUser.uid
    )
    if(checkUpVote){
      setCheckUp(true)
    }else{
      setCheckUp(false)
    }

    const checkDownVote = post?.DisLiked?.includes(
      firebase.auth().currentUser.uid
    )
    if(checkDownVote){
      setCheckDown(true)
    }else{
      setCheckDown(false)
    }

    const checkR1 = post?.r1?.includes(
      firebase.auth().currentUser.uid
    )

    if(checkR1){
      setCheckR1(true)
    }else{
      setCheckR1(false)
    }

    const checkR2 = post?.r2?.includes(
      firebase.auth().currentUser.uid
    )

    if(checkR2){
      setCheckR2(true)
    }else{
      setCheckR2(false)
    }

    const checkR3 = post?.r3?.includes(
      firebase.auth().currentUser.uid
    )

    if(checkR3){
      setCheckR3(true)
    }else{
      setCheckR3(false)
    }

    const checkR4 = post?.r4?.includes(
      firebase.auth().currentUser.uid
    )

    if(checkR4){
      setCheckR4(true)
    }else{
      setCheckR4(false)
    }

    const checkR5 = post?.r5?.includes(
      firebase.auth().currentUser.uid
    )

    if(checkR5){
      setCheckR5(true)
    }else{
      setCheckR5(false)
    }

    // const checkSavedStatus = user?.saved.includes(
    //   post?.id
    // )

    // if(checkSavedStatus){
    //   setCheckSave(true)
    // }else{
    //   setCheckSave(false)
    // }


  },[post?.upVotes, post?.downVotes, post?.r1, post?.r2, post?.r3, post?.r4, post?.r5])


const handleLike = () => {

  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

  const currentLikeStatus = post?.Liked?.includes(
    firebase.auth().currentUser.uid
  )    

  const currentDisLikeStatus = post?.DisLiked?.includes(
    firebase.auth().currentUser.uid
  )    

  if(currentDisLikeStatus){
    db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
      .update({
        DisLiked:
          firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.uid
          ),
        Liked: 
        firebase.firestore.FieldValue.arrayUnion(
          firebase.auth().currentUser.uid
        ),
        upVotes: increment(1),
        downVotes: increment(-1)
      }).then(()=>{
        console.log('Liked')
      }).catch(error=>{
        console.log('Error while liking post', error)
      })
  }else{
    db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
    .update({
      Liked: currentLikeStatus?
      (
        firebase.firestore.FieldValue.arrayRemove(
          firebase.auth().currentUser.uid
        )
      )
      :
      firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.uid
      ),
      upVotes: currentLikeStatus?
      increment(-1)
      :
      increment(1)
    }).then(()=>{
      console.log('Liked')
    }).catch(error=>{
      console.log('Error while liking post', error)
    })
  }
      
}

  const handleDislike = () => {

  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

  const currentDisLikeStatus = post?.DisLiked?.includes(
    firebase.auth().currentUser.uid
  )    

  const currentLikeStatus = post?.Liked?.includes(
    firebase.auth().currentUser.uid
  )    

  if(currentLikeStatus){
    db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
      .update({
        Liked: 
          firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.uid
          ),
        DisLiked: 
        firebase.firestore.FieldValue.arrayUnion(
          firebase.auth().currentUser.uid
        ),
        upVotes: increment(-1),
        downVotes: increment(1)
      }).then(()=>{
        console.log('DisLiked')
      }).catch(error=>{
        console.log('Error while liking post', error)
      })
  }else{
    db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
    .update({
      DisLiked: currentDisLikeStatus?
      (
        firebase.firestore.FieldValue.arrayRemove(
          firebase.auth().currentUser.uid
        )
      )
      :
      firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.uid
      ),
      downVotes: currentDisLikeStatus?
      increment(-1)
      :
      increment(1)
    }).then(()=>{
      console.log('DisLiked')
    }).catch(error=>{
      console.log('Error while liking post', error)
    })
  }
      
}

  // const handleOnPressUp = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setVotes(votes+1)
  //   setCheckVote(true)
  //   setCheckPerfect(!checkPerfect)
  //   setCheckMiddle(false)
  // }
  // const handleOnPressDown = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setVotes(votes-1)
  //   setCheckVote(false)
  //   setCheckMiddle(!checkMiddle)
  //   setCheckPerfect(false)
  // }

  const handleOnPressSaved = ()=>{
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    setCheckSaved(!checkSaved)
  }
  // const handleEggPlant = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setCheckEggPlant(true)
  //   setCheckPeach(false)
  //   setCheckHand(false)
  //   setCheckDevil(false)
  //   setCheckHaha(false)
  // }

  // const handlePeach = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setCheckPeach(true)
  //   setCheckEggPlant(false)
  //   setCheckHand(false)
  //   setCheckDevil(false)
  //   setCheckHaha(false)
  // }

  // const handleHand = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setCheckHand(true)
  //   setCheckPeach(false)
  //   setCheckEggPlant(false)
  //   setCheckDevil(false)
  //   setCheckHaha(false)
  // }

  // const handleDevil = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setCheckDevil(true)
  //   setCheckHand(false)
  //   setCheckPeach(false)
  //   setCheckEggPlant(false)
  //   setCheckHaha(false)
  // }

  // const handleHaha = ()=>{
  //   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  //   setCheckHaha(true)
  //   setCheckHand(false)
  //   setCheckPeach(false)
  //   setCheckEggPlant(false)
  //   setCheckDevil(false)
  // }

  const r1 = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

  const r1Status = post?.r1?.includes(
    firebase.auth().currentUser.uid
  )
    db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
    .update({
      r1: r1Status?
      (
        firebase.firestore.FieldValue.arrayRemove(
          firebase.auth().currentUser.uid
        )
      )
      :
      (
        firebase.firestore.FieldValue.arrayUnion(
          firebase.auth().currentUser.uid
        )
      ),
      r2:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      ),
      r3:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      ),
      r4:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      ),
      r5:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      )
  }).then(()=>{
    console.log('Reacted r1')
  }).catch(error=>{
    console.log('Error while reacting the post', error)
  })
}

const r2 = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

const r2Status = post?.r2?.includes(
  firebase.auth().currentUser.uid
)
  db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
  .update({
    r1:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
    ),
    r2: r2Status?
    (
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      )
    )
    :
    (
      firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.uid
      )
    ),
    r3:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r4:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r5:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    )
}).then(()=>{
  console.log('Reacted r2')
}).catch(error=>{
  console.log('Error while reacting the post', error)
})
}

const r3 = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

const r3Status = post?.r3?.includes(
  firebase.auth().currentUser.uid
)
  db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
  .update({
    r1:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
    ),
    r2:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r3: r3Status?
    (
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      )
    )
    :
    (
      firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.uid
      )
    ),
    r4:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r5:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    )
}).then(()=>{
  console.log('Reacted r3')
}).catch(error=>{
  console.log('Error while reacting the post', error)
})
}

const r4 = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

const r4Status = post?.r4?.includes(
  firebase.auth().currentUser.uid
)
  db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
  .update({
    r1:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
    ),
    r2:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r3:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r4: r4Status?
    (
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      )
    )
    :
    (
      firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.uid
      )
    ),
    r5:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    )
}).then(()=>{
  console.log('Reacted r4')
}).catch(error=>{
  console.log('Error while reacting the post', error)
})
}

const r5 = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

const r5Status = post?.r5?.includes(
  firebase.auth().currentUser.uid
)
  db.collection('users').doc(post?.ownerUid).collection('posts').doc(post?.id)
  .update({
    r1:
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
    ),
    r2:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r3:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r4:
    firebase.firestore.FieldValue.arrayRemove(
      firebase.auth().currentUser.uid
    ),
    r5: r5Status?
    (
      firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.uid
      )
    )
    :
    (
      firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.uid
      )
    ),
}).then(()=>{
  console.log('Reacted r5')
}).catch(error=>{
  console.log('Error while reacting the post', error)
})
}

  const handleSave = () => {
    
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    const saveStatus = user?.saved.includes(
      post?.id
    )
    db.collection('users').doc(firebase.auth().currentUser.uid)
    .update({
     saved: saveStatus?
     (
      firebase.firestore.FieldValue.arrayRemove(
        post?.id
      )
     ):
     (
      firebase.firestore.FieldValue.arrayUnion(
        post?.id
      )
     )
    })

  }

  return (
    
  <View>
    <Menu style={styles.parentContainer}>
      <MenuTrigger>
        {
        
        checkR1 === false
        && checkR2 === false
        && checkR3 === false
        && checkR4 === false
        && checkR5 === false
        
        ? 

        <Text style={{color:'#eee', fontWeight:'700', fontSize:15}}>Tap</Text>
        
        :

        (
          checkR3 && <Image style={{width:30, height:30}} source={require('../../assets/eggplant.png')}/>
          ||
          checkR1 && <Image style={{width:30, height:30}} source={require('../../assets/peach.png')}/>
          ||
          checkR5 && <Image style={{width:30, height:30}} source={require('../../assets/hand.png')}/>
          ||
          checkR4 && <Image style={{width:30, height:30}} source={require('../../assets/devil.png')}/>
          ||
          checkR2 && <Image style={{width:30, height:30}} source={require('../../assets/gandu.png')}/>
        )
    
        }
      </MenuTrigger>
      
      <MenuOptions customStyles={{optionsContainer:{borderRadius:8}}} style={{backgroundColor:'#585B64', borderRadius:8, width:240}}>

          <MenuOption style={{borderRadius:8}} onSelect={r1}>
            <View style={styles.reactionInnerContainer}>
              <Text style={styles.reactionInnerText}>Baaz a phumdi ke</Text>
              <Image style={{width:30, height:30}} source={require('../../assets/peach.png')} />
              <Text style={{color:'#eee', fontWeight:'700'}}>{post?.r1?.length?.toLocaleString('en')}</Text>
            </View>

            
          </MenuOption>

          <MenuOption onSelect={r2}>
            <View style={styles.reactionInnerContainer}>
              <Text style={styles.reactionInnerText}>Hahaha gamdu</Text>
              <Image style={{width:30, height:30}} source={require('../../assets/gandu.png')} />
              <Text style={{color:'#eee', fontWeight:'700'}}>{post?.r2?.length?.toLocaleString('en')}</Text>
            </View>
          </MenuOption>

          <MenuOption onSelect={r3}>
            <View style={styles.reactionInnerContainer}>
              <Text style={styles.reactionInnerText}>Lomra ni mera</Text>
              <Image style={{width:30, height:30}} source={require('../../assets/eggplant.png')} />
              <Text style={{color:'#eee', fontWeight:'700'}}>{post?.r3?.length?.toLocaleString('en')}</Text>
            </View>
          </MenuOption>

          <MenuOption onSelect={r4}>
            <View style={styles.reactionInnerContainer}>
              <Text style={styles.reactionInnerText}>Raj ke harami</Text>
              <Image style={{width:30, height:30}} source={require('../../assets/devil.png')} />
              <Text style={{color:'#eee', fontWeight:'700'}}>{post?.r4?.length?.toLocaleString('en')}</Text>
            </View>
          </MenuOption>

          <MenuOption onSelect={r5}>
            <View style={styles.reactionInnerContainer}>
              <Text style={styles.reactionInnerText}>Lanti kirdar kanjar</Text>
              <Image style={{width:30, height:30}} source={require('../../assets/hand.png')} />
              <Text style={{color:'#eee', fontWeight:'700'}}>{post?.r5?.length?.toLocaleString('en')}</Text>
            </View>
          </MenuOption>
      </MenuOptions>


        {/* <TouchableOpacity onPress={handleEggPlant}>
          <Image style={checkEggPlant?{width:30, height:30}:{width:30, height:30, tintColor:'#eee'}} source={require('../assets/eggplant.png')} />
        </TouchableOpacity> */}



        <TouchableOpacity onPress={()=>{
            handleLike();
        }}>
          <Image style={checkUp ? {width:30, height:30}:{width:30, height:30, tintColor:'#eee'}} source={require('../../assets/ok.png')} />
        </TouchableOpacity>

          <Text style={{color:'#AFEE96', fontSize:15, fontWeight:'900'}}>{post?.upVotes}</Text>
          <Text style={{color:'#DE3163', fontSize:15, fontWeight:'900'}}>{post?.downVotes == 0? post?.downVotes : - post?.downVotes}</Text>

        <TouchableOpacity onPress={()=>{
          handleDislike();
        }}>  
          <Image style={checkDown?{width:30, height:30}:{width:30, height:30, tintColor:'#eee'}} source={require('../../assets/middle-finger.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{width:26, height:26, tintColor:'#eee'}} source={require('../../assets/comment.png')} />
        </TouchableOpacity>
        
        {/* <Feather name="arrow-up" size={30} color="#fff" />
        <Feather name="arrow-down" size={30} color="#fff" /> */}
        {/* <Image source={require('../assets/heart.png')} style={{tintColor:"#fff"}} /> */}
        {/* <FontAwesome name="comment" size={28} color="#fff" /> */}
        {/* <Foundation name="heart" size={30} color="#fff" /> */}
        {/* </MenuTrigger> */}
        </Menu>
    </View>
    
  )
}

const styles = StyleSheet.create({
    parentContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#585B64',
        padding:10,
        borderRadius:8
    },
    eggPlant:{
        width:30,
        height:30,
    },
    voteTextRed:{
      color:'red',
      fontSize:15,
      fontWeight:'800'
    },
    reactionInnerContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:5,
    },
    reactionInnerText:{
      fontWeight:'600',
      fontSize:16,
      color:'#eee'
    }
})

export default Reactions