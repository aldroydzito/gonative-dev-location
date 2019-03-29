// import './config/reactotronConfig';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import Map from './components/Map';
import Modal from './components/Modal';

import store from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Map />
      <Modal />
    </View>
  </Provider>
);

export default App;
