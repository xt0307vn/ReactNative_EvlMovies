import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import YoutubeIframe from 'react-native-youtube-iframe';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import styles from './styles';
import GetApis from '../../../controllers/apis/getAips';
import {useEffect, useState} from 'react';
import Constants from '../../../controllers/constants';
import constants from '../../../controllers/constants';

const DetailMovie = ({route}) => {
  const navigation = useNavigation();
  const [goReview, setGoReview] = useState(0);

  const [detail, setDetail] = useState();
  const [video, setVideo] = useState();
  const [casts, setCasts] = useState();
  const [images, setImages] = useState();
  const [reviews, setReviews] = useState([]);
  const [poster, setPoster] = useState();
  const [genres, setGenres] = useState([]);
  const [idVideoYoutube, setIdVideoYoutube] = useState();

  const idMovie = route.params.id;

  function loadData() {
    Promise.all([
      GetApis.getDetailMovie(idMovie),
      GetApis.getVideosMovie(idMovie),
      GetApis.getCast(idMovie),
      GetApis.getImages(idMovie),
      GetApis.getReviews(idMovie, 1),
    ])
      .then(result => {
        const resultDetails = result[0];
        setDetail(resultDetails);
        setGenres(resultDetails?.genres);
        const resultVideos = result[1];
        setVideo(resultVideos);
        const resultCasts = result[2];
        setCasts(resultCasts);
        const resultImages = result[3];
        setImages(resultImages);
        const resultReviews = result[4];
        setReviews(resultReviews);

        for (var i in resultVideos?.results) {
          if (
            resultVideos.results[i].type.toLowerCase().startsWith('trailer')
          ) {
            setIdVideoYoutube(resultVideos.results[i].key);
          } else {
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  const gotoUserReviews = () => {
    navigation.navigate('Home1');
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#000'}}>
        {/* Back */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            backgroundColor: '#212121',
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicon name="arrow-back" size={21} color="#fff" />
              <Text style={{color: '#fff', fontSize: 21, marginLeft: 15}}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: '#8c8c8c',
          }}></View>
        <View
          style={{
            backgroundColor: '#212121',
            borderBottomLeftRadius: 21,
            borderBottomRightRadius: 21,
          }}>
          <View style={{marginLeft: 15, marginBottom: 5}}>
            <Text
              style={styles.titleMovie}
              numberOfLines={2}
              ellipsizeMode="tail">
              {detail?.original_title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.infomation}>{detail?.release_date}</Text>
              <Text style={styles.infomation}>{detail?.runtime + 'm'}</Text>
            </View>
          </View>
          <View style={{height: 230, width: '100%', justifyContent: 'center'}}>
            <YoutubeIframe
              height={230}
              width={'100%'}
              videoId={idVideoYoutube}
            />
          </View>

          <View style={{backgroundColor: '#222222'}}>
            <ScrollView horizontal style={{marginTop: 10}}>
              {genres.map((genre, id) => (
                <ItemGenre data={genre} key={id} />
              ))}
            </ScrollView>
          </View>

          <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
            <Image
              source={{
                uri:
                  GetApis.endpoint.iamges.urlImage +
                  detail?.belongs_to_collection?.poster_path,
              }}
              style={{
                height: 160,
                width: 110,
                resizeMode: 'cover',
                borderRadius: 8,
              }}
            />
            <View
              style={{
                width: '70%',
                color: '#fff',
                fontSize: 20,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  marginBottom: 5,
                  marginLeft: 15,
                }}>
                Overeview:
              </Text>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 5,
                  color: '#fff',
                  textAlign: 'justify',
                  lineHeight: 15,
                  fontSize: 14,
                }}
                ellipsizeMode="tail"
                numberOfLines={7}>
                {detail?.overview}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#8c8c8c',
              width: '100%',
              height: 1,
            }}></View>
          <View style={{marginVertical: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.rattingBox}>
                <Ionicon name="star" size={25} color="#FFCA28" />
                <Text style={{fontSize: 18, fontWeight: '600', color: '#fff'}}>
                  {detail?.vote_average}/10
                </Text>
              </View>
              <View style={styles.rattingBox}>
                <Text
                  style={{fontSize: 15, fontWeight: '600', color: '#999999'}}>
                  Popurlarity
                </Text>
                <Text style={{fontSize: 18, fontWeight: '600', color: '#fff'}}>
                  {detail?.popularity}
                </Text>
              </View>
              <View style={styles.rattingBox}>
                <Text
                  style={{fontSize: 15, fontWeight: '600', color: '#999999'}}>
                  Vote
                </Text>
                <Text style={{fontSize: 18, fontWeight: '600', color: '#fff'}}>
                  {detail?.vote_count}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Cast */}
        <View style={styles.sessionBox}>
          <View style={styles.titleBoxSession}>
            <View style={styles.lineBeforTitleBox}></View>
            <Text style={styles.titleSession}>Cast</Text>
          </View>
          <ScrollView horizontal>
            {casts?.map((cast, i) => (
              <ItemCast data={cast} key={i} />
            ))}
          </ScrollView>
        </View>

        {/* Poster */}
        <View style={{...styles.sessionBox}}>
          <View style={styles.titleBoxSession}>
            <View style={styles.lineBeforTitleBox}></View>
            <Text style={styles.titleSession}>Poster</Text>
          </View>
          <ScrollView
            horizontal
            style={{marginHorizontal: 10, borderRadius: 8}}>
            {images?.map((image, i) => (
              <ItemImage data={image} key={i} />
            ))}
          </ScrollView>
        </View>

        {/* Reviews */}
        <View style={{...styles.sessionBox, marginBottom: 66}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 15,
            }}>
            <View style={{...styles.titleBoxSession, marginBottom: 0}}>
              <View style={styles.lineBeforTitleBox}></View>
              <Text style={styles.titleSession}>User reviews</Text>
            </View>
          </View>
          <ScrollView
            horizontal
            style={{marginHorizontal: 10, borderRadius: 8}}>
            {reviews?.map((review, i) => (
              <ItemReview data={review} key={i} />
            ))}
          </ScrollView>

          {/* <TouchableOpacity onPress={() => navigation.push(Constants.screenName.Home)}>
              <Text style={{fontSize: 18, color: '#fff', marginRight: 30}}>
                See all
              </Text>
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ItemCast = props => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Image
        source={{
          uri:
            'https://image.tmdb.org/t/p/original/' + props.data?.profile_path,
        }}
        style={{
          height: 160,
          width: 110,
          resizeMode: 'cover',
          borderRadius: 13,
        }}
      />
      <Text
        style={{width: 110, color: '#fff', fontSize: 15}}
        numberOfLines={1}
        ellipsizeMode="tail">
        {props.data?.original_name}
      </Text>
      <Text
        style={{width: 110, color: '#8c8c8c', fontSize: 15}}
        numberOfLines={1}
        ellipsizeMode="tail">
        {props.data?.character}
      </Text>
    </View>
  );
};

const ItemImage = props => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/original' + props.data?.file_path,
        }}
        style={{
          height: 160,
          width: 110,
          resizeMode: 'cover',
          borderRadius: 13,
        }}
      />
    </View>
  );
};

const ItemReview = props => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        width: 370,
        backgroundColor: '#1a1a1a',
        padding: 8,
        borderRadius: 8,
      }}>
      <Text style={{color: '#fff', fontSize: 21, fontWeight: '500'}}>
        {props.data?.author_details.username}
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <Ionicon name="star" size={20} color="#FFCA28" />
        <Text style={{color: '#fff', fontSize: 18, marginLeft: 10}}>
          {props.data?.author_details.rating
            ? props.data?.author_details.rating + '/10'
            : 0 + '/10'}
        </Text>
      </View>
      <Text
        style={{color: '#fff', fontSize: 15, marginLeft: 10}}
        numberOfLines={14}>
        {props.data?.content}
      </Text>
    </View>
  );
};

const ItemGenre = props => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        backgroundColor: '#222222',
        padding: 8,
        borderRadius: 8,
        borderColor: '#999999',
        borderWidth: 0.5,
      }}>
      <Text style={{color: '#fff', fontSize: 15, fontWeight: '300'}}>
        {props.data?.name}
      </Text>
    </View>
  );
};

export default DetailMovie;
