import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Triangle from 'react-native-triangle';

import styles from './styles';
import constants from '../../../controllers/constants';

const itemMovies = ({movie}) => {
  const navigation = useNavigation();

  const gotoDetail = () => {
    navigation.navigate(constants.screenName.DetailMovie, {
      id: movie.item.id,
      navigation,
    });
  };
  return (
    <TouchableOpacity onPress={gotoDetail}>
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            zIndex: 999,
            borderTopRightRadius: 18,
            width: 26,
            left: 114
          }}>
          <View
            style={{
              alignItems: 'center',
              borderTopRightRadius: 18,
              backgroundColor: 'rgba(0,0,0,0.7)',
              justifyContent: 'center',
              paddingTop: 8,
            }}>
            <Ionicons name="star" size={13} color="#FFCA28" />
            <Text style={{...styles.yearMovie, marginLeft: 0, color: '#fff', fontSize: 15}}>
              {movie?.item?.vote_average == undefined
                ? 'Error'
                : movie?.item?.vote_average}
            </Text>
          </View>
          <Triangle width={26} height={8} color={'rgba(0,0,0,0.7)'} direction={'down'} />
        </View>
        <Image
          source={
            movie?.item?.title == undefined
              ? {
                  uri: 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
                }
              : {
                  uri:
                    'https://image.tmdb.org/t/p/original/' +
                    movie?.item?.poster_path,
                }
          }
          style={styles.imageMovie}
        />
        <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
          <Text
            style={styles.titleMovie}
            numberOfLines={2}
            ellipsizeMode="tail">
            {movie?.item?.title == undefined ? 'Error' : movie?.item?.title}
          </Text>
          <Text style={styles.yearMovie}>
            {movie?.item?.vote_count == undefined
              ? 'Error'
              : movie?.item?.vote_count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default itemMovies;
