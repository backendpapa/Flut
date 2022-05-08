import React from 'react'
import {Icon} from "@rneui/base";
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function SELocation(){
  const sel=se_location
  const theme=useColorScheme();
  return (
    <View>
      <View style={sel.location}>
        {/*  calender section*/}
        <Icon name={'map-marker-outline'}
              type={'material-community'}
              color={theme=='dark'?colors.white:colors.secondary}
              />
        <View style={{marginLeft:15}}>
          <Text style={[sel.text_1,{color:theme=='dark'?colors.white:colors.secondary}]} >Palau Sant Jordi</Text>
          <Text style={[sel.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Passeig Olímpic, 5-7, 08038 Barcelona</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={[sel.text_3,{color:theme=='dark'?colors.orange:colors.secondary}]}>View on maps</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}
export default  SELocation;
const se_location=StyleSheet.create({
  location:{
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
  text_3:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h13,
  }
})
