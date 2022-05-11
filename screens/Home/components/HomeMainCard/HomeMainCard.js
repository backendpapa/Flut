import React, {useState} from 'react'
import {View, Text, StyleSheet, ImageBackground, useColorScheme, TouchableOpacity} from 'react-native';
import bg from '../../../../assets/images/event_img.png'
import {colors, fonts, sizes} from "../../../../constant";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
function HomeMainCard(){
  const hmc=homemain
  const [like,setLike]=useState(false)
  const theme=useColorScheme();
  const navigation=useNavigation();
  return (
    <View>

     <TouchableOpacity activeOpacity={1} onPress={()=>{
       navigation.navigate('SingleEvent')
     }} style={{borderRadius:15}}>
       <View style={hmc.container}>
         <View style={hmc.container_bg}>
           <ImageBackground style={{height:'100%'}} source={bg} />
         </View>

         <View style={[hmc.container_content,{backgroundColor:theme=='dark'?colors.orange:colors.grey_light}]}>
           <Text style={[hmc.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Mon, Apr 18 · 21:00 Pm </Text>
           <Text style={[hmc.text_1,{color:theme=='dark'?colors.white:colors.secondary}]} >La Rosalia</Text>
           <View style={hmc.flex_text}>
             <Icon size={17}  name={"location-outline"} type={"ionicon"} color={theme=='dark'?colors.white:colors.secondary}  />
             <Text style={[hmc.text_2,{color:theme=='dark'?colors.white:colors.secondary,marginTop:2}]}>Palau Sant Jordi, Barcelona</Text>
           </View>
         </View>
       </View>

       <View style={hmc.icon_section}>
         <View style={hmc.icon_flex}>
           <TouchableOpacity
             onPress={() => {
               setLike(!like);
             }}
             activeOpacity={0.8}>
             <Icon
               name={like == true ? 'cards-heart' : 'cards-heart-outline'}
               color={theme=='dark'?colors.grey_light:"red"}
               type={'material-community'}
             />
           </TouchableOpacity>

           <TouchableOpacity
             style={{marginLeft: 10}}
             activeOpacity={0.8}>
             <Icon
               name={'ios-share-social-outline'}
               color={theme=='dark'?colors.grey_light:colors.secondary}
               type={'ionicon'}
             />
           </TouchableOpacity>
         </View>
       </View>
     </TouchableOpacity>

    </View>
  )
}
export default HomeMainCard;
const homemain = StyleSheet.create({
  container:{
    height:250,
    // backgroundColor:'red',
    borderRadius:15,
    overflow:'hidden'
  },
  container_bg:{
    height:'100%',
    position:'absolute',
    width:'100%'
  },
  container_content:{
    height:"50%",
    position:'absolute',
    width:'100%',
    bottom:0,
    padding:20,
  },
  text_1:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h16,
    marginBottom:7
  },
  text_2:{
    fontFamily:fonts.DmSans_Regular,
    fontSize:sizes.h13,
    marginBottom:7

  },
  text_3:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h13,
  },
  flex_text:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  icon_section:{
    position:'absolute',
    margin:20,
    bottom:0,
    right:0
  },
  icon_flex:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }
})
