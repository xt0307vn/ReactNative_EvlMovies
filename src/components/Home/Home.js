import {
  View,
  Text,
  ScrollView,
  Button,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularReviewMovies from '../PopularReviewMovies/PopularReviewMovies';
import TopRatedReviewMovies from '../TopRatedReviewMovies/TopRatedReviewMovies';
import GetApis from '../../controllers/apis/getAips';
import Constants from '../../controllers/constants';
import {useEffect, useState} from 'react';
import axios from 'axios';
import constants from '../../controllers/constants';

const url = 'https://imdb-api.com/en/API/MostPopularMovies/k_2656c3fe';

const Home = props => {
  function gotoPopular() {
    props.navigation.push(constants.screenName.PopularMovies);
  }

  function gotoTopRated() {
    props.navigation.push(constants.screenName.TopRatedMovies);
  }

  useEffect(() => {});

  const Apis = () => {
    console.log('đang lấy apis...');
    GetApis.getSearch('avatar', 1)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
            <View style={styles.titleBoxSession}>
              <View style={styles.lineBeforTitleBox}></View>
              <Text style={styles.titleSession}>Popular</Text>
            </View>
            <TouchableOpacity onPress={gotoPopular}>
              <Text
                style={{
                  ...styles.title,
                  marginRight: 40,
                  fontSize: 15,
                  fontWeight: 'normal',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#008053',
              width: '90%',
              height: 1,
              marginLeft: 15,
              marginTop: 5
            }}></View>
          <PopularReviewMovies />
        </View>
        <View style={styles.topRateView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <View style={styles.titleBoxSession}>
              <View style={styles.lineBeforTitleBox}></View>
              <Text style={styles.titleSession}>Top rate</Text>
            </View>
            <TouchableOpacity onPress={gotoTopRated}>
              <Text
                style={{
                  ...styles.title,
                  marginRight: 40,
                  fontSize: 15,
                  fontWeight: 'normal',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#008053',
              width: '90%',
              height: 1,
              marginLeft: 15,
              marginTop: 5
            }}></View>
          <TopRatedReviewMovies />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
