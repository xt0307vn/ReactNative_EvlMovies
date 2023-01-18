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
  
  const TopRatedMovies = props => {
    const [dataPopularReview, setDataPopularReview] = useState([]);
  
    GetApis.getTopRated()
      .then(data => {
        setDataPopularReview(data)
      })
      .catch(err => {
        console.log(err)
      })
  
  
    itemSepara = () => {
      return (
        <View style={{height: '100%',  width: 5}} />
      );
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={dataPopularReview}
          horizontal
          renderItem={(item, index) => <ItemMoviesReview movie={item} />}
          ItemSeparatorComponent={itemSepara}
          style={{backgroundColor: '#151515'}}
        />
      </View>
    );
  };
  
  export default TopRatedMovies;
  