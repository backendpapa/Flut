import React from 'react'
import {Icon} from "@rneui/base";
import {View, Text, StyleSheet, TouchableOpacity,useColorScheme} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function SECalender(){
  const theme=useColorScheme();
  const sec=se_calender
  return (
    <View>
      <View style={sec.calender}>
      {/*  calender section*/}
          <Icon name={'calendar-outline'}
                type={'ionicon'}
                color={theme=='dark'?colors.white:colors.secondary}
              />
        <View style={{marginLeft:15}}>
          <Text style={[sec.text_1,{color:theme=='dark'?colors.white:colors.secondary}]} >Mon, Apr 18 . 21:00pm</Text>
          <Text style={[sec.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>21:00pm - 23:30pm</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={[sec.text_3,{color:theme=='dark'?colors.orange:colors.secondary}]}>Add to calender</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}
export default  SECalender;
const se_calender=StyleSheet.create({
  calender:{
    display:'flex',
    flexDirection:"row",

  },
  text_1:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h16,
    color:colors.secondary,
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

  }
})
