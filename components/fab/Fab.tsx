import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

//icons
import Zoomicon from '../../assets/icons/icon-zoom.png';

const CustomFab = () => (
  <FAB
    icon="Zoomicon"
    mode="flat"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
  />
);

// size
// Type : 'small' | 'medium' | 'large'
// Default : 'medium'

// mode
// Type: 'flat' | 'elevated'
// Default value: 'elevated'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default CustomFab;
