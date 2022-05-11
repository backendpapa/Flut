import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts, sizes} from '../../constant';
import TicketUpcoming from "./components/TicketUpcoming/TicketUpcoming";
import Ticketpast from "./components/TicketPast/Ticketpast";


function Ticket() {
  const theme = useColorScheme();
  const [select, setselect] = useState(false);
  const ticket = ticket_style;
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
      <View
        style={[
          ticket.header,
          {backgroundColor: theme == 'dark' ? colors.orange : colors.green},
        ]}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            oveflow: 'hidden',
            bottom: 0,
            margin: 15,
          }}>
          <Text style={ticket.text_1}>Tickets</Text>
          <View style={[ticket.contain, {marginTop: 40}]}>
            <TouchableOpacity
              activeOpacity={0.7}
               onPress={()=>{
                 setselect(false)
               }}
              style={[
                select==false?ticket.button:ticket.empty,
                {},
              ]}>
              <Text style={ticket.text_2}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>{
                setselect(true)
              }}
              style={[
                select==true?ticket.button:ticket.empty,
                {marginLeft: 10},
              ]}>
              <Text style={ticket.text_2}>Past Tickets</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     <View >
       <View style={ticket.container}>
         {select==false?(<View >
           <TicketUpcoming />
         </View>):(<View >
    <Ticketpast />
         </View>)}

       </View>
     </View>
    </View>
  );
}
export default Ticket;

const ticket_style = StyleSheet.create({
  container: {
    height: '80%',
    padding: 15,
    overflow:'hidden'
  },
  header: {
    height: 200,
    padding: 15,
  },
  text_1: {
    fontSize: sizes.h18,
    color: colors.white,
    marginBottom: 7,
    fontFamily: fonts.DmSans_Bold,
  },
  text_2: {
    fontSize: sizes.h13,
    color: colors.white,
    marginBottom: 7,
    fontFamily: fonts.DmSans_Bold,
  },
  button: {
    borderBottomColor: colors.white,
    borderBottomWidth:2,
    paddingBottom:10
  },
  empty:{
    paddingBottom:10
  },
  contain: {
    display: 'flex',
    flexDirection: 'row',
  },
});
