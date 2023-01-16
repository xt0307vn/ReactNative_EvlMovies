import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import constants from '../../../controllers/constants';

const itemMovies = ({movie}) => {
  const navigation = useNavigation()

  function gotoDetail() {
      navigation.push('DetailMovie', {id: movie.item.id, navigation})
  }
  return (
    <TouchableOpacity onPress={gotoDetail}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/original/' + movie?.item?.poster_path,
          }}
          style={styles.imageMovie}
        />
        <View style={{justifyContent: 'center', width: '70%', paddingHorizontal: 10}}>
          <Text style={styles.titleMovie} numberOfLines={2} ellipsizeMode='tail'>{movie?.item?.title}</Text>
          <Text style={{...styles.overview, width: '100%'}} numberOfLines={2} ellipsizeMode='tail'>{movie?.item?.overview}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="star" size={20} color="#FFCA28" />
            <Text style={{...styles.overview, marginLeft: 10, color: '#fff'}}>
              {movie?.item?.vote_average}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default itemMovies;
