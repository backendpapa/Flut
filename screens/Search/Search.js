import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TextInput, TouchableOpacity,
} from 'react-native';
import {colors, fonts, sizes} from '../../constant';
import {Icon} from '@rneui/base';
import SearchInput from "./components/SearchInput/SearchInput";

function Search() {
  const s = s_style;
  const theme = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: theme == 'dark' ? colors.secondary : colors.white,
      }}>
      <StatusBar
        translucent
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <View style={s.container}>
       <SearchInput />
      </View>
    </View>
  );
}
export default Search;

const s_style = StyleSheet.create({
  container: {
    paddingTop: 65,
    height: '100%',
    padding: 15,
  },
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
