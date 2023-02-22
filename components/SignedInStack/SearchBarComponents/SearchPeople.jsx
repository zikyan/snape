import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useSelector } from "react-redux";

function SearchPeople() {
  const {theme} = useSelector((state)=>state.themeReducer)
  const DATA = [
    {
      id:'1',
      name:'Zikyan Rasheed',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post1.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'2',
      name:'Usman Noor',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post3.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'3',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post4.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'4',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post5.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'5',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post6.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'6',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post7.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'7',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post8.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'8',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: require('../../../assets/post9.jpg'),
      tag:'#snake | #mystory | ',
      time: '2h'
    },
    {
      id:'9',
      name:'Raees Ibrahim',
      dp: require('../../../assets/dpLow.jpg'),
      postImage: null,
      tag:'#snake | #mystory | ',
      time: '2h'
    }
  ]
  return (
    <View style={styles.parentContainer(theme)}>
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
            <TextInput returnKeyType="search" placeholder="Search For Any Person" style={styles.searchInput} />
            {/* <TouchableOpacity>
                <Feather style={styles.searchIconStyle} name="search" size={34} color="#eee" />
            </TouchableOpacity> */}
        </View>
        <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom:140 }} style={styles.viralsBelow(theme)} data={DATA} renderItem={(itemList)=>{
          return(
          <View style={styles.container(theme)}>
            <View style={styles.upperContainer}>
                  <Image style={styles.dpStyle} source={itemList.item.dp}/>
                  <View style={{marginLeft:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={styles.userTextStyle}>{itemList.item.name}</Text>
                    </View>
                    <Text style={styles.belowUserTextStyle}>@merabehnoi69</Text>
                  </View>
              </View>
            </View>  
          )
        }}
        keyExtractor={(item,index)=>{
          return item.id
        }}/> 
    </View>
  )
}

const styles=StyleSheet.create({
    parentContainer:theme=>({
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
        flexDirection:'row',
        marginBottom:20,
        marginTop:10,
        width:'100%',
        alignItems:'center',
    },
      searchIconStyle:{
        // borderWidth:1,
        // padding:8,
        // backgroundColor:'#2E3035',
        // borderRadius:8
        color:'#32BE7C'
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
    container:theme=>({
      backgroundColor: theme == 'dark'? '#2E3035':'#3A3866',
        marginBottom:10,
        borderRadius:5,
        padding:10,
        justifyContent:'center',
    }),
    viralsBelow:theme=>({
      backgroundColor: theme == 'dark'? '#18191A':'#171544',
    })
})

export default SearchPeople