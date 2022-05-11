import React from 'react'
import {View, Text, useColorScheme,StyleSheet,TouchableOpacity} from 'react-native'
import {CheckBox} from "@rneui/base";
import {colors, fonts, sizes} from "../../../constant";


function Filter(props){
  const f = f_styles
  const theme=useColorScheme()
  return (
    <View>
      <Text style={{color:theme=='dark'?colors.white:colors.secondary}}>{props.item.title}</Text>

      <View>
        <View style={{marginTop:20}}>
          {props.item.content.map((_items,i)=>{
            return <TouchableOpacity activeOpacity={0.8}  onPress={()=>{
              let newarr=[...props.actualD]
              props.item.content.forEach(s=>{
                s.selected=false
              });
              props.item.content[i].selected=true
              console.log(props.item.content,"console")
              newarr[props.num].content=props.item.content;
              props.set(newarr)
            }
            }  key={i} style={f.container}>
              <Text style={[f.text_1,{color:theme=='dark'?colors.white:colors.secondary}]}>{_items.title}</Text>
              <CheckBox

                size={20}
                containerStyle={{marginLeft:-8,marginRight:1,backgroundColor:'transparent',width:30,marginTop:-1}}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={_items.selected}
              />
            </TouchableOpacity>
          })}
        </View>
      </View>
    </View>
  )
}
export default Filter;

const f_styles=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text_1: {
    fontFamily: fonts.DmSans_Bold,
    fontSize: sizes.h16,
    marginBottom: 7,
  },
})
