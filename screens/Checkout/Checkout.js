import React, {useState} from 'react'
import {View, Text, StyleSheet, useColorScheme, StatusBar} from "react-native";
import CHeader from "./components/CHeader/CHeader";
import CContact from "./components/CContact/CContact";
import {colors, fonts, sizes} from "../../constant";
import CPayment from "./components/CPayment/CPayment";
import CFooter from "./components/CFooter/CFooter";


function Checkout(){
  const theme=useColorScheme();
  const [v2,setv2]=useState(0)
  const c=c_style
  const setMainState =(info) =>{
    setv2(info)
    console.log(v2)
  }
  return (
    <View>
      <StatusBar translucent barStyle={theme=="dark"?"light-content":"dark-content"} backgroundColor='transparent' />
     <View style={[c.container,{backgroundColor:theme=='dark'?colors.secondary:colors.white}]} >
       <CHeader />
       <View style={{marginTop:70}}>
         <CContact />
         <View style={{marginTop:40}}>
           <CPayment handlePro={setMainState} />
         </View>
         <View style={{marginTop:25}}>
           <Text style={[c.text_2,{color:theme=="dark"?colors.white:colors.secondary}]}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </Text>
         </View>
       </View>
     </View>
      <View style={{position:'absolute',width:'100%',bottom:0,padding:15,backgroundColor:theme=='dark'?colors.accent:colors.ultra,height:120,display:'flex',justifyContent:'center'}}>
        <CFooter t_value={v2}/>
      </View>
    </View>
  )
}
export default  Checkout;

const c_style=StyleSheet.create({
  container:{
    paddingTop:45,
    height:'100%',
    padding:15
  },
  text_2: {
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h15,
  },
})
