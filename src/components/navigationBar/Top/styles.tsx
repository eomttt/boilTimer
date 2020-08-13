import { StyleSheet } from 'react-native';
import { TopBarHeight } from 'styles/layout';
import { pointColor } from 'styles/color';

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
    fontSize: 25,
    color: pointColor,
  },
});

export default styles;
