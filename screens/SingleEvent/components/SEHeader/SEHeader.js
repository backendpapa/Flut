import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import event_img from '../../../../assets/images/event_img.png';
import {Icon} from '@rneui/base';
import {useNavigation} from "@react-navigation/native";


function SEHeader() {
  const navigation=useNavigation();
  const seh = se_header;
  const [like, setLike] = useState(false);
  return (
    <View>
      <ImageBackground style={seh.container} source={event_img}>
        <View style={seh.inner_container}>
          <View>
            {/*  Back to previous screen icon*/}
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{
              navigation.goBack()
            }}>
              <Icon
                name={'arrow-left'}
                color={'white'}
                type={'material-community'}
              />
            </TouchableOpacity>
          </View>
          <View style={seh.icon_right}>
            <TouchableOpacity
              onPress={() => {
                setLike(!like);
              }}
              activeOpacity={0.8}>
              <Icon
                name={like == true ? 'cards-heart' : 'cards-heart-outline'}
                color={'white'}
                type={'material-community'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{marginLeft: 10}}
              activeOpacity={0.8}>
              <Icon
                name={'ios-share-social-outline'}
                color={'white'}
                type={'ionicon'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default SEHeader;

const se_header = StyleSheet.create({
  container: {
    height: 250,
  },
  inner_container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon_right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
