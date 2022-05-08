import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import {Icon} from "@rneui/base";
import {colors, fonts, sizes} from "../../../../constant";
import {useNavigation} from "@react-navigation/native";


function BTNav(){
  const btn=bt_nav;
  const theme=useColorScheme();
  const navigation=useNavigation()
  return (
    <View>
        <View style={btn.container}>
          <View >
            <TouchableOpacity onPress={()=>{
              navigation.goBack()
            }} activeOpacity={0.8}>
              <Icon
                name={'arrow-left'}
                color={theme=='dark'?colors.white:colors.secondary}
                type={'material-community'}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={[btn.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>La Rosalia</Text>
          </View>

          <View >
            <TouchableOpacity activeOpacity={0.8}>
              <Icon
                name={'close'}
                color={theme=='dark'?colors.white:colors.secondary}
                type={'material-community'}
              />
            </TouchableOpacity>
          </View>
        </View>

    {/*  Ticket details*/}

      <View style={{marginTop:15}}>
          <Text style={[btn.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Mon, Apr 18 · 21:00 Pm </Text>
          <Text style={[btn.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Palau Sant Jordi, Barcelona</Text>
      </View>
    </View>
  )
}
export default BTNav;

const bt_nav=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text_1:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h18,
    textAlign:'center'
  },
  text_2:{
    fontFamily:fonts.DmSans_Regular,
    fontSize:sizes.h13,

    textAlign:'center'
  },
})
