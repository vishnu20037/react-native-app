import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = ({billNo, retailerName}) => {
  return (
    <View>
      <Text style={styles.billNoStyle}>{billNo}</Text>
      <Text style={styles.retailerNameStyle}>{retailerName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  billNoStyle: {
    fontSize: 16,
    color: '#ECECEC',
  },
  retailerNameStyle: {
    fontSize: 12,
    color: '#D0D0D0',
  },
});
export default Header;
