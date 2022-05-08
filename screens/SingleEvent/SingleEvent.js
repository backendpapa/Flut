import React from 'react';
import {View, Text,StatusBar} from 'react-native';
import SEHeader from "./components/SEHeader/SEHeader";

function SingleEvent() {
  return (
    <View>
      <StatusBar translucent backgroundColor='transparent' />
      <SEHeader />

    </View>
  );
}
export default SingleEvent;
