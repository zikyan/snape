import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons'

function SnakeDay() {
  const {theme}=useSelector((state)=>state.themeReducer)
  return (
    <View style={styles.container(theme)}>
        {/* <View style={{flex:1, borderRadius:8}}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'flex-end', marginTop:0}}>
          <View >
            <View style={{alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#6495ED'}} source={require('../../assets/usman.png')}/>
            <Text style={{color:'#eee', fontWeight:'600'}}>Usman Noor</Text>
            <Text style={{color:'#eee', fontWeight:'600', marginBottom:5, fontSize:10, opacity:0.7}}>@usmanKala</Text>
            </View>
              <View style={styles.ranking1}> 
                <Text style={{textAlign:'center', fontSize:50, fontWeight:'900', color:'#eee', marginTop:80}}>2</Text>
            </View>
          </View>

          <View >
            <View style={{alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#32BE7C'}} source={require('../../assets/dpLow.jpg')}/>
            <Text style={{color:'#eee', fontWeight:'600'}}>Zikyan Rasheed</Text>
            <Text style={{color:'#eee', fontWeight:'600', marginBottom:5, fontSize:10, opacity:0.7}}>@meraBehnoi69</Text>
            </View>
              <View style={styles.ranking2}> 
                <Text style={{textAlign:'center', fontSize:50, fontWeight:'900', color:'#eee'}}>1</Text>
            </View>
          </View>

          <View >
            <View style={{alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#DE3163'}} source={require('../../assets/raees.jpg')}/>
            <Text style={{color:'#eee', fontWeight:'600'}}>Raees Ibrahim</Text>
            <Text style={{color:'#eee', fontWeight:'600', marginBottom:5, fontSize:10, opacity:0.7}}>@raeesPith</Text>
            </View>
              <View style={styles.ranking3}> 
                <Text style={{textAlign:'center', fontSize:50, fontWeight:'900', color:'#eee', marginTop:40}}>3</Text>
            </View>
          </View>

        </View>
        <View style={{backgroundColor:'#F9CA7A', flex:1, borderRadius:8}}>
        </View>
        </View> */}
        {/* <View style={{backgroundColor:'#2E3035', flex:1, borderRadius:8, padding:5}}>
          <View>
            <Text style={{fontSize:35, fontWeight:'800', color:'#eee'}}>1</Text>
            <View style={{backgroundColor:'#F9CA7A'}}>
              
            </View>
          </View>
        </View> */}

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>

        <View style={{alignItems:'center', marginTop:20}}>
        <Text style={{color:'#eee', fontWeight:'900', fontSize:34}}>2</Text>
        <View style={{backgroundColor:'#6495ED', alignItems:'center', padding:5, borderRadius:8, width:120}}>
            
            <View style={{marginTop:-20, marginLeft:70}}>
            <MaterialCommunityIcons name="snake" size={34} color="#AFEE96" />
            </View>
            <View style={{alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#32BE7C'}} source={require('../../assets/usman.png')}/>
              <Text style={{color:'#eee', fontWeight:'600'}}>Usman Noor</Text>
              <Text style={{color:'#eee', fontWeight:'600', marginBottom:5, fontSize:10, opacity:0.7}}>@usmanKala</Text>
              <Text style={{color:'#eee', fontWeight:'700', color:'#18191A'}}>Snape: 120</Text>
            </View>
              
          </View>
        </View>

        <View style={{alignItems:'center'}}>
        <Text style={{color:'#eee', fontWeight:'900', fontSize:34}}>1</Text>
        <View style={{backgroundColor:'#32BE7C', alignItems:'center', padding:5, borderRadius:8, width:120}}>
            
            <View style={{marginTop:-20, marginLeft:70}}>
              <Image style={{width:40, height:40}} source={require('../../assets/snake2.png')}/>
            </View>
            <View style={{alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96'}} source={require('../../assets/dpLow.jpg')}/>
              <Text style={{color:'#eee', fontWeight:'600'}}>Zikyan Rasheed</Text>
              <Text style={{color:'#eee', fontWeight:'600', marginBottom:5, fontSize:10, opacity:0.7}}>@meraBehnoi69</Text>
              <Text style={{color:'#eee', fontWeight:'700', color:'#18191A'}}>Snape: 150</Text>
            </View>
              
          </View>
        </View>
          

        <View style={{alignItems:'center', marginTop:20}}>
        <Text style={{color:'#eee', fontWeight:'900', fontSize:34}}>3</Text>
        <View style={{backgroundColor:'#DE3163', alignItems:'center', padding:5, borderRadius:8, width:120}}>
            
            <View style={{marginTop:-20, marginLeft:70}}>
            <MaterialCommunityIcons name="snake" size={34} color="#AFEE96" />
            </View>
            <View style={{alignItems:'center'}}>
            <Image style={{width:80, height:80, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#6495ED'}} source={require('../../assets/raees.jpg')}/>
              <Text style={{color:'#eee', fontWeight:'600'}}>Raees Ibrahim</Text>
              <Text style={{color:'#eee', fontWeight:'600', marginBottom:5, fontSize:10, opacity:0.7}}>@raeesPith</Text>
              <Text style={{color:'#eee', fontWeight:'700', color:'#18191A'}}>Snape: 80</Text>
            </View>
              
          </View>
        </View>

        </View>
        <Text style={{color:'#eee', fontWeight:'600', marginTop:20, fontSize:25}}>Popular</Text>
        <ScrollView>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:10}}>4</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:20, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:10}}>5</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:20, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:10}}>6</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:20, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:10}}>7</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:20, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:10}}>8</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:20, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:10}}>9</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:20, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F9CA7A', marginTop:10, borderRadius:8, padding:5}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:22, marginLeft:5}}>10</Text>
          <Image style={{width:45, height:45, borderRadius:80/2, marginBottom:5, borderWidth:2, borderColor:'#AFEE96', marginLeft:10, marginRight:20}} source={require('../../assets/dpLow.jpg')}/>
          <Text style={{color:'#18191A', fontWeight:'700', fontSize:16}}>Raees Ibrahim</Text>
          </View>
          
          {/* <Text style={{color:'#18191A', fontWeight:'600', fontSize:10, fontSize:15}}>@raeesPith</Text> */}
          <View>
            <Text style={{color:'#eee', fontWeight:'700', color:'#18191A', fontSize:16, marginRight:20}}>Snape: 80</Text>
          </View>
          
        </View>


        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: theme =>({
      flex:1,
      backgroundColor: theme == 'dark'? '#18191A':'#171544',
      padding:12
  }),
  ranking1:{
    backgroundColor:'#6495ED',
    height:200,
    width:100,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  ranking2:{
    backgroundColor:'#32BE7C',
    height:250,
    width:100,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  ranking3:{
    backgroundColor:'#DE3163',
    height:150,
    width:100,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  }
})

export default SnakeDay