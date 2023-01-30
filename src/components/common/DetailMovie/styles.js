import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  imageMovie: {
    resizeMode: 'cover',
    width: 110,
    height: 150,
  },
  titleMovie: {
    width: '100%',
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
  },
  infomation: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 5,
  },
  rattingBox: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleSession: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 10,
  },
  lineBeforTitleBox: {
    height: 25,
    width: 5,
    backgroundColor: '#00FFA9',
    borderRadius: 8,
  },
  sessionBox: {
    backgroundColor: '#212121',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 21
  },
  titleBoxSession: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
});
