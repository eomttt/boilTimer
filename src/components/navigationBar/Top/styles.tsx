import { StyleSheet } from 'react-native';
import { TopBarHeight } from 'styles/layout';

const styles = StyleSheet.create({
  container: {
    height: TopBarHeight,
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
