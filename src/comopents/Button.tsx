import { func } from 'joi';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text,TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
  title:string;
}

export function Button({title, ...rest}:ButtonProps){
  return (
    <TouchableOpacity
      {...rest}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonTex}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:colors.green,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    borderRadius:16,
    height:56,
    width:56,
    paddingHorizontal:10
  },
  buttonTex:{
    color:colors.white,
    fontSize:24
  }
})

