import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemUserReview = props => {
  return (
    <View
      style={{
        backgroundColor: '#161616',
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 8,
        padding: 8,
      }}>
      <Text style={{color: '#fff', fontSize: 21, fontWeight: '600'}}>
        {props?.data?.item.author}
      </Text>
      <Text style={{color: '#a3a3a3', fontSize: 13, fontWeight: '400'}}>
        {props?.data?.item.created_at.slice(0, 10)}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginLeft: 10}}>
        <Ionicons name='star' size={15} color='#00FFA9'/>
        <Text style={{color: '#fff', fontSize: 21, fontWeight: '700', marginBottom: -3,}}>
          {props?.data?.item.author_details.rating}
        </Text>
        <Text style={{color: '#fff', fontSize: 13}}>/10</Text>
      </View>

      <Text style={{color: '#fff', fontSize: 14, fontWeight: 'normal', textAlign: 'justify',}} >
        {props?.data?.item.content}
      </Text>
    </View>
  );
};

export default ItemUserReview;
