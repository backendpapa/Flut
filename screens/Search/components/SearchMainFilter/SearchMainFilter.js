import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Filter from '../../../_sharedComponents/Filter/Filter';
const filters = [
  {
    content: [
      {title: 'Music', selected: true},
      {title: 'Business', selected: false},
      {title: 'Food & Drink', selected: false},
      {title: 'Business', selected: false},
    ],
    title: 'Today i would like...',
  },

  {
    content: [
      {title: 'Concert', selected: true},
      {title: 'Conference', selected: false},
      {title: 'Expo', selected: false},
    ],
    title: 'What kind of event?',
  },

  {
    content: [
      {title: 'English', selected: true},
      {title: 'Spanish', selected: false},
      {title: 'Italian', selected: false},
    ],
    title: 'Languages',
  },
];
function SearchMainFilter() {

  const [_filter,setFilter]=useState(filters)

  const setFilterFunction = (data) => {
      setFilter(data)
  }
  return (
    <View>
      <View style={{marginBottom:40}}>
        {_filter.map((item,i)=>{
          return <View key={i} style={{marginTop:30}}>
            <Filter  num={i} item={item} set={setFilterFunction} actualD={_filter}  />
          </View>
        })}
      </View>
    </View>
  );
}
export default SearchMainFilter;
