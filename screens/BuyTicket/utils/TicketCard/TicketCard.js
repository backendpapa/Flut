import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {colors, fonts, sizes} from '../../../../constant';
import {Picker} from '@react-native-picker/picker';

const ticketAmountValue = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];
function TicketCard(props) {
  const theme = useColorScheme();
  const [value, setValue] = useState('0');
  const tc = tc_style;
  return (
    <View style={{marginBottom: 35}}>
      <View>
        <Text
          style={[
            tc.text_1,
            {color: theme == 'dark' ? colors.white : colors.secondary},
          ]}>
          {props.type}
        </Text>
        <View style={tc.container}>
          <View>
            <Text
              style={[
                tc.text_2,
                {color: theme == 'dark' ? colors.white : colors.secondary},
              ]}>
              ${props.amount} <Text style={tc.text_3}>+ $2 Fee</Text>
            </Text>
            <Text
              style={[
                tc.font_regular,
                {color: theme == 'dark' ? colors.white : colors.secondary},
              ]}>
              Sales end on Apr 17, 2022
            </Text>
          </View>
          <View>
            {props.is_available == false ? (
              <Text
                style={
                  (tc.font_regular,
                  {color: theme == 'dark' ? colors.white : colors.secondary})
                }>
                Sold Out!
              </Text>
            ) : (
              <View>
                <Picker
                  style={{width:100,fontFamily:fonts.DmSans_Regular,color:theme=='dark'?colors.white:colors.secondary}}
                  selectedValue={value}
                  dropdownIconColor={theme=='dark'?colors.white:colors.secondary}

                  onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
                  {ticketAmountValue.map((item, i) => {
                    return <Picker.Item fontFamily={fonts.DmSans_Regular} key={i} label={item.toString()} value={item.toString()} />;
                  })}

                </Picker>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
export default TicketCard;
const tc_style = StyleSheet.create({
  container: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
});
