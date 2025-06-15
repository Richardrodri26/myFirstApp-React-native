import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
  },

  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0a23b',
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
    left: 0,
  },
  greenBox: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00A651',
    borderWidth: 10,
    borderColor: 'white',
  },
});
