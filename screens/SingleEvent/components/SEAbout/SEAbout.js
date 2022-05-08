import React from 'react'
import {Icon} from "@rneui/base";
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function SEAbout(){
  const theme=useColorScheme();
  const sea=se_about
  return (
    <View>
      <View >
        {/*  calender section*/}
        <View >
          <Text style={[sea.text_1,{color:theme=='dark'?colors.white:colors.secondary}]} >About</Text>
          <Text style={[sea.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

        </View>
      </View>


    </View>
  )
}
export default  SEAbout;
const se_about=StyleSheet.create({

  text_1:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h16,
    color:colors.secondary,
    marginBottom:7
  },
  text_2:{
    fontFamily:fonts.DmSans_Regular,
    fontSize:sizes.h13,
    color:colors.secondary,
    marginBottom:7
  },
  text_3:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h13,
    color:colors.primary
  }
})
