import {
  View,
  Text,
  ScrollView,
  Button,
  Touchable,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularReviewMovies from '../PopularReviewMovies/PopularReviewMovies';
import TopRatedReviewMovies from '../TopRatedReviewMovies/TopRatedReviewMovies';
import GetApis from '../../controllers/apis/getAips';
import Constants from '../../controllers/constants';
import {useEffect, useState} from 'react';
import axios from 'axios';

const url = 'https://imdb-api.com/en/API/MostPopularMovies/k_2656c3fe';

const Home = props => {
  function gotoPopular() {
    props.navigation.push('PopularMoives');
  }

  function gotoTopRated() {
    props.navigation.push('TopRatedMovies');
  }
  
  useEffect(() => {
  })

  

  const Apis = () => {
    console.log("đang lấy apis...")
    GetApis.getSearch('avatar', 1)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.popularView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.title}>Popular</Text>
            <TouchableOpacity onPress={gotoPopular}>
              <Text
                style={{
                  ...styles.title,
                  marginRight: 40,
                  fontSize: 18,
                  fontWeight: 'normal',
                }}>
                See all>>
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#008053',
              width: '90%',
              height: 1,
            }}></View>
          <PopularReviewMovies />
        </View>
        <View style={styles.popularView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.title}>Top rated</Text>
            <TouchableOpacity onPress={gotoTopRated}>
              <Text
                style={{
                  ...styles.title,
                  marginRight: 40,
                  fontSize: 18,
                  fontWeight: 'normal',
                }}>
                See all>>
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#008053',
              width: '90%',
              height: 1,
            }}></View>
          <TopRatedReviewMovies />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
