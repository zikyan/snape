import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useSelector } from "react-redux";

function SearchPost() {
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
            <TextInput returnKeyType="search" placeholder="Search For Any Post" style={styles.searchInput} />
            {/* <TouchableOpacity>
                <Feather style={styles.searchIconStyle} name="search" size={34} color="#eee" />
            </TouchableOpacity> */}
        </View>
        <Text style={styles.commentTextStyle}>Latest Posts</Text>
        <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 160 }} style={styles.viralsBelow(theme)} data={DATA} renderItem={(itemList)=>{
          return(
          <View style={styles.container}>
            <View>
                <View style={{width:'100%', height:500}}>
                <Image style={styles.postImage} source={itemList.item.postImage} />
            </View>
                <Text style={styles.captionTextStyle}>ye mere ak dost ki story he kasam se bht bara snake he or raj ke harami he</Text>
                <View style={{flexDirection:'row', marginLeft:10, flexWrap:'wrap'}}>
                  <Text style={styles.tagStyle}>#snake</Text>
                  <Text style={styles.tagStyle}>#gamdu</Text>
                  <Text style={styles.tagStyle}>#story</Text>
                </View>
            </View>
              <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
              <View style={styles.upperContainer}>
                  <Image style={styles.dpStyle} source={itemList.item.dp}/>
                  <View style={{marginLeft:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={styles.userTextStyle}>{itemList.item.name}</Text>
                      <Text style={styles.postTime}>{itemList.item.time}</Text>
                    </View>
                    <Text style={styles.belowUserTextStyle}>merabehnoi69</Text>
                  </View>
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
    parentContainer:theme =>({
      backgroundColor: theme == 'dark'? '#18191A':'#171544',
        // marginBottom:10,
        paddingLeft:12,
        paddingRight:12,
        marginBottom:12
    }),
    postImage:{
        height: '100%',
        resizeMode:'contain',
        width:'auto',
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    searchInput:{
        backgroundColor:'#eee',
        padding:10,
        borderRadius:5,
        fontSize:15,
        fontWeight:'500',
        flexDirection:'row',
        marginBottom:10,
        marginTop:10,
        width:'100%',
        alignItems:'center',
    },
    container:{
      backgroundColor:'#2E3035',
    //   padding:10,
      borderRadius:10,
      marginBottom:10,
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
      padding:10
    },
    postImageStyle:{
      borderRadius:10,
    },
    commentTextStyle:{
      color:'#eee',
      fontSize:16,
      fontWeight:'900',
      opacity:0.7,
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
  },
  searchIconStyle:{
    // borderWidth:1,
    // padding:8,
    // backgroundColor:'#2E3035',
    // borderRadius:8
    color:'#32BE7C'
  },
  viralsBelow:theme=>({
    backgroundColor: theme == 'dark'? '#18191A':'#171544',
  })
})

export default SearchPost