import React, {useState} from 'react'
import {View, Text, useColorScheme, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {colors, fonts, sizes} from "../../../../constant";
import {Icon} from "@rneui/base";
import fontisto from "react-native-vector-icons/Fontisto";
import Card from "../../../_sharedComponents/Card/Card";


import one from '../../../../assets/images/1.png'
import two from '../../../../assets/images/2.png'
import three from '../../../../assets/images/3.png'


const events = [
  {title: "The Krooks",date: "Thu, Apr 19 · 20.00 Pm", ticket:2,img:one},
  {title: "The Wombats",date: "Fri, Apr 22 · 21.00 Pm", ticket:1,img:two},
  {title: "Foster The People",date: "Mon, Apr 25  · 17.30", ticket:3,img:three},

]



function TicketUpcoming(){
  const ticket=ticket_style
  const theme=useColorScheme()
  const [select,setSelect]=useState(false)
  return (
    <View style={{height:'100%'}}>
      {select==false?<View style={{display:'flex',flex:1,width:'100%',justifyContent:"center", alignItems:'center',flexDirection:'row',overflow:'hidden'}} >
       <View style={{width:'100%'}}>
        <View >
          <Icon name={'ticket-alt'} size={130} style={{marginBottom:20}} color={colors.grey} type={"font-awesome-5"} />
          <Text style={[ticket.text_3,{textAlign:"center",color:theme=='dark'?colors.white:colors.secondary}]}> No ticket yet</Text>
          <Text style={[ticket.text_2,{textAlign:"center",color:theme=="dark"?colors.white:colors.secondary}]}>Make sure you'r in the same {"\n"} account that purchased your tickets</Text>
        </View>
         <TouchableOpacity onPress={()=>{
         setSelect(true)
         }} activeOpacity={0.8} style={[ticket.button,{ backgroundColor:theme=='dark'?colors.orange:colors.green}]}>
           <Text style={[ticket.text_4,{textAlign:"center",color:theme=='dark'?colors.white:colors.white}]}> Try again</Text>
         </TouchableOpacity>
       </View>
      </View>:<View>

      <View>
        <View style={{overflow:'hidden'}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%' }}>
            {events.map((item,i)=>{
              return  <Card key={i} c_type={'card-ticket'} t_title={item.title} t_ticket={item.ticket} t_date={item.date} t_img={item.img} />
            })}
          </ScrollView>
        </View>
      </View>
      </View>}
    </View>
  )
}
export default TicketUpcoming;

const ticket_style = StyleSheet.create({
  text_1: {
    fontSize: sizes.h18,
    color: colors.white,
    marginBottom: 7,
    fontFamily: fonts.DmSans_Bold,
  },
  text_2: {
    fontSize: sizes.h13,

    marginBottom: 7,
    fontFamily: fonts.DmSans_Regular,
  },
  text_3: {
    fontSize: sizes.h13,

    marginBottom: 7,
    fontFamily: fonts.DmSans_Bold,
  },
  button: {
    display:'flex',flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:55,
    width:'100%',
    marginTop:40,
    borderRadius:10
  },
  text_4: {
    fontSize: sizes.h14,


    fontFamily: fonts.DmSans_Bold,
  },
});

