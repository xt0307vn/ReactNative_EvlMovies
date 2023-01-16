import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator} from 'react-native';

import styles from './styles';
import GetApis from './../../controllers/apis/getAips';
import ItemMovies from '../common/itemMovies/itemMovies';
import PopularReview from '../common/ItemMoviesReview/ItemMoviesReview';
import { useNavigation } from '@react-navigation/native';

const PopularMovies = () => {
  const navigation = useNavigation()
  const [dataPopular, setDataPopular] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [count, setCount] = useState(1);

  const itemSepara = () => {
    return (
      <View
        style={{
          height: 10,
          width: '100%',
          justifyContent: 'center',
          paddingRight: 20,
        }}>
        <View
          style={{height: 1, backgroundColor: '#008054', width: '100%'}}></View>
      </View>
    );
  };

  const FooterComponent = () => {
    return (
      <View
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'center',
          paddingRight: 20,
          marginBottom: 66
        }}>
        <ActivityIndicator size='large' color='#00FEA8'/>
      </View>
    );
  };

  function increase() {
    setCount( count + 1)
  }

  function loadMore() {
    if(isLoadMore) {
      return(
        <FooterComponent/>
      )
    }
  }

  useEffect(() => {
    GetApis.getPopular(count).then(data => {
      setDataPopular(data);
    });
  }, [count])

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#161616',
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
            <Text
              style={{
                color: '#00FFA9',
                fontSize: 30,
                marginLeft: 8,
                fontWeight: '600',
              }}>
              Popular
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataPopular}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item, index) => <ItemMovies movie={item} />}
        ItemSeparatorComponent={itemSepara}
        style={{paddingHorizontal: 10}}
        initialNumToRender={20}
        ListFooterComponent={loadMore}
        onEndReached={() => {
          setIsLoadMore(true);
          increase()

          setTimeout(() => {
            setIsLoadMore(false);
            setDataPopular(dataPopular.concat(GetApis.getPopular(count)))
          }, 2000);
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default PopularMovies;
