import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification() {
  const [isFocused,setIsFocused] = useState(false);
  const [isFieled,setIsFieled] = useState(false);
  const [name,setName] = useState<string>();
  const navigation = useNavigation();


  function handleInputBlur(){
    setIsFocused(false);
    setIsFieled(!!name);
  }

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputChange(value:string){
    setIsFieled(!!value);
    setName(value);
  }

  async function handleSubmit(){
    if(!name)
      return Alert.alert('Me diz como chamar você');
    try{
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation',{
        title:'Prontinho',
        subTitle:'Agora vamos começar a cuidar das suas plantinhas com muito carinho.',
        buttonTitle:'Começar',
        icon:'slime',
        nextScreen:'PlantSelect'
      });
    }catch{
      return Alert.alert('Não foi possivel salva seu nome de usuário');
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>:D</Text>

              <Text style={styles.title}>Como podemos{"\n"} chamar você?</Text>
            </View>
            <TextInput 
              style={[
                styles.input,
                (isFocused || isFieled) && {borderColor:colors.green}
              ]} 
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus} 
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>
              <Button
                title='Confirmar' 
                onPress={handleSubmit} 
              />
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>  
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  header: {
    alignItems: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.green,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    alignItems: "center",
    fontFamily: fonts.heading,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
