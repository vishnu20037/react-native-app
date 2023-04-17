import {View, StyleSheet, Button} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <Button
        onPress={() => {
          navigation.navigate('Invoices');
        }}
        title="All Invoices"
        color={'#2A2D31'}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
