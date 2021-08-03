import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";

import api from '../../services/api';

import Header from '../../components/Header';

import styles from './styles';

export default function Music(){
  const [isPlaying, setIsPlaying] = useState(false);
  const [ musicData, setMusicData ] = useState({
    name: "Nome da música",
    artist: "Nome do artista",
    image: "https://www.recorteadesivo.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=43&id_materia_prima=406&tamanho=290x290%22}",
    description: "Descrição da música.",
    videoId: 'gnIZ7RMuLpU',
    rating: '98%',
    ratingColor: 'white',
    duration: '3:49 min'
  });

  const { params: { id } } = useRoute();

  async function fetchMusicData(){
    const {data: { track }} = await api.get(`track.php?h=${id}`);

    const [music] = track;

    const formattedMusic = {};

    const fullMinutes = music.intDuration / 60000;
    const minutes = Math.trunc(fullMinutes);
    const seconds = Math.trunc((fullMinutes - minutes) * 60);

    formattedMusic.duration = `${minutes}:${seconds < 10 ? '0' + seconds : seconds} min`;

    const likes = Number(music.intMusicVidLikes) === 0 ? 1 : Number(music.intMusicVidLikes);
    const dislikes = Number(music.intMusicVidDislikes);

    const rating = Math.trunc(((likes - dislikes) / likes)*100);

    formattedMusic.rating = `${rating} %`;

    if(rating > 66){
      formattedMusic.ratingColor = "green";
    }else if(rating > 33){
      formattedMusic.ratingColor = "yellow";
    }else{
      formattedMusic.ratingColor = "red";
    }

    formattedMusic.videoId = `${music.strMusicVid.substring(32)}`;

    formattedMusic.image = music.strTrackThumb;
    formattedMusic.description = music.strDescriptionEN;
    formattedMusic.name = music.strTrack;
    formattedMusic.artist = music.strArtist;

    setMusicData(formattedMusic);
  }

  useEffect(() => {
    fetchMusicData();
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Image 
          style={styles.image}
          source={{uri: musicData.image}}
        />

        <TouchableOpacity
          style={styles.playBtn}
          activeOpacity={0.8}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <MaterialIcons 
            name={isPlaying ? 'pause' : 'play-arrow'}
            size={64}
            color="#fff"
          />
        </TouchableOpacity>

        <View style={styles.titleView}>
          <View  style={styles.info}>
            <Text style={styles.music}>{musicData.name}</Text>
            <Text style={[styles.rating, {color: musicData.ratingColor}]}>{musicData.rating}</Text> 
          </View>
          <View style={styles.info}>
            <Text style={styles.artist}>{musicData.artist}</Text>
            <Text style={styles.duration}>{musicData.duration}</Text>
          </View>
        </View>
        
        <View style={styles.descView}>
          <Text style={styles.descTitle}>Descrição:</Text>
        </View>

        <Text style={styles.desc}>
          {musicData.description}
        </Text>
      </View>

      <View style={{position: 'absolute'}}>
        <YoutubePlayer
          height={200}
          play={isPlaying}
          videoId={musicData.videoId}
        />
      </View>

    </ScrollView>
  );
}