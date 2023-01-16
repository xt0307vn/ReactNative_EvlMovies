import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';

import styles from './styles';
import GetApis from '../../controllers/apis/getAips';
import ItemMovies from '../common/itemMovies/itemMovies';
import ItemMoviesReview from '../common/ItemMoviesReview/ItemMoviesReview';

const PopularReviewMovies = props => {
  const [dataPopularReview, setDataPopularReview] = useState([]);

  


  itemSepara = () => {
    return (
      <View style={{height: '100%', backgroundColor: '#666666', width: 1}} />
    );
  };

  useEffect(() => {
    GetApis.getPopular(1)
    .then(data => {
      setDataPopularReview(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={dataPopularReview}
        horizontal
        renderItem={(item, index) => <ItemMoviesReview movie={item} />}
        ItemSeparatorComponent={itemSepara}
      />
    </View>
  );
};

export default PopularReviewMovies;
