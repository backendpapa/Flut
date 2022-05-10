import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, useColorScheme, Image} from "react-native";
import {fonts, sizes,colors} from "../../../../constant";
import {CheckBox, Icon} from "@rneui/base";

import apple from '../../../../assets/images/apple.png'
import visa from '../../../../assets/images/visa.png'
import mc from '../../../../assets/images/mastercard.png'
import bitcoin from '../../../../assets/images/bitcoin.png'

const payements=[
  {title:"Apple Play",icons:["cc-apple-pay"],checked:true,type:"font-awesome-5"},
  {title:"Credit Card",icons:["cc-visa"],checked:false,type:"font-awesome"},
  {title:"Bitcoin",icons:["bitcoin"],checked:false,type:"material-community"}
]

function CPayment(props){
  const theme=useColorScheme();
  const cp=cp_style
  const [checked,setchecked]=useState(false)
  const [pmethod,setPmethod]=useState(payements)
  const [v3,set_v3]=useState(0)

  useEffect(()=>{
    props.handlePro(v3)
  })
  return (
    <View>
      <Text style={[cp.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>Payment Methods</Text>

     <View style={{marginTop:10}}>
       {pmethod.map((item,i)=>{
         return  <View key={i} style={cp.check_container}>
           {/* vIEW 1*/}
           <View style={cp.check_inner}>
             <View style={{marginLeft:-20,marginRight:-10}}>
               <CheckBox
                 size={23}
                 containerStyle ={{backgroundColor: 'transparent'}}
                 checkedIcon='dot-circle-o'
                 uncheckedIcon='circle-o'
                 checked={item.checked}
                 onPress={(e)=>{
                   let newArr = [...pmethod]; // copying the old datas array
                   newArr.forEach(s=>{
                     s.checked=false
                   })
                   newArr[i].checked =true;
                   setPmethod(newArr)
                   set_v3(i)
                 }}
               />
             </View>
             <Text style={[cp.text_2,{color:theme=='dark'?colors.white:colors.secondary}]}>{item.title}</Text>
           </View>

           {/*  vIEW 2*/}
           <View >

               <Icon name={item.icons[0] } color={theme=='dark'?colors.white:colors.secondary} type={item.type} />

           </View>
         </View>
       })}
     </View>
    </View>
  )
}
export default CPayment;

const cp_style=StyleSheet.create({
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
  check_container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between"
  },
  check_inner:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center"
  }
})
