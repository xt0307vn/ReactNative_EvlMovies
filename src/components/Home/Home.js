import {
  View,
  Text,
  ScrollView,
  Button,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Image,
  Alert,
} from 'react-native';

import styles from './styles';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularReviewMovies from '../PopularReviewMovies/PopularReviewMovies';
import TopRatedReviewMovies from '../TopRatedReviewMovies/TopRatedReviewMovies';
import GetApis from '../../controllers/apis/getAips';
import Constants from '../../controllers/constants';
import {useEffect, useState} from 'react';
import constants from '../../controllers/constants';
import {SliderBox} from 'react-native-image-slider-box';
import Swiper from 'react-native-swiper';
import Triangle from 'react-native-triangle';

const url = 'https://imdb-api.com/en/API/MostPopularMovies/k_2656c3fe';

const Home = props => {
  const [dataSlide, setDataSlide] = useState([]);

  function gotoPopular() {
    props.navigation.push(constants.screenName.PopularMovies);
  }

  function gotoTopRated() {
    props.navigation.push(constants.screenName.TopRatedMovies);
  }

  useEffect(() => {
    GetApis.rev().then(data => {
      setDataSlide(data);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        activeDotColor="#007D51"
        autoplayTimeout={4}>
        {dataSlide.map((item, index) => (
          <ItemSlide data={item} key={index} navigation={props.navigation}/>
        ))}
      </Swiper>
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
              height: 0.5,
              marginLeft: 15,
              marginTop: 5,
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
              height: 0.5,
              marginLeft: 15,
              marginTop: 5,
            }}></View>
          <TopRatedReviewMovies />
        </View>
      </View>
    </ScrollView>
  );
};

const ItemSlide = ({data, navigation}) => {
  function gotoDetail() {
    navigation.navigate(Constants.screenName.DetailMovie, {id: data?.id})
  }
  return (
    <TouchableOpacity style={styles.slide} onPress={() => gotoDetail()}>
      <View style={styles.slide}>
        <View style={styles.introMovieSlide}>
          <View
            style={{
              flexDirection: 'column',
              width: 150,
              backgroundColor: 'rgba(0,0,0, 0.7)',
              height: 46,
              paddingLeft: 10,
            }}>
            <Text style={styles.titleMovieSlide} numberOfLines={1}>
              {data?.original_title}
            </Text>
            <Text style={styles.dateMovieSlide}>{data?.release_date}</Text>
          </View>
          <Triangle
            width={20}
            height={46}
            color="rgba(0,0,0, 0.7)"
            direction="right"
          />
        </View>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + data?.backdrop_path,
          }}
          style={{
            width: '100%',
            height: '100%',
            zIndex: -1,
            position: 'absolute',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Home;
