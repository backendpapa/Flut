import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TextInput, TouchableOpacity,
} from 'react-native';
import {colors, fonts, sizes} from '../../../../constant';
import {Icon} from '@rneui/base';

function SearchInput(props) {
  const s = s_style;
  const theme = useColorScheme();
  const [show,setShow]=useState(props.showstate)
  useEffect(()=>{
    setShow(props.showstate)
  })
  return (
       <View style={{height:40}}>
         {show==false?( <View style={{position:'relative',display:'flex',flexDirection:'row',alignItems:'center'}}>
           <TextInput placeholder={'Search for...'} placeholderTextColor={colors.grey} style={[s.search_input,{color:theme=='dark'?colors.white:colors.secondary}]} />
           <TouchableOpacity activeOpacity={0.8} style={s.search_button}>
             <Icon size={20}  color={theme=='dark'?colors.white:colors.secondary} name={'search'} type={'octicon'} />
           </TouchableOpacity>
         </View>):(<View style={{position:'relative',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

           <TouchableOpacity activeOpacity={0.8} >
             <Icon size={20}  color={theme=='dark'?colors.white:colors.secondary} name={'arrowleft'} type={'antdesign'} />
           </TouchableOpacity>

          <Text style={[s.text,{color:theme=='dark'?colors.white:colors.secondary}]}>Filters</Text>

           <TouchableOpacity onPress={()=>{
             props.filter(false)
           }} activeOpacity={0.8} >
             <Icon size={20}  color={theme=='dark'?colors.white:colors.secondary} name={'close'} type={'antdesign'} />
           </TouchableOpacity>
         </View>)}
       </View>
  );
}
export default SearchInput;

const s_style = StyleSheet.create({

  search_input: {
    height: 40,
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h16,

  },
  search_button: {
    position: 'absolute',
    right: 0,
  },
  text:{
    fontFamily:fonts.DmSans_Bold,
    fontSize:sizes.h20
  }
});
