import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const AnimatedGifLoader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo_splash_errepar.gif')}
        style={{width: 250, height: 250}}
      />
    </View>
  );
};

export default AnimatedGifLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
