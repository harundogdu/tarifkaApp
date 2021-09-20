import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner_container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 2,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    color: '#7F4528',
    fontWeight: '900',
  },
  country: {
    borderBottomColor: '#7F4528',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#7F4528',
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  button_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
