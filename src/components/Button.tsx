import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  Text,
  TouchableOpacityProps 
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
interface ButtonProps extends TouchableOpacityProps{
  title:string;
}

export function Button({title,...rest}:ButtonProps){
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.green,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    height:56,
  },
  text:{
    color:colors.white,
    fontSize:24,
    fontFamily:fonts.heading
  }
})

