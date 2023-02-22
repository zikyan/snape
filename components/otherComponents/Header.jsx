import { View ,Text, StyleSheet, Image, TouchableOpacity } from "react-native"
// import snake from '../assets/snake2.png'
// import chat from '../assets/chat.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import {firebase} from '../../firebase'
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function Header() {
    const {theme}=useSelector((state)=>state.themeReducer)
    const navigation = useNavigation()
    const handleLogout = async ()=>{
        try {
            await firebase.auth().signOut()
            console.log('Signed out successfully')
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleSnake = ()=>{
        navigation.navigate('snakeScreen')
    }
  return (
    <View style={styles.parentContainer(theme)}>
        <View>
            <Text style={styles.logoText(theme)}>Snape</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            {/* <Image style={styles.snakeImage} source={snake} />
            <Image style={styles.chatImage} source={chat} /> */}
            <TouchableOpacity onPress={handleSnake}>
                <MaterialCommunityIcons name="snake" size={34} color="#AFEE96" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons style={{marginLeft:15, marginRight:15}} name="chatbubble-sharp" size={34} color="#e3ffe7" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Menu>
                <MenuTrigger>
                    <Image style={styles.dpStyle} source={require('../../assets/dpLow.jpg')} />
                </MenuTrigger>
                    <MenuOptions customStyles={{optionsContainer:{marginTop:30, width:100}}}>
                        <MenuOption onSelect={handleLogout} >
                        <Text style={{color: '#000', padding:10, fontWeight:'600'}}>Logout</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentContainer: theme => ({
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: theme == 'dark'? '#18191A':'#171544',
        padding:12
    }),
    logoText:theme=>({
        fontSize:24,
        color:'#AFEE96',
        fontWeight:'900'
    }),
    snakeImage:{
        width:30,
        height:30,
        // marginRight:20,
        backgroundColor:'crimson',
        borderRadius:30/2
    },
    chatImage:{
        width:30,
        height:30,
        marginLeft:20,
        marginRight:20
    },
    dpStyle:{
        width:35,
        height:35,
        borderRadius:45/2
      },
})

export default Header