import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from '../../services/api';

import CancionText from '../../components/CancionText';
import Wrapper from '../../components/Wrapper';

import styles from './styles';

export default function Home(){
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [artistName, setArtistName] = useState('');
  const [artistData, setArtistData] = useState(null);
  const [previousArtists, setPreviousArtists] = useState([]);

  async function fetchArtist(){
    if(artistName === ""){
      alert("ERRO");
    }else{
      const {data: {artists}} = await api.get(`search.php?s=${artistName}`);

      if(!artists){
        Alert.alert("❌ Erro!", `O artista: ${artistName} não foi encontrado. Verifique a digitação!`);
        return;
      }

      const [firstResult] = artists;

      setArtistData(firstResult);

      const previous = await fetchPreviousArtists();

      await AsyncStorage.setItem(
          "@cancion:history",
          JSON.stringify([...previous, firstResult])
      );
    }
  }

  async function fetchPreviousArtists(){
    const previousArtistsJSON = await AsyncStorage.getItem("@cancion:history");
    const previous = previousArtistsJSON ? JSON.parse(previousArtistsJSON) : [];

    return previous;
  }

  useEffect(() => {
    (async () => {
      const previous = await fetchPreviousArtists();

      setPreviousArtists(previous);
    })()
  }, [artistData]);

  function handleKeyPress(){
    fetchArtist();
  }

  return (
    <ScrollView style={styles.container}>

      {/* SearchBar */}
      <View style={styles.searchBar}>

        {isSearchEnabled ? (
          <TextInput 
            style={styles.input}
            placeholder="Insira um cantor..."
            onSubmitEditing={handleKeyPress}
            onChangeText={setArtistName}
            autoFocus
          />
        ) : (
          <CancionText 
            primary="black"
            secondary="white"
            size={24}
          />
        )}

        <TouchableOpacity
          onPress={() => setIsSearchEnabled(!isSearchEnabled)}
        >          
          <MaterialIcons 
            name={isSearchEnabled ? "close" : "search"}
            size={24}
          />
        </TouchableOpacity>

      </View>

      {/* Results */}
      {
        artistData !== null && (
          <View style={styles.wrappersList}>
            <Text style={styles.title}>Resultado</Text>

            <Wrapper 
              title={artistData.strArtist}
              subtitle={artistData.strGenre}
              id={artistData.idArtist}
              img={artistData.strArtistThumb}
              type="ARTIST"
            />
          </View>
        )
      }

      {/* History */}
      {
        previousArtists.length !== 0 && (
          <View style={styles.wrappersList}>
            <Text style={styles.title}>Histórico</Text>

            {previousArtists.map((artist, index) => (
              <Wrapper 
                key={index}
                title={artist.strArtist}
                subtitle={artist.strGenre}
                img={artist.strArtistThumb}
                id={artist.idArtist}
                type="ARTIST"
              />
            )).reverse()}

          </View> 
        )
      }
    </ScrollView>
  );
}