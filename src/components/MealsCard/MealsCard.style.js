import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA513',
    padding: 10,
  },
  image: {
    width: deviceSize.width - 20,
    height: deviceSize.height / 4,
    resizeMode: 'cover',
    borderRadius: 20,
    flex: 1,
  },
  inner_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  info_container: {
    backgroundColor: 'rgba(0,0, 0, 0.6)',
    width: deviceSize.width - 20,
    padding: 10,
    alignItems: 'flex-end',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  text: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '900',
  },
});
