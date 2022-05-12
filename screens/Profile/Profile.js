import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, StatusBar, Image, TouchableOpacity, Switch} from 'react-native';
import test from '../../assets/images/2.png'
import test2 from '../../assets/images/1.png'
import {colors, fonts, sizes} from "../../constant";
import {Icon} from "@rneui/base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


function Profile(){
  const profile=profile_style
  const [img,setImg]=useState(test)
  const [fimg,setfIMG]=useState([])
  const [sel,setsel]=useState(false)
  const [enable,setEnable]=useState(true)
  const theme=useColorScheme()

  const returnColor=()=>{
    if(theme=="dark"){
      return colors.orange
    }else{
      return colors.green
    }
  }
  return (
    <View style={{backgroundColor:theme=='dark'?colors.secondary:colors.white}}>
      <StatusBar translucent barStyle={theme=="dark"?"light-content":"dark-content"} backgroundColor='transparent' />
      <View style={profile.container}>
        <View style={{marginTop:20,display:'flex',flexDirection:'row',justifyContent:"center"}}>
          <View style={{height:160,width:160,}}>
            <View style={{height:160,width:160,borderRadius:100,backgroundColor:colors.grey_light,overflow:'hidden'}}>
              {sel==false?( <Image source={img}  resizeMode={'cover'} resizeMethod={'resize'} />):( <Image  source={{uri:img}}  resizeMode={'cover'} resizeMethod={'resize'} />)}

            </View>
            <TouchableOpacity onPress={ ()=>{
              console.log(img,"img")
              //  launchImageLibrary(options,async(res)=>{
              //    console.log(res)
              //    await setfIMG(res)
              //    await setsel(true)
              //    console.log(await fimg,"fimg")
              // })

            }} activeOpacity={0.8} style={{position:'absolute',right:0,bottom:0,height:40,width:40,borderRadius:100,overflow:'hidden',backgroundColor:colors.grey_light,zIndex:3,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
              <Icon name={'edit'} type={"font-awesome"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={[profile.text_1,{color:theme==="dark"?colors.white:colors.secondary}]}>Federico Lanzilotta</Text>
          <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]}>info@federicolanzilotta.com</Text>
        </View>

        <View style={{marginTop:50}}>
          <Text style={[profile.text_3,{color:theme==="dark"?colors.white:colors.secondary}]}>Settings</Text>

          <View style={{marginTop:30,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]} >Primary City</Text>
            <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]}>Barcelona</Text>
          </View>
          <View style={{marginTop:30,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]} >Copy Event to calender</Text>
            <Switch trackColor={{ false: "#767577", true: colors.grey }}
                    thumbColor={enable ?  returnColor():colors.grey_light}

                    onValueChange={()=>{
                      setEnable(!enable)
                    }}
                    value={enable} />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={{marginTop:30,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]} >Manage Events</Text>
            <Icon name={'right'} type={"antdesign"} size={15} color={theme==="dark"?colors.white:colors.secondary} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={{marginTop:30,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]} >Manage Log in options</Text>
            <Icon name={'right'} type={"antdesign"} size={15} color={theme==="dark"?colors.white:colors.secondary} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={{marginTop:30,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]} >Account Setting</Text>
            <Icon name={'right'} type={"antdesign"} size={15} color={theme==="dark"?colors.white:colors.secondary} />
          </TouchableOpacity>
        </View>

        <View style={{position:"absolute",width:'100%',bottom:20,margin:15}}>
           <TouchableOpacity activeOpacity={0.8} style={{height:50,borderColor:theme=="dark"?colors.orange:colors.green,borderWidth:2,borderRadius:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
             <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]}>Logout</Text>
           </TouchableOpacity>
          <View style={{marginTop:10}}>
              <Text style={[profile.text_2,{color:theme==="dark"?colors.white:colors.secondary}]}>@backendpapa.dev</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Profile;
const profile_style = StyleSheet.create({
  container:{
    paddingTop:45,
    height:'100%',
    padding:15
  },
  text_1: {
    fontSize: sizes.h18,

    fontFamily: fonts.DmSans_Bold,
    textAlign:'center'
  },
  text_2: {
    fontSize: sizes.h14,
    textAlign:'center',

    fontFamily: fonts.DmSans_Regular,
  },
  text_3: {
    fontSize: sizes.h22,
    fontFamily: fonts.DmSans_Bold
  },
})
