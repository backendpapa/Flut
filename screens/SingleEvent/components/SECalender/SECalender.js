import React from 'react'
import {Icon} from "@rneui/base";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function SECalender(){
  const sec=se_calender
  return (
    <View>
      <View style={sec.calender}>
      {/*  calender section*/}
          <Icon name={'calendar-outline'}
                type={'ionicon'}  />
        <View style={{marginLeft:15}}>
          <Text style={[sec.text_1]} >Mon, Apr 18 . 21:00pm</Text>
          <Text style={sec.text_2}>21:00pm - 23:30pm</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={sec.text_3}>Add to calender</Text>
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
    color:colors.secondary,
    marginBottom:7
  },
  text_3:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h13,
    color:colors.primary
  }
})
