import React from 'react';
import {View, Text, StatusBar, useColorScheme, StyleSheet, ScrollView} from 'react-native';
import {colors} from "../../constant";
import HomeLocation from "./components/HomeLocation/HomeLocation";
import HomeMainCard from "./components/HomeMainCard/HomeMainCard";
import Card from "../_sharedComponents/Card/Card";


//
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
const events = [
  {title: "The Krooks",date: "Thu, Apr 19 · 20.00 Pm", location:"Razzmatazz",img:one},
  {title: "The Wombats",date: "Fri, Apr 22 · 21.00 Pm", location:"Sala Apolo",img:two},
  {title: "Foster The People",date: "Mon, Apr 25  · 17.30", location:"La Monumental",img:three},
  {title: "The Krooks",date: "Thu, Apr 19 · 20.00 Pm", location:"Razzmatazz",img:one},
  {title: "The Wombats",date: "Fri, Apr 22 · 21.00 Pm", location:"Sala Apolo",img:two},
  {title: "Foster The People",date: "Mon, Apr 25  · 17.30", location:"La Monumental",img:three},
]

function Home(){
  const theme=useColorScheme();
  const h=home_style;
  return (
    <View style={{backgroundColor:theme=='dark'?colors.secondary:colors.white}}>
      <StatusBar translucent barStyle={theme=="dark"?"light-content":"dark-content"} backgroundColor='transparent' />
     <View style={h.container}>
       <View style={{marginTop:10}}>
         <HomeLocation />
       </View>
       <View style={{marginTop:10}}>
          <HomeMainCard />
       </View>
      <View style={{flex:1}}>
        <View style={{marginTop:20,height:'100%',overflow:'hidden'}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%'}}>
            {events.map((item,i) => {
              return <Card key={i} title={item.title} date={item.date} location={item.location} img={item.img} />
            })}

          </ScrollView>
        </View>
      </View>

     </View>
    </View>
  )
}
export default Home;

const home_style = StyleSheet.create({
  container:{
    paddingTop:45,
    height:'100%',
    padding:15
  },
})
