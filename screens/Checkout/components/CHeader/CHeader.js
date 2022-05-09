import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import {Icon} from "@rneui/base";
import {colors, fonts, sizes} from "../../../../constant";
import {useNavigation} from "@react-navigation/native";


function CHeader(){
  const ch=ch_header;
  const theme=useColorScheme();
  const navigation=useNavigation()
  return (
    <View>
      <View style={ch.container}>
        <View >
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }} activeOpacity={0.8}>
            <Icon
              name={'arrow-left'}
              color={theme=='dark'?colors.white:colors.secondary}
              type={'material-community'}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[ch.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>La Rosalia</Text>
        </View>

        <View >
          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              name={'close'}
              color={theme=='dark'?colors.white:colors.secondary}
              type={'material-community'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*  Ticket details*/}

      <View style={{marginTop:15}}>
        <Text style={[ch.text_2,{color:theme=='dark'?colors.white:'red'}]}>Remaining time 20.32 </Text>

      </View>
    </View>
  )
}
export default CHeader;

const ch_header=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text_1:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h18,
    textAlign:'center'
  },
  text_2:{
    fontFamily:fonts.DmSans_Regular,
    fontSize:sizes.h13,

    textAlign:'center'
  },
})
