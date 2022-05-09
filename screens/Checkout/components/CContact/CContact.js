import React from 'react'
import {View, Text, StyleSheet, useColorScheme, TextInput} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";

function CContact(){
  const cc=cc_style;
  const theme=useColorScheme()
  return(
    <View>
      <Text style={[cc.text_1,{color:theme=='dark'?colors.white:colors.grey}]} >Contact info</Text>

      <View style={cc.contact_container}>
        <View style={{flex:1,marginRight:14}}>
          <Text style={[cc.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>Name</Text>
          <TextInput placeholder={"Your name"} placeholderTextColor={theme=='dark'?colors.white:colors.grey} style={[cc.text_input,{color:theme=='dark'?colors.white:colors.secondary}]} />
        </View>
        <View style={{marginLeft:14,flex:1}}>
          <Text style={[cc.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>Surname</Text>
          <TextInput placeholder={"Your surname"}  placeholderTextColor={theme=='dark'?colors.white:colors.grey} style={[cc.text_input,{color:theme=='dark'?colors.white:colors.secondary}]} />
        </View>
      </View>
    </View>
  )
}
export default CContact;

const cc_style=StyleSheet.create({
  text_1: {
    fontFamily: fonts.DmSans_Bold,
    fontSize: sizes.h15,
  },
  text_2: {
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h15,
  },
  text_3: {
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h12,
    color: 'grey',
  },
  font_regular: {
    fontFamily: fonts.DmSans_Regular,
  },
  contact_container:{
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  text_input:{
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    marginBottom: 30,
    fontFamily:fonts.DmSans_Regular
  }
})
