import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import colors from "../styles/colors";

import { Header } from "../components/Header";
import { EnviomentButtton } from "../components/EnviromentButton";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from "../components/Load";

import fonts from "../styles/fonts";
import api from "../services/api";

interface EnviromentProps{
  key:string;
  title:string;
}

interface PlantsProps{
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo:string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [enviromentSelected, setEnviromentSelected ] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page,setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loaderAll, setLoaderAll] = useState(false);
  

  function handleEnrivomentSelected(environment:string){
    setEnviromentSelected(environment);

    if(environment === 'all') return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)  
    );

    setFilteredPlants(filtered);
  }

  async function fechPlants(){
    const { data} = await api
      .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
      
      if(!data)
        return setLoading(true);

      if(page > 1){
        setPlants(oldValue => [...oldValue, data]);
        setFilteredPlants(oldValue => [...oldValue, data]);
      }else{
        setPlants(data);
        setFilteredPlants(data);
      }

      setLoading(false);
      setLoadingMore(false);
  }

  function handleFetchMmore(distance:number){
    if(distance < 1) return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fechPlants();
  }

  useEffect(()=>{
    async function fechEnviroment(){
      const { data} = await api.get('plants_environments?_sort=title&_order=asc');
      setEnviroments([{
          key:'all',
          title:'Todos'
        },
        ...data
      ]);
    }

    fechEnviroment();

  },[]);


  useEffect(()=>{
    fechPlants();

  },[]);

  if(loading)
    return <Load/>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subTitle}>você quer colocar sua planata?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          renderItem={({item})=>(
            <EnviomentButtton 
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={()=> handleEnrivomentSelected(item.key)}
            />
          )}
          
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({item})=>(
            <PlantCardPrimary
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.plantsList}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd}) =>
            handleFetchMmore(distanceFromEnd)
          }

          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color={colors.green} />
            ): null
          }
        />        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal:30
  },
  title: {
    fontSize:17,
    color:colors.heading,
    fontFamily:fonts.heading,
    lineHeight:20,
    marginTop:15
  },
  subTitle: {
    fontFamily:fonts.text,
    fontSize:17,
    lineHeight:20,
    color:colors.heading
  },
  enviromentList:{
    height:40,
    justifyContent:'center',
    paddingBottom:5,
    marginLeft:32,
    marginVertical:32
  },
  plants:{
    flex:1,
    paddingHorizontal:32,
    justifyContent:'center'    
  },
  plantsList:{
    
  }
});