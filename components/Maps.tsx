import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import ScreenWithHeaderAndFooter from "components/ScreenWithHeaderAndFooter"

const Maps = () => {
  return (
    <ScreenWithHeaderAndFooter>
      <WebView
        source={{ html: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A768a638fa4f9953df7260ec1b211ff94392e6d2f05a548fd5841c05518a6dba4&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>' }}
        style={styles.webView}
        scalesPageToFit={true} // позволяет масштабировать содержимое
      />
    </ScreenWithHeaderAndFooter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // обеспечивает заполнение всего доступного пространства
  },
  webView: {
    flex: 1, // делает WebView заполняющим доступное пространство
  },
});
export default Maps;