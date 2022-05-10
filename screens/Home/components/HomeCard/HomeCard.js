import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, fonts, sizes} from '../../../../constant';

// Help
import one from '../../../../assets/images/1.png';
import {Icon} from '@rneui/base';
import {useNavigation} from "@react-navigation/native";

function HomeCard(props) {
  const hc = hc_style;
  const [like, setLike] = useState(false);
  const theme = useColorScheme();
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("SingleEvent")
      }} activeOpacity={0.8} style={[hc.container]}>
        <View>
          <Image
            source={props.img}
            style={{width: 80, height: 100}}
            resizeMode={'contain'}
          />
        </View>

        <View style={{marginLeft: 10}}>
          <Text
            style={[
              hc.text_2,
              {color: theme == 'dark' ? colors.white : colors.secondary},
            ]}>
            {props.date}
          </Text>
          <Text
            style={[
              hc.text_1,
              {color: theme == 'dark' ? colors.white : colors.secondary},
            ]}>
            {props.title}
          </Text>
          <View style={hc.location_flex}>
            <Icon size={20} name={'location-outline'} type={'ionicon'} />
            <Text
              style={[
                hc.text_2,
                {color: theme == 'dark' ? colors.white : colors.secondary},
              ]}>
              {props.location}
            </Text>
          </View>
        </View>

        <View style={[hc.location_flex2]}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setLike(!like);
              }}
              activeOpacity={0.8}>
              <Icon
                name={like == true ? 'cards-heart' : 'cards-heart-outline'}
                color={theme == 'dark' ? colors.grey_light : 'red'}
                type={'material-community'}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 10}} activeOpacity={0.8}>
              <Icon
                name={'ios-share-social-outline'}
                color={theme == 'dark' ? colors.grey_light : colors.secondary}
                type={'ionicon'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default HomeCard;
const hc_style = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  text_1: {
    fontFamily: fonts.DmSans_Bold,
    fontSize: sizes.h16,
    marginBottom: 7,
  },
  text_2: {
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h13,
    marginBottom: 7,
  },
  text_3: {
    fontFamily: fonts.DmSans_Bold,
    fontSize: sizes.h13,
  },
  location_flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  location_flex2: {
    position: 'absolute',
    right: 0,
    marginRight: 5,
  },
});
