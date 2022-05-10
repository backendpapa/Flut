import React from 'react';
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

function SearchInput() {
  const s = s_style;
  const theme = useColorScheme();
  return (
        <View style={{position:'relative',display:'flex',flexDirection:'row',alignItems:'center'}}>
          <TextInput placeholder={'Search for...'} placeholderTextColor={colors.grey} style={[s.search_input,{color:theme=='dark'?colors.white:colors.secondary}]} />
          <TouchableOpacity activeOpacity={0.8} style={s.search_button}>
            <Icon size={20}  color={theme=='dark'?colors.white:colors.secondary} name={'search'} type={'octicon'} />
          </TouchableOpacity>
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
});
