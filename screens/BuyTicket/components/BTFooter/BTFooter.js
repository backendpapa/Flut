import React from 'react'
import {View, Text, TouchableOpacity, useColorScheme,StyleSheet} from 'react-native'
import {Icon} from "@rneui/base";
import {colors, fonts, sizes} from "../../../../constant";

function BTFooter(){
  const btf=bt_footer
  const theme=useColorScheme();
  return (
    <View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Icon name={"shopping-outline"} type={"material-community"} color={theme=="dark"?colors.white:colors.secondary} />
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View>
            <Text style={btf.text_1} >$67.00</Text>
          </View>
          <TouchableOpacity style={{height:50,backgroundColor:colors.green,width:'70%',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center',elevation:5}} activeOpacity={0.8}>
            <Text style={btf.text_3}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default  BTFooter;
const bt_footer=StyleSheet.create({
  text_1: {
    fontSize: sizes.h16,
    color: colors.secondary,
    marginBottom: 7,
    fontFamily:fonts.DmSans_Bold
  },
  text_3: {
    fontFamily: fonts.DmSans_Bold,
    fontSize: sizes.h13,
    color: colors.white,
  },
})
