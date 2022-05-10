import React from 'react'
import {View, Text, StyleSheet, useColorScheme, TouchableOpacity} from 'react-native'
import {fonts, sizes,colors} from "../../../../constant";
import {Icon} from "@rneui/base";


function SearchInfo(){
  const si=si_styles
  const theme=useColorScheme()
  return (
    <View>
      <View style={si.container}>
        <View>
        {/*  left*/}
          <Text style={[si.text,{color:theme=='dark'?colors.white:colors.secondary,fontFamily:fonts.DmSans_Bold}]}>123 Events</Text>
        </View>
        <View>
        {/*  Right*/}
          <TouchableOpacity activeOpacity={0.8} style={si.button_container}>
            <Text style={[si.text,{color:theme=='dark'?colors.white:colors.secondary,fontFamily:fonts.DmSans_Regular}]}>Sort by relevant</Text>
            <Icon name={'down'} color={theme=='dark'?colors.white:colors.secondary} type={"antdesign"} style={{marginLeft:5}} size={12} />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}
export default SearchInfo;
const si_styles=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text:{
    fontSize:sizes.h15,
  },
  button_container:{
    padding:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }
})
