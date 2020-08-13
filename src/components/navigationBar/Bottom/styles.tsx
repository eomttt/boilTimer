import { StyleSheet } from 'react-native';
import { BottomBarHeight } from 'styles/layout';

const styles = StyleSheet.create({
  container: {
    height: BottomBarHeight,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    display: 'flex',
  },
  text: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
});

export default styles;
