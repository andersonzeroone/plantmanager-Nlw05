import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import avatar from '../assets/avatar.png'
import fonts from '../styles/fonts';

export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Óla,</Text>
        <Text style={styles.userName}>Anderson</Text>    
      </View>

      <Image style={styles.image} source={avatar}/>    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    marginTop:getStatusBarHeight(),
  },
  greeting:{
    fontSize:32,
    color:colors.heading,
    fontFamily:fonts.text
  },
  userName:{
    fontSize:32,
    fontFamily:fonts.heading,
    color:colors.heading,
    lineHeight:40
  },
  image:{
    height:70,
    width:70,
    borderRadius:35
  }
})