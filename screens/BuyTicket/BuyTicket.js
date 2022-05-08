import React from 'react'
import {View, Text, StyleSheet, useColorScheme, StatusBar, ScrollView, TouchableOpacity} from "react-native";
import {colors} from "../../constant";
import BTNav from "./components/BTNav/BTNav";
import TicketCard from "./utils/TicketCard/TicketCard";
import {Icon} from "@rneui/base";
import BTFooter from "./components/BTFooter/BTFooter";


const ticket=[
  {type:"Early Bird",is_available:false,amount:"45.00"},
  {type:"Second Release",is_available:true,amount:"55.00"},
  {type:"General",is_available:true,amount:"65.00"}
]

function BuyTicket(){
  const bt=bt_style
  const theme=useColorScheme();
  return (
   <View>
     <StatusBar translucent barStyle={theme=="dark"?"light-content":"dark-content"} backgroundColor='transparent' />
     <View style={[bt.container,{backgroundColor:theme=='dark'?colors.secondary:colors.white,position:'relative'}]}>
        <BTNav />
       <View style={{marginTop:'25%',display:'flex'}}>
         <ScrollView style={{marginBottom:70}} showsVerticalScrollIndicator={false}>
           {ticket.map((item,i)=>{
             return <View key={i}>
               <TicketCard  type={item.type} amount={item.amount} is_available={item.is_available} />
               {i!==ticket.length-1?( <View
                 style={{
                   borderBottomColor: '#E8E8E8',
                   borderBottomWidth: 1,
                   marginBottom:35
                 }}
               />
               ):(<View></View>)}
             </View>

           })}


         </ScrollView>
       </View>
     </View>
     <View style={{position:'absolute',width:'100%',bottom:0,padding:15,backgroundColor:theme=='dark'?colors.accent:colors.ultra,height:120,display:'flex',justifyContent:'center'}}>
          <BTFooter />
     </View>
   </View>
  )
}
export default  BuyTicket;

const bt_style=StyleSheet.create({
  container:{
    paddingTop:45,
    height:'100%',
    padding:15
  }
})
