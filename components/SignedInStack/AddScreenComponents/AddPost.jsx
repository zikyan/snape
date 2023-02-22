import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from "react-native"
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker'
import { Formik } from "formik";
import * as Yup from 'yup'
import {firebase, db} from '../../../firebase'
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native";
import { Audio } from 'expo-av';

function AddPost() {
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const [uploading, setUploading] = useState(false)
    const [transferred, setTransferred] = useState(0)
    const [recording, setRecording] = useState();
    const [recordings, setRecordings] = useState([]);
    const [message, setMessage] = useState("");

    async function startRecording() {
        try {
          const permission = await Audio.requestPermissionsAsync();
          setRecording(null)
          setRecordings(null)
    
          if (permission.status === "granted") {
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: true,
              playsInSilentModeIOS: true
            });
            
            const { recording } = await Audio.Recording.createAsync(
              Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
    
            setRecording(recording);
          } else {
            setMessage("Please grant permission to app to access microphone");
          }
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }

      async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
    
        let updatedRecordings = [recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
          sound: sound,
          duration: getDurationFormatted(status.durationMillis),
          file: recording.getURI()
        });
    
        setRecordings(updatedRecordings);
      }

      function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
      }
    
      function getRecordingLines() {
        return recordings?.map((recordingLine, index) => {
          return recordingLine?(
            <View key={index} style={styles.row}>
              <Text style={{color:'#fff'}}>Recording {recordingLine?.duration}</Text>
              <Button style={styles.button} onPress={() => recordingLine?.sound.replayAsync()} title="Play"></Button>
            </View>
          ):null
        });
      }


    const AddPostSchema = Yup.object().shape({
        title:Yup.string().required('Title is required'),
        tag1:Yup.string(),
        tag2:Yup.string(),
        tag3:Yup.string(),
        tag4:Yup.string(),
        tag5:Yup.string(),
        postRec:Yup.string().url(),
        postImage:Yup.string().url(),
        postVideo:Yup.string().url(),
    })

  const uploadPost = async (title, tag1, tag2, tag3, tag4, tag5, downloadUrl)=>{
    
    try {

        const upload = await db.collection('users').doc(firebase.auth().currentUser.uid).collection('posts').add({
            title: title,
            tag1: tag1,
            tag2: tag2,
            tag3: tag3,
            tag4: tag4,
            tag5: tag5,
            postImage:downloadUrl,
            // voice: downloadUrl,
            userEmail: firebase.auth().currentUser.email,
            ownerUid: firebase.auth().currentUser.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            DisLiked:[],
            Liked:[],
            r1:[],
            r2:[],
            r3:[],
            r4:[],
            r5:[],
            upVotes:0,
            downVotes:0,
            comments: []
            }).then(()=>navigation.navigate('Home'))

            return upload
    } catch (error) {
        console.log(error)
    }
    
    }

    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality:1
        });

        const source = {uri: result.uri}
        setImage(source)
    }

    const uploadImage = async (title, tag1, tag2, tag3, tag4, tag5)  =>{

        try {
        const response = await fetch(image.uri)
        const blob = await response.blob()

        // const response1 = await fetch(res)
        // const blob1 = await response1.blob()

        // const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)

        const task = firebase.storage().ref().child(`post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`).put(blob)
        // const task = firebase.storage().ref().child(`voice/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`).put(blob1)
        setUploading(true)
        setTransferred(0)

        const taskProgress = snapshot => {
            setTransferred(
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) 
            )
        }
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                uploadPost(title, tag1, tag2, tag3, tag4, tag5, snapshot)
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
    }


    const [zik, setZik] = useState(null)
       let res
       recordings?.map((data, i, row)=>{
        
        if (i + 1 === row.length){
            res = data.file
        }
      })

      

  return (
    <View style={styles.parentContainer}>
        <Formik
      initialValues={{caption:'', tag1:'', tag2:'', tag3:'', tag4:'', tag5:'', postRec:'', image:'', postVideo:''}}
      onSubmit={(values)=>
        uploadImage(values.title, values.tag1, values.tag2, values.tag3, values.tag4, values.tag5)
      }
      validationSchema={AddPostSchema}
      validateOnMount={true}
      >
        {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
    <>
        <ScrollView>
            <View>
                <Text style={styles.textInputCaption}>Post Title</Text>
                <TextInput multiline={true} placeholder="Write Your Post Title Here" style={styles.searchInput}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                />
            </View>

            <View>
                <Text style={styles.textInputCaption}>Tags</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TextInput placeholder="Tag1" style={styles.searchInputTag}
                    onChangeText={handleChange('tag1')}
                    onBlur={handleBlur('tag1')}
                    value={values.tag1}
                    />
                    <TextInput placeholder="Tag2" style={styles.searchInputTag}
                    onChangeText={handleChange('tag2')}
                    onBlur={handleBlur('tag2')}
                    value={values.tag2}
                    />
                    <TextInput placeholder="Tag3" style={styles.searchInputTag}
                    onChangeText={handleChange('tag3')}
                    onBlur={handleBlur('tag3')}
                    value={values.tag3}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <TextInput placeholder="Tag4" style={styles.searchInputTag}
                    onChangeText={handleChange('tag4')}
                    onBlur={handleBlur('tag4')}
                    value={values.tag4}
                    />
                    <TextInput placeholder="Tag5" style={[styles.searchInputTag, {marginLeft:20}]}
                    onChangeText={handleChange('tag5')}
                    onBlur={handleBlur('tag5')}
                    value={values.tag5}
                    />
                </View>

            </View>
        

            <View>
                <Text style={styles.textInputCaption}>Record Voice Note</Text>
                <TouchableOpacity style={{marginBottom:20}} onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }>
                    <Text>{message}</Text>
                    <Button
                        title={recording ? 'Stop Recording' : 'Start Recording'}
                        onPress={recording ? stopRecording : startRecording} />
                    {getRecordingLines()}
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:20}}>

                <TouchableOpacity style={{backgroundColor:'#6495ED', padding:10, borderRadius:5, width:150}} onPress={pickImage}>
                    <Text style={{color:'#fff', fontWeight:'500', textAlign:'center'}}>Select Image</Text>
                </TouchableOpacity>

                <View style={{width:1,backgroundColor:'#eee', height:25}}></View>

                <TouchableOpacity style={{backgroundColor:'#6495ED', padding:10, borderRadius:5, width:150}} onPress={pickImage}>
                    <Text style={{color:'#fff', fontWeight:'500', textAlign:'center'}}>Select Video</Text>
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
                <Text style={{color:'#fff', fontWeight:'500', fontSize:16, textAlign:'center'}}>Post</Text>
            </TouchableOpacity>
        </ScrollView>
    </>
        )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    parentContainer:{
        paddingLeft:12,
        paddingRight:12,
        marginBottom:12
    },
    searchInput:{
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
    textInputCaption:{
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
        width:'30%',
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

export default AddPost