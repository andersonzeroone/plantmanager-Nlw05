import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  RefreshControlComponent
} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {  useRoute , useNavigation} from "@react-navigation/core";
import DateTimePicker,{Event} from '@react-native-community/datetimepicker';
import {format, isBefore} from 'date-fns';
import { PlantProps, savePlant, loadPlant } from '../libs/storage';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import waterdrop from '../assets/waterdrop.png';

import { Button } from '../components/Button';

interface Params{
  plant:PlantProps;
}

export function PlantSave(){
  const route = useRoute();
  const navigation = useNavigation();
  const {plant} = route.params as Params;

  const [selectedDatetime,setSelectedDatetime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  function handleChangerTime(event:Event, dateTime:Date | undefined){
    if(Platform.OS === 'android'){
      setShowDatePicker(oldState => !oldState);
    }

    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDatetime(new Date());
      return Alert.alert('Escolha uma data no futuro ! 🕛');
    }

    if(dateTime){
      setSelectedDatetime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid(){
    setShowDatePicker(oldState => !oldState)
  }


  async function handleSave(){

    try{
      await savePlant({
        ...plant,
        dateTimeNotification:selectedDatetime
      });

      navigation.navigate('Confirmation',{
        title:'Tudo certo!',
        subTitle:'Fique tranquilo que sempre vamos lembrar vocẽ de cuidar de sua plantinha.',
        buttonTitle:'Começar',
        icon:'hug',
        nextScreen:'MyPlants'
      });
    }catch{
      Alert.alert('Não foi possivel salvar! 😔');
    }
  }


  return(
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri
            uri={plant.photo}
            height={150}
            width={150}
          />

          <Text style={styles.plantName}>
            {plant.name}
          </Text>

          <Text style={styles.plantAbout}>
            {plant.about}
          </Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image
              source={waterdrop}
              style={styles.tipImage}
            /> 
            <Text style={styles.tipText}>
              {plant.water_tips} 
            </Text> 
          </View>

          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado: 
          </Text>

          { showDatePicker &&(
            <DateTimePicker
              value={selectedDatetime}
              mode='time'
              onChange={handleChangerTime}
            />
          )}

          {
            Platform.OS === 'android' && (
              <TouchableOpacity  
                style={styles.dateTimePickerButton}
                onPress={handleOpenDateTimePickerForAndroid}
              >
                <Text style={styles.dateTimePickerText}>
                  {`Mudar horário - ${format(selectedDatetime,'HH:mm')}`}
                </Text>
              </TouchableOpacity>
            )
          }

          <Button
            title='Cadastrar planta'
            onPress={handleSave}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor:colors.shape,
  },
  plantInfo:{
    flex:1,
    paddingHorizontal:30,
    paddingVertical:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.shape
  },
  plantName:{
    fontFamily:fonts.heading,
    fontSize:24,
    color:colors.heading,
    marginTop:15
  },
  plantAbout:{
    textAlign:'center',
    fontFamily:fonts.text,
    color:colors.heading,
    fontSize:17,
    marginTop:10
  },
  controller:{
    backgroundColor:colors.white,
    paddingHorizontal:20,
    paddingTop:20,
    paddingBottom:getBottomSpace() || 20,
  },
  tipContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:colors.blue_light,
    padding:20,
    borderRadius:20,
    position:'relative',
    bottom:60
  },
  tipImage:{
    width:56,
    height:56,
  },
  tipText:{
    flex:1,
    marginLeft:20,
    fontFamily:fonts.text,
    color:colors.blue,
    fontSize:17,
    
  },
  alertLabel:{
    textAlign:'center',
    fontFamily:fonts.complement,
    color:colors.heading,
    fontSize:12,
    marginBottom:5
  },
  dateTimePickerButton:{
    width:'100%',
    alignItems:'center',
    paddingVertical:40
  },
  dateTimePickerText:{
    color:colors.heading,
    fontSize:24,
    fontFamily:fonts.text
  }
});