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
    width: 250,
    fontSize: 25,
    fontWeight: '400',
    color: '#fff',
  },
  infomation: {
    fontSize: 18,
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
    fontSize: 31,
    color: '#fff',
    fontWeight: '400',
    marginLeft: 10,
  },
  lineBeforTitleBox: {
    height: 35,
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
