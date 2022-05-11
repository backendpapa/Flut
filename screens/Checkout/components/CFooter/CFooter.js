import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, useColorScheme,StyleSheet} from 'react-native'
import {Icon} from "@rneui/base";
import {colors, fonts, sizes} from "../../../../constant";

import {useNavigation} from "@react-navigation/native";

function CFooter(props){
  const btf=bt_footer
  const theme=useColorScheme();
  const navigation=useNavigation();
  const [s_v,selectv]=useState(0)

  useEffect(()=>{
    selectv(props.t_value)
  })
  return (
    <View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Icon name={"shopping-outline"} type={"material-community"} color={colors.secondary} />
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View>
            <Text style={btf.text_1} >$67.00</Text>
          </View>

        </View>

      </View>
      <TouchableOpacity  onPress={()=>{
        navigation.navigate('Checkout')
      }} style={{height:44,backgroundColor:colors.secondary,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center',elevation:5,marginTop:10}} activeOpacity={0.8}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={[btf.text_3,{marginRight:5}]}>Pay with </Text>
          {s_v==0?(<Icon name={"apple-o"} size={20} color={colors.white} type={"antdesign"} />):(<View></View>)}
          {s_v==1?(<Icon name={"cc-visa"} size={20} color={colors.white} type={"font-awesome"} />):(<View></View>)}
          {s_v==2?(<Icon name={"bitcoin"} size={20} color={colors.white} type={"font-awesome-5"} />):(<View></View>)}
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default  CFooter;
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
