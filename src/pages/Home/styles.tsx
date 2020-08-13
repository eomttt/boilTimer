import { StyleSheet } from 'react-native';
import { pointColor } from 'styles/color';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  top: {
    flex: 1,
    display: 'flex',
  },
  titleWrapper: {
    textAlign: 'center',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  titleEmphasize: {
    fontWeight: 'bold',
    color: pointColor,
    fontSize: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  middle: {
    flex: 1,
    display: 'flex',
  },
  image: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
  bottom: {
    flex: 1,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: pointColor,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    borderRadius: 10,
  },
  bottomText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
});

export default styles;
