import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import t1 from "../../../../assets/images/t1.png";
import t2 from "../../../../assets/images/t2.png";
import t3 from "../../../../assets/images/t3.png";
import t4 from "../../../../assets/images/t4.png";
import Card from "../../../_sharedComponents/Card/Card";
import {fonts, sizes} from "../../../../constant";



const event2 = [
  {year:2022,content:[
      {title: "The Weeknd",date: "Thu, Apr 19 · 20.00 Pm", ticket:2,img:t1},
      {title: "The Kilelers",date: "Fri, Apr 22 · 21.00 Pm", ticket:1,img:t2},
    ]
  },
  {year:2021,content:[
      {title: "Nik Mulvey",date: "Thu, Apr 19 · 20.00 Pm", ticket:2,img:t3},

    ]
  }
]


function Ticketpast(){
  return(
    <View style={{height:"100%"}}>
     <View style={{height:"100%"}}>
       <View style={{height:"100%"}}>
          <ScrollView  showsVerticalScrollIndicator={false} >
            {event2.map((item,i)=>{
              return <View style={{marginTop:10}} key={i}>
                <Text style={{fontFamily: fonts.DmSans_Bold,
                  fontSize: sizes.h16,
                  }} >{item.year}</Text>

                <View>
                  {item.content.map((_item,j)=>{
                    return <Card key={j} c_type={'card-ticket'} t_date={_item.date} t_title={_item.title} t_ticket={_item.ticket} t_img={_item.img}  />
                  })}
                </View>
              </View>
            })}
          </ScrollView>
       </View>
     </View>
    </View>
  )
}
export default Ticketpast;
