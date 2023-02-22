import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from 'yup'
import Validator from "email-validator";
import {firebase, db} from '../../firebase';

function Signup() {
  const navigation = useNavigation();
  const SignupFormSchema = Yup.object().shape({
    email:Yup.string().email().required('Email is required'),
    password:Yup.string().required().min(8,'Password should be atleast 8 chatacters')
  })

  const onSignup = async (email, password)=>{
    try {
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log('Firebase signup successfull', email, password)

      db.collection('users').doc(authUser.user.uid).set({
        ownerUid: authUser.user.uid,
        email: authUser.user.email,
        saved:[]
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View style={styles.parentContainer}>
      <Formik
      initialValues={{email:'', password:''}}
      onSubmit={values=>{
        onSignup(values.email, values.password)
      }}
      validationSchema={SignupFormSchema}
      validateOnMount={true}
      >
        {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
      <>
        <Text style={styles.createAccountStyle}>Create Account</Text>
        <Text style={styles.connectFriend}>Connect with your Harami friends today!</Text>
        <View>
          <Text style={styles.textInputCaption}>Email Address</Text>
          <TextInput style={[styles.searchInput, {
            borderWidth:1.5,
            borderColor: values.email.length<1 || Validator.validate(values.email) ? '#eee':'crimson'
          }]}
          keyboardType='email-address'
          textContentType="emailAddress" 
          placeholder="Enter Your Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          />
        </View>

        {/* <View>
          <Text style={styles.textInputCaption}>Username</Text>
          <TextInput style={[styles.searchInput, {
            borderWidth:1.5,
            borderColor:'#eee'
          }]} placeholder="A unique username such as 'meraBehnoi69'"
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}/>
        </View> */}

        <View>
          <Text style={styles.textInputCaption}>Password</Text>
          <TextInput secureTextEntry={true} style={[styles.searchInput, {
            borderWidth:1.5,
            borderColor: values.password.length<1 || values.password.length>=8 ? '#eee':'crimson'
          }]} placeholder="Enter Your Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          />
        </View>

        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
          <Text style={styles.signUpButton(isValid)}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, borderBottomWidth:2, borderColor:'#eee', opacity:0.7}}></View>
          <Text style={styles.signUpWith}>Or Sign Up With</Text>
          <View style={{flex:1, borderBottomWidth:2, borderColor:'#eee', opacity:0.7}}></View>
        </View>

        <View style={styles.signUpButtons}>

          <TouchableOpacity style={styles.googleButtonStyle}>
            <Image style={styles.google} source={require('../../assets/facebook.png')}/>
            <Text style={styles.googleText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButtonStyle}>
            <Image style={styles.google} source={require('../../assets/google.png')}/>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
          <Text style={styles.alreadyAccount}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('login')}>
            <Text style={[styles.alreadyAccount, {marginLeft:5, color:'#AFEE96'}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
      )}
      </Formik>
    </View>
  )
}

const styles=StyleSheet.create({
    parentContainer:{
        flex:1,
        padding:20,
        backgroundColor:'#171544'
    },
    createAccountStyle:{
      color:'#eee',
      fontSize:24,
      fontWeight:'700'
    },
    connectFriend:{
      color:'#eee',
      fontSize:16,
      // opacity:0.9,
      marginTop:10,
      marginBottom:50
    },
    textInputCaption:{
      color:'#eee',
      fontSize:16,
      fontWeight:'600'
    },
    searchInput:{
      backgroundColor:'#eee',
      padding:10,
      borderRadius:5,
      fontSize:15,
      fontWeight:'500',
      flexDirection:'row',
      marginBottom:20,
      marginTop:10,
      alignItems:'center',
  },
  signUpButton: isValid=>({
    color:'#eee',
    fontWeight:'700',
    fontSize:16,
    textAlign:'center',
    backgroundColor: isValid ? '#2260CF' :'#6495ED' ,
    padding:10,
    borderRadius:5,
    marginTop:20,
    marginBottom:30
  }),
  signUpWith:{
    color:'#eee',
    fontSize:15,
    fontWeight:'500',
    textAlign:'center',
    marginLeft:10,
    marginRight:10
  },
  google:{
    width:30,
    height:30
  },
  googleText:{
    color:"#2C3E50",
    fontWeight:'700',
    fontSize:18,
    marginLeft:10
  },
  signUpButtons:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  googleButtonStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    backgroundColor:'#eee',
    borderRadius:5,
    borderColor:'#6495ED',
    // borderWidth:2,
    width: 170
  },
  alreadyAccount:{
    color:'#eee',
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
  },
})

export default Signup