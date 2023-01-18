import { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ItemUserReview from './ItemUserReview';
import GetApis from '../../controllers/apis/getAips'

import styles from './styles';

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    const ItemSeparatorComponent = () => {
        return(
            <View style={{ height: 0.5, backgroundColor: '#3c3c3c', marginHorizontal: 10}}></View>
        )
    }


    useEffect(() => {
        // GetApis.getReviews('76600', 1)
        //     .then(data => {
        //         setReviews(data)
        //     })
        //     .catch(err => console.log(err))
    }, [])
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="arrow-back" size={30} color="#fff" />
        <Text style={{color: '#fff', fontSize: 25, marginLeft: 15}}>Back</Text>
      </View>

      {/* <FlatList
        data={reviews}
        renderItem={(item, index) => (
          <ItemUserReview
            data={item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
        style={{paddingBottom: 100}}
      /> */}
    </View>
  );
};

export default UserReviews;
