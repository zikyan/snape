import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from "react-native"
import { firebase, db } from "../../../firebase";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";


function ProfileEdit() {
  const {theme}=useSelector((state)=>state.themeReducer)
  const [image, setImage] = useState()
  const [transferred, setTransferred] = useState(0)
  const [uploading, setUploading] = useState()
  const navigation = useNavigation()

  const ProfileEditSchema = Yup.object().shape({
    first:Yup.string().required('First Name is required'),
    last:Yup.string().required('Last Name is required'),
    username:Yup.string().required('Username is required'),
    profilePicture:Yup.string().url()
})

const pickImage = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality:1
    });

    const source = {uri: result.uri}
    setImage(source)
}

const uploadPost = async (first, last, username, downloadUrl)=>{
    try {
        db.collection('users').doc(firebase.auth().currentUser.uid).update({
            firstName: first,
            lastName: last,
            username: username,
            profilePicture: downloadUrl
        })
    } catch (error) {
        console.log(error)
    }

}

const submitProfileEdit = async (first, last, username)  =>{

    const uploadPost = async (first, last, username, downloadUrl)=>{
        try {
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
                firstName: first,
                lastName: last,
                username: username,
                profilePicture: downloadUrl
            })
        } catch (error) {
            console.log(error)
        }
    }

    if(image){

    try {
    const response = await fetch(image.uri)
    const blob = await response.blob()
    // const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
    const task = firebase.storage().ref().child(`profilePicture/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`).put(blob)
    setUploading(true)
    setTransferred(0)

    const taskProgress = snapshot => {
        setTransferred(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) 
        )
    }
    const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((snapshot)=>{
            uploadPost(first, last, username, snapshot)
        })
    }
    const taskError = snapshot => {
        console.log(snapshot)
    }

    task.on("state_changed", taskProgress, taskError, taskCompleted )

    await task.then(()=>navigation.navigate('Home'))
    setUploading(false)

    setImage(null)
    } catch (error) {
        console.log(error)
    }    
    }else{
        try {
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
                firstName: first,
                lastName: last,
                username: username,
            })
        } catch (error) {
            console.log(error)
        }
    } 
}

  return (
    <View style={styles.parentContainer(theme)}>
        <Formik
      initialValues={{first:'', last:'', username:''}}
      onSubmit={(values)=>
        submitProfileEdit(values.first, values.last, values.username)
      }
      validationSchema={ProfileEditSchema}
      validateOnMount={true}
      >
        {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
    <>
        <ScrollView>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                <View style={{width:'48%'}}>
                    <Text style={{color:'#fff'}}>First Name</Text>
                    <TextInput placeholder="Brad" style={styles.searchInput}
                    onChangeText={handleChange('first')}
                    onBlur={handleBlur('first')}
                    value={values.first}
                    />
                </View>

                <View style={{width:'48%'}}>
                    <Text style={{color:'#fff'}}>Last Name</Text>
                    <TextInput placeholder="Pith" style={styles.searchInput}
                    onChangeText={handleChange('last')}
                    onBlur={handleBlur('last')}
                    value={values.last}
                    />
                </View>

            </View>

            <View>

                <Text style={styles.textInputCaption}>Username</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TextInput placeholder="Should be a unique username" style={styles.searchInputTag}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}/>
                </View>

            </View>
        

            {/* <View>
                <Text style={styles.textInputCaption}>Record Voice Note</Text>
                <TouchableOpacity onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }>
                    <Image style={styles.commentIconStyle} source={require('../../../assets/microphone.png')} />
                </TouchableOpacity>
            </View> */}

            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:20}}>

                <TouchableOpacity style={{backgroundColor:'#6495ED', padding:10, borderRadius:5, width:150}} onPress={pickImage}>
                    <Text style={{color:'#fff', fontWeight:'500', textAlign:'center'}}>Profile Picture</Text>
                </TouchableOpacity>

                <View style={{width:1,backgroundColor:'#eee', height:25}}></View>

                <TouchableOpacity style={{backgroundColor:'#6495ED', padding:10, borderRadius:5, width:150}} onPress={pickImage}>
                    <Text style={{color:'#fff', fontWeight:'500', textAlign:'center'}}>Cover Picture</Text>
                </TouchableOpacity>

            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
                {image && <Image source={{ uri: image.uri }} style={{ width: '100%', height: 200, resizeMode:'contain' }} />}
            </View>

            {   
                uploading? (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={"large"} color={'crimson'} />
                    <Text style={{color:'#eee'}}>{transferred} % uploaded</Text>
                </View>
                ):null
            }

            <TouchableOpacity style={{backgroundColor:'#32BE7C', padding:10, borderRadius:5,marginTop:30, marginBottom:100}} onPress={handleSubmit} disabled={!isValid}>
                <Text style={{color:'#fff', fontWeight:'500', fontSize:16, textAlign:'center'}}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    </>
        )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    parentContainer:theme =>({
        flex:1,
        backgroundColor: theme == 'dark'? '#18191A':'#171544',
        paddingLeft:12,
        paddingRight:12,
        marginBottom:12
    }),
    searchInput:{
        backgroundColor:'#eee',
        padding:10,
        borderRadius:5,
        fontSize:15,
        fontWeight:'500',
        marginBottom:20,
        width:'100%',
        alignItems:'center',
        marginTop:10
    },
    textInputCaption:{
        flexDirection:'row',
        color:'#eee',
        fontSize:16,
        fontWeight:'600'
    },
    searchInputTag:{
        backgroundColor:'#eee',
        padding:10,
        borderRadius:5,
        fontSize:15,
        fontWeight:'500',
        flexDirection:'row',
        marginBottom:20,
        width:'100%',
        alignItems:'center',
        marginTop:10
    },
    commentIconStyle:{
        width:25,
        height:25,
        tintColor:'#eee',
        marginTop:20,
        marginBottom:20
    },
})

export default ProfileEdit