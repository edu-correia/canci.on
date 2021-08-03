import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';

import styles from './styles';

export default function Artist(){
  const [musics, setMusics] = useState([]);
  const [artistData, setArtistData] = useState({
    strArtist: "Nome do artista",
    strGenre: "Estilo do artista",
    intFormedYear: "1900",
    strCountry: "Brasil",
    intMembers: "0",
    strArtistThumb: "https://www.recorteadesivo.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=43&id_materia_prima=406&tamanho=290x290%22}",
    strBiographyEN: "Descrição do artista."
  });

  const { params: { id } } = useRoute();

  async function fetchArtistDataAndMusics(){
    const {data: { artists }} = await api.get(`artist.php?i=${id}`);
    const {data: {mvids: artistMusics}} = await api.get(`mvid.php?i=${id}`);

    setArtistData(artists[0]);
    if(artistMusics !== null) setMusics(artistMusics);
  }

  useEffect(() => {
    fetchArtistDataAndMusics();
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Image 
          style={styles.image}
          source={{uri: artistData.strArtistThumb}}
        />
        <Text style={styles.artist}>{artistData.strArtist}</Text>
        <Text style={styles.info}>
          Estilo: {artistData.strGenre} {'\n'}
          Integrantes: {artistData.intMembers} {'\n'}
          País: {artistData.strCountry} {'\n'}
          Ano de formação: {artistData.intFormedYear} {'\n'}
          Descrição: {artistData.strBiographyEN}
        </Text>        
        
        {
          musics.length !== 0 && (
            <>
              <View style={styles.titleView}>
                <Text style={styles.title}>Músicas</Text>
              </View>
              
              {
                musics.map((music, index) => (
                  <Wrapper 
                    key={index}
                    title={music.strTrack}
                    subtitle={artistData.strArtist}
                    img={music.strTrackThumb || "https://www.recorteadesivo.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=43&id_materia_prima=406&tamanho=290x290"}
                    type="MUSIC"
                    id={music.idTrack}
                  />
                ))
              }
            </>
          )
        }

      </View>
    </ScrollView>
  );
}