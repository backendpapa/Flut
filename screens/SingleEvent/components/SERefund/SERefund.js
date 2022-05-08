import React from 'react'
import {Icon} from "@rneui/base";
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function SERefund(){
  const theme=useColorScheme();
  const sef=se_refund
  return (
    <View>
      <View style={sef.refund}>
        {/*  calender section*/}
        <Icon name={'currency-ngn'}
              type={'material-community'}
              color={theme=='dark'?colors.white:colors.secondary}
        />
        <View style={{marginLeft:15}}>
          <Text style={[sef.text_1,{color:theme=='dark'?colors.white:colors.secondary}]} >Refund Policy</Text>
          <Text style={[sef.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Flut fee is not-refundable.</Text>

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

    marginBottom:7
  },
  text_2:{
    fontFamily:fonts.DmSans_Regular,
    fontSize:sizes.h13,

    marginBottom:7
  },
  
})
