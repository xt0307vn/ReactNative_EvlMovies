import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Constants from '../../controllers/constants';

const ItemSearchMovie = props => {
  const navigation = useNavigation();
  function gotoDetail() {
    navigation.navigate('DetailMovie', {
      id: props.detailMovie.item.id,
      screenName: Constants.screenName.SearchMovies,
      navigation,
    });
    // console.log(props.detailMovie.item.id)
  }

  return (
    <TouchableOpacity onPress={gotoDetail}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://image.tmdb.org/t/p/original/' +
              props.detailMovie.item.backdrop_path,
          }}
          style={{width: 120, height: 80, borderRadius: 8}}
        />
        <View style={styles.introBox}>
          <Text style={styles.textIntro} numberOfLines={2} ellipsizeMode="tail">
            {props.detailMovie.item.title}
          </Text>
          <Text
            style={{
              ...styles.textIntro,
              textAlign: 'justify',
              fontSize: 15,
            }}
            numberOfLines={2}
            ellipsizeMode="tail">
            {props.detailMovie.item.release_date}
          </Text>
          <Text
            style={{
              ...styles.textIntro,
              textAlign: 'justify',
              fontSize: 15,
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.detailMovie.item.overview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSearchMovie;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Constants.color.backgroundGrownLight,
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 8,
  },
  introBox: {
    width: '80%',
    paddingLeft: 10,
  },
  textIntro: {
    color: '#fff',
    fontSize: 21,
    width: '80%',
  },
});
