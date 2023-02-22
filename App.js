import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar} from "react-native"
import SignedInStack from "./components/SignedInStack/SignedInStack";
import SignedOutStack from "./components/SignedOutStack/SignedOutStack";
import {firebase} from './firebase'
import { Provider } from "react-redux";
import { Store } from "./redux/store";

export default function App() {
  // const {theme}=useSelector((state)=>state.themeReducer)
  const [currentUser, setCurrentUser] = useState(null)
  const userHandler = (user)=>{
    user ? setCurrentUser(user) : setCurrentUser(null)
  }
  useEffect(
    ()=>firebase.auth().onAuthStateChanged(user=>userHandler(user)),
    []
  )
  console.log(currentUser)
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
      {
        currentUser?
        <SignedInStack/>
        :
        <SignedOutStack />
      }
      </Provider>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      // backgroundColor:'#171544',
      // padding:12
  }
})

