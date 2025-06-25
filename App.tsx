/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const pdfUrl = encodeURIComponent(
    'https://portalerrepar.errepar.com/resources/images/appseparatas/236.pdf',
  );
  const googleViewerUrl = `https://docs.google.com/gview?embedded=true&url=${pdfUrl}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: googleViewerUrl}}
        style={{flex: 1}}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  webview: {
    flex: 1,
  },
});
export default App;
