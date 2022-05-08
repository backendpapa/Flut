import React from 'react';
import {View, Text, StatusBar, useColorScheme} from 'react-native';
import {colors, fonts, sizes} from "../../constant";

//Screens
import SEHeader from "./components/SEHeader/SEHeader";
import SECalender from "./components/SECalender/SECalender";
import SELocation from "./components/SELocation/SELocation";
import SERefund from "./components/SERefund/SERefund";
import SEAbout from "./components/SEAbout/SEAbout";
import SEFooter from "./components/SEFooter/SEFooter";



function SingleEvent() {
  const theme=useColorScheme();
  return (
    <View style={{position:'relative',height:'100%',backgroundColor:theme=='dark'?colors.secondary:colors.white}}>
      <StatusBar translucent backgroundColor='transparent' />
      <SEHeader />
      <View style={{margin:15}}>
          <Text style={{fontFamily:fonts.DmSans_Bold,color:theme=='dark'?colors.white:colors.secondary,fontSize:sizes.h22}}>La Rosalia</Text>
          <View style={{marginTop:20}}>
            <SECalender />
          </View>
        <View style={{marginTop:30}}>
          <SELocation />
        </View>
        <View style={{marginTop:30}}>
          <SERefund />
        </View>

        <View style={{marginTop:40}}>
          <SEAbout />
        </View>
      </View>

      <View style={{position:'absolute',bottom:0,width:'100%'}}>
        <SEFooter />
      </View>

    </View>
  );
}
export default SingleEvent;


