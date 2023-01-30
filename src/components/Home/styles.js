import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingBottom: 60,
  },
  popularView: {
    backgroundColor: '#161616',
  },
  topRateView: {
    marginTop: 20,
    backgroundColor: '#161616',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 15,
  },
  titleBoxSession: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  lineBeforTitleBox: {
    height: 35,
    width: 5,
    backgroundColor: '#00FFA9',
    borderRadius: 8,
  },
  titleSession: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 10,
  },
  slide: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end'
  },
  wrapper: {
    height: 220,
  },
  titleMovieSlide: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500'
  },
  dateMovieSlide: {
    color: '#fff',
    fontSize: 11
  },
  introMovieSlide: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 0.5
  }



});
