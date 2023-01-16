import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import GetApis from '../../controllers/apis/getAips';
import ItemSearchMovie from './ItemSearchMovie';

const SearchMovies = () => {
  const [dataSearch, setDataSearch] = useState();
  const [keyword, setKeyword] = useState();
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [count, setCount] = useState(1)

  const loadData = keyword => {
    if (keyword === undefined || keyword == '') {
      GetApis.getPopular()
        .then(data => {
          setDataSearch(data);
        })
        .catch(error => {
          console.log('Lỗi');
          console.log(error);
        });
    } else {
      GetApis.getSearch(keyword, count)
        .then(data => {
          setDataSearch(data);
        })
        .catch(error => {
          console.log('Lỗi');
          console.log(error);
        });
    }
  };

  useEffect(() => {
    loadData(keyword);
  }, [keyword, count]);

  const ItemSepara = () => {
    return (
      <View style={{width: '100%', height: 5, backgroundColor: '#000'}}></View>
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



  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={25} color="#cccccc" />
        <TextInput
          style={styles.inputSearch}
          onChangeText={text => {
            setKeyword(text),
            setCount(1);
          }}
        />
      </View>

      {/* Main */}
      <View
        style={{margin: 20, marginBottom: 66, paddingBottom: 70, marginTop: 5}}>
        <FlatList
          data={dataSearch}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => <ItemSearchMovie detailMovie={item} />}
          ItemSeparatorComponent={ItemSepara}
          ListFooterComponent={loadMore}
          onEndReached={() => {
            setIsLoadMore(true);
            increase();

            setTimeout(() => {
              setIsLoadMore(false);
              setDataSearch(dataSearch.concat(GetApis.getSearch(keyword, count)));
            }, 2000);
          }}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
};

export default SearchMovies;
