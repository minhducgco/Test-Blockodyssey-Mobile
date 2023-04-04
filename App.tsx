/**
 * Author     : Do Minh Duc
 * Edited on  : April 04, 2023
 * Description:
 *  +
 */
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
     
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
