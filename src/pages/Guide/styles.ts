import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    display: 'flex',
  },
  image: {
    flex: 1,
    width: win.width,
    resizeMode: 'contain',
  },
  content: {
    flex: 3,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentText: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default styles;
