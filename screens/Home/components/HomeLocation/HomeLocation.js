import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {colors, fonts, sizes} from '../../../../constant';
import {Picker} from '@react-native-picker/picker';
import {Icon} from "@rneui/base";
import {countryList} from "./data";


function HomeLocation() {
  const hc = hc_style;
  const theme = useColorScheme();
  const [country, setCountry] = useState('Barcelona');
  return (
    <View>
      <Text
        style={[
          hc.text_2,
          {color: theme == 'dark' ? colors.white : colors.grey},
        ]}>
        Find event in
      </Text>

     <View style={hc.picker_select}>
      <View style={{marginTop:-10,marginLeft:-2}}>
        <Icon name={"location-outline"} color={theme=='dark'?colors.white:colors.secondary} size={20}  type={"ionicon"} />
      </View>
       <Text style={[hc.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>{country}</Text>
       <Picker
         style={{width:40,marginTop:-3}}
         selectedValue={country}
         mode={'dropdown'}
         dropdownIconColor={theme=='dark'?colors.white:colors.secondary}
         onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
         {countryList.map((item,i)=>{
           return  <Picker.Item color={theme=='dark'?colors.secondary:colors.secondary} key={i} label={item} value={item} />
         })}

       </Picker>
     </View>

      <View style={{marginTop:10}}>
        <Text style={[hc.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>Popular in {country}</Text>
      </View>
    </View>
  );
}
export default HomeLocation;
const hc_style = StyleSheet.create({
  text_2: {
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h15,
  },
  text_1: {
    fontSize: sizes.h16,
    marginBottom: 7,
    fontFamily:fonts.DmSans_Bold
  },
  picker_select:{
    display:'flex',
    flexDirection:"row",
    alignItems:'center',
  }
});
