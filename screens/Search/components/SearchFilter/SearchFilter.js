import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts, sizes} from "../../../../constant";
import {Icon} from "@rneui/base";

const eachfilters=[
  {title:"Music",selected:true},
  {title:"Business",selected:false},
  {title:"Food & Drink",selected:false},
  {title:"Art",selected:false},
  {title:"Football Commentary",selected:false},
]

function SearchFilter(props){
  const [filer,setFilter]=useState('')
  const [data,setData]=useState(eachfilters)
  const sf=sf_style
  const theme=useColorScheme()

  const setColor =(selected) =>{
    if(theme=='dark' && selected==true){
      return colors.orange;
    }else if(theme=='light' && selected==true ){
      return colors.green
    }else{
      return colors.grey_light
    }
  }

  const setTextColor =(selected) =>{
    if(theme=='dark' && selected==true){
      return colors.white;
    }else if(theme=='light' && selected==true ){
      return colors.white
    }else{
      return colors.secondary
    }
  }

  useEffect(()=>{

  })
  return (

    <View style={sf.container} >



      <View style={{display:'flex',flexDirection:'row',overflow:'hidden'}}>
      {/*  scrollview*/}
        <ScrollView horizontal={true} style={{width:'100%'}} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={()=>{
            props.filter(true)
          }} activeOpacity={0.8} style={sf.filter_flex}>
            {/*  filters*/}
            <Text style={[sf.filter_text,{color:theme=='dark'? colors.white: colors.secondary}]}>Filter</Text>
            <Icon name={"down"} style={{marginLeft:5}} color={theme=='dark'? colors.white: colors.secondary} size={10} type={"antdesign"} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={[sf.filter_flex,{marginLeft:20}]}>
            {/*  data*/}
            <Text style={[sf.filter_text,{color:theme=='dark'? colors.white: colors.secondary}]}>Data</Text>
            <Icon name={"down"} style={{marginLeft:5}} color={theme=='dark'? colors.white: colors.secondary} size={10} type={"antdesign"} />
          </TouchableOpacity>
          {
            data.map((item,i)=>{
              return  <TouchableOpacity onPress={()=>{
                let newarr=[...data]
                newarr.forEach(s=>{
                  s.selected=false;
                })
                newarr[i].selected=true
                setData(newarr)

              }
              } key={i} activeOpacity={0.8} style={[sf.selection_button,{backgroundColor:setColor(item.selected)}]}>
                {/*  data*/}
                <Text style={[sf.filter_text,{color:setTextColor(item.selected)}]}>{item.title}</Text>

              </TouchableOpacity>
            })
          }



        </ScrollView>
      </View>
    </View>
  )
}
export default  SearchFilter;
const sf_style=StyleSheet.create({
  filter_flex:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',

  },
  filter_text:{
    fontFamily:fonts.DmSans_Regular,
    fontSize:sizes.h14
  },
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  selection_button:{
    height:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minWidth:70,
    overflow:'hidden',
    paddingLeft:5,
    paddingRight:5,
    borderRadius:10,
    marginLeft:10
  }
})
