import React from "react";

import {View,Text, StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {fonts,sizes,colors} from '../../../constant/index'
import splash_1 from "../../../assets/images/splash_1.png"
import { Icon } from "@rneui/base";






function SplashScreen({navigation}){


    const splash=SplashStyle
    return (
        <View  style={splash.splash_container}>
            <StatusBar backgroundColor={'#f9f9f9'} barStyle={'dark-content'} />
           <Text>Hello world</Text>
        </View>
    )
}

export default SplashScreen


const SplashStyle=StyleSheet.create({
    splash_container:{
        display:'flex',
        paddingTop:20,
        paddingLeft:25,
        paddingRight:25,
        backgroundColor:colors.background,
        height:'100%'
    },
    splash_text_1:{
        textAlign:'right',
        fontFamily:fonts.DmSans_Bold,
        fontSize:sizes.h18,
        color:colors.secondary

    },
    splash_text_2:{
        fontSize:sizes.h40,
        fontFamily:fonts.DmSans_Bold,
        marginRight:20,
        color:colors.secondary,
        lineHeight:40
    },
    splash_text_color:{
        color:colors.ultra
    },
    splash_text_desc:{
        fontSize:sizes.h14,
        color:colors.primary,
        fontFamily:fonts.DmSans_Regular
    },
    splash_button:{
        backgroundColor:colors.primary,
        height:70,
        width:70,
        borderRadius:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:0,

    }
})
