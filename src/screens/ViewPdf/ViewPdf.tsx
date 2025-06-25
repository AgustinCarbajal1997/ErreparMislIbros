import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

function ViewPdf(): React.JSX.Element {
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
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
export default ViewPdf;
