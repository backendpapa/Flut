import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TextInput, TouchableOpacity, ScrollView,
} from 'react-native';
import {colors, fonts, sizes} from '../../constant';
import {Icon} from '@rneui/base';
import SearchInput from "./components/SearchInput/SearchInput";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import SearchInfo from "./components/SearchInfo/SearchInfo";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import Card from "../_sharedComponents/Card/Card";
import SearchMainFilter from "./components/SearchMainFilter/SearchMainFilter";

const events = [
  {title: "The Krooks",date: "Thu, Apr 19 · 20.00 Pm", location:"Razzmatazz",img:one},
  {title: "The Wombats",date: "Fri, Apr 22 · 21.00 Pm", location:"Sala Apolo",img:two},
  {title: "Foster The People",date: "Mon, Apr 25  · 17.30", location:"La Monumental",img:three},
  {title: "The Krooks",date: "Thu, Apr 19 · 20.00 Pm", location:"Razzmatazz",img:one},
  {title: "The Wombats",date: "Fri, Apr 22 · 21.00 Pm", location:"Sala Apolo",img:two},
  {title: "Foster The People",date: "Mon, Apr 25  · 17.30", location:"La Monumental",img:three},
]

function Search() {
  const s = s_style;
  const theme = useColorScheme();
  const [showFilter,setShowFilter]=useState(false)

  const showFilterFunction =(status)=>{
    setShowFilter(status)
  }

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
      <View style={s.container}>

        {showFilter==false?(<View style={{height:"100%"}}>
          <SearchInput showstate={showFilter} filter={showFilterFunction} />
          <View style={{marginTop:10}}>
            <SearchFilter filter={showFilterFunction} />
          </View>
          <View style={{marginTop:25}}>
            <SearchInfo />
          </View>

          <View style={{marginTop:30,flex:1}}>
            <View style={{height:'100%',overflow:'hidden'}}>
              <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%'}}>
                {events.map((item,i) => {
                  return <Card key={i} c_type={"card-general"} title={item.title} date={item.date} location={item.location} img={item.img} />
                })}
              </ScrollView>
            </View>
          </View>
        </View>):(<View>
          <SearchInput showstate={showFilter} filter={showFilterFunction} />
         <View style={{marginTop:25}}>
           <SearchMainFilter />
         </View>
        </View>)}

      </View>
    </View>
  );
}
export default Search;

const s_style = StyleSheet.create({
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
  search_button: {
    position: 'absolute',
    right: 0,
  },
});
