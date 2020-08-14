import { StyleSheet } from 'react-native';
import { pointColor } from 'styles/color';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    minWidth: 150,
    height: 50,
    backgroundColor: pointColor,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
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
