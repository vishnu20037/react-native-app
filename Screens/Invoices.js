import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const List = ({navigation}) => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    try {
      const ipAddress = '192.168.43.148';
      const url = 'http://' + ipAddress + ':3000/all_invoices';
      const result = await axios.get(url);
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Payment', {
                    billNo: item.billNo,
                    retailerName: item.retailerName,
                    pendingAmount: item.pendingAmount,
                    payments: item.payments,
                  });
                }}>
                <View style={styles.main}>
                  <View style={styles.list}>
                    <View style={styles.container}>
                      <Text style={styles.billNo}>{item.billNo}</Text>
                      <Text style={styles.pendingAmount}>
                        {'₹' + item.pendingAmount}
                      </Text>
                    </View>
                    <Text style={styles.retailerName}>
                      {item.retailerName ? item.retailerName : ''}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
  },
  list: {
    marginTop: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  billNo: {
    color: '#646464',
    fontSize: 14,
    fontWeight: 700,
    paddingHorizontal: 24,
  },
  pendingAmount: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 700,
    paddingHorizontal: 16,
  },
  retailerName: {
    color: '#727272',
    fontSize: 12,
    fontWeight: 400,
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
});
export default List;
