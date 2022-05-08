import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {colors, fonts, sizes} from "../../../../constant";


function SEFooter(){
  const sef=se_footer
  return (
    <View style={sef.container}>
    <View style={sef.inner_container}>
      <View>
        <Text style={[sef.text_1,{fontFamily:fonts.DmSans_Bold}]}>Price</Text>
        <Text style={[sef.text_1,{fontFamily:fonts.DmSans_Regular}]}>€ 35.00 - € 75.00</Text>
      </View>

  <TouchableOpacity style={sef.sef_button}  activeOpacity={0.8}>
      <Text style={sef.text_3}>Tickets</Text>
  </TouchableOpacity>

    </View>
    </View>
  )
}

export default  SEFooter;

const se_footer=StyleSheet.create({
  container:{
    height:120,
    padding:15,
    backgroundColor:colors.ultra,

  },
  inner_container:{
    display:'flex',
    flexDirection:'row',
    alignItems:"flex-end"
  },
  text_1:{

    fontSize:sizes.h16,
    color:colors.secondary,
    marginBottom:7
  },
  text_3:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h13,
    color:colors.white
  },
  sef_button:{
    height:50,
    backgroundColor:colors.green,
    flex:1,
    marginLeft:20,
    borderRadius:10,
    elevation:5,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})
