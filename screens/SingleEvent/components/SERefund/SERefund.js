import React from 'react'
import {Icon} from "@rneui/base";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function SERefund(){
  const sef=se_refund
  return (
    <View>
      <View style={sef.refund}>
        {/*  calender section*/}
        <Icon name={'currency-ngn'}
              type={'material-community'}  />
        <View style={{marginLeft:15}}>
          <Text style={[sef.text_1]} >Refund Policy</Text>
          <Text style={sef.text_2}>Flut fee is not-refundable.</Text>

        </View>
      </View>


    </View>
  )
}
export default  SERefund;
const se_refund=StyleSheet.create({
  refund:{
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
