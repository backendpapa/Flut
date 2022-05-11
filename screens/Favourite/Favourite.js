import React, {useState} from 'react'
import {View, Text, StatusBar, useColorScheme, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts, sizes} from "../../constant";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import Card from "../_sharedComponents/Card/Card";


const events = [
  {title: "The Krooks",date: "Thu, Apr 19 · 20.00 Pm", location:"Razzmatazz",img:one,liked:true},
  {title: "The Wombats",date: "Fri, Apr 22 · 21.00 Pm", location:"Sala Apolo",img:two,liked:true},
]

function Favourite(){
  const f=f_style
  const theme=useColorScheme()
  const [shoeF,setShowF]=useState(false)
  return (
    <View
      style={{
        backgroundColor: theme == 'dark' ? colors.secondary : colors.white,
      }}>
      <StatusBar
        translucent
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <View style={f.container}>


        {shoeF==false?(<View style={f.list_container}>
          <View>
            <Text style={[f.text_1,{color:theme=="dark"?colors.white:colors.secondary}]}>No Favourites yet</Text>
            <Text style={[f.text_2,{color:theme=="dark"?colors.white:colors.secondary,paddingLeft:70,paddingRight:70}]}>Make sure you have added event's in this section</Text>

            <TouchableOpacity onPress={()=>{
              setShowF(true)
            }} activeOpacity={0.8} style={[f.button,{backgroundColor:theme=='dark'?colors.orange:colors.green,marginTop:30}]}>
              <Text style={[f.text_2,{color:theme=="dark"?colors.white:colors.white,fontFamily: fonts.DmSans_Bold}]}>Add favourites</Text>
            </TouchableOpacity>
          </View>
        </View>):(<View>
         <View style={{display:'flex',flexDirection:'row'}}>
           <Text style={[f.text_3,{color:theme=="dark"?colors.white:colors.secondary}]}>Favourite</Text>
           <View style={{marginLeft:10,backgroundColor:theme=="dark"?colors.orange:colors.green,borderRadius:50,height:30,width:30,display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={[f.text_1,{color:'white'}]}>2</Text>
           </View>
         </View>
          <View style={{marginTop:10}}>
            {events.map((item,i) => {
              return <Card key={i} c_type={"card-general"} title={item.title} date={item.date} liked={item.liked} location={item.location} img={item.img} />
            })}
          </View>
        </View>)}

      </View>
    </View>
  )
}
export default Favourite;
const f_style = StyleSheet.create({
  container: {
    paddingTop: 65,
    height: '100%',
    padding: 15,

  },
  search_input: {
    height: 40,
    fontFamily: fonts.DmSans_Regular,
    fontSize: sizes.h16,
  },
  button: {
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    overflow:'hidden'
  },
  list_container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:"100%"
  },
  text_1: {
    fontSize: sizes.h18,

    fontFamily: fonts.DmSans_Bold,
    textAlign:'center'
  },
  text_2: {
    fontSize: sizes.h14,
    textAlign:'center',

    fontFamily: fonts.DmSans_Regular,
  },
  text_3: {
    fontSize: sizes.h22,
    fontFamily: fonts.DmSans_Bold
  },
});
