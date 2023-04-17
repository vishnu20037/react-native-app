import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
const Payment = ({navigation, route}) => {
  const [amount, setAmount] = useState({amount: 0});
  const [method, setMethod] = useState('');
  const billNo = route.params.billNo;
  const retailerName = route.params.retailerName;
  const pendingAmount = route.params.pendingAmount;
  let defaultAmount = '';
  defaultAmount = defaultAmount + pendingAmount;
  const [amountText, setAmountText] = useState(defaultAmount);
  const payments = route.params.payments;
  const date = new Date();
  let currentDate = `${String(date.getDate()).padStart(2, '0')}/${String(
    date.getMonth() + 1,
  ).padStart(2, '0')}/${date.getFullYear()}`;
  let currentTime = `${String(date.getHours())}:${String(date.getMinutes())}`;
  let updatedPayments = [
    {
      paidAmount: amount,
      paymentMethod: method,
      paymentDate: currentDate,
      paymentTime: currentTime,
    },
  ];
  updatedPayments = updatedPayments.concat(payments);
  const updateData = async (qParam, data) => {
    try {
      const ipAddress = '192.168.43.148';
      const url =
        'http://' + ipAddress + ':3000/update_invoice?billNo=' + qParam;
      const result = await axios({
        method: 'put',
        url: url,
        data: data,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.container}>
          <Text style={styles.amountText}>Amount</Text>
          <View style={styles.inputBox}>
            <Text style={styles.ruppeSign}>₹</Text>
            <TextInput
              editable
              keyboardType="numeric"
              style={styles.input}
              defaultValue={defaultAmount}
              autoFocus={false}
              value={amountText}
              onChangeText={text => {
                setAmountText(text);
                setAmount(Number(text));
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.chooseText}>Choose Payment Mode</Text>
          <View style={styles.methods}>
            <Pressable
              style={() => [
                {
                  backgroundColor: method === 'online' ? '#DFE8F4' : '#EFEFEF',
                  borderColor: method === 'online' ? '#2760B6' : '#EFEFEF',
                },
                styles.textcard,
              ]}
              onPress={() => {
                setMethod('online');
              }}>
              <View>
                <Text style={styles.paymentModeText}>Online</Text>
              </View>
            </Pressable>
            <Pressable
              style={() => [
                {
                  backgroundColor: method === 'cash' ? '#DFE8F4' : '#EFEFEF',
                  borderColor: method === 'cash' ? '#2760B6' : '#EFEFEF',
                },
                styles.textcard,
              ]}
              onPress={() => {
                setMethod('cash');
              }}>
              <View>
                <Text style={styles.paymentModeText}>Cash</Text>
              </View>
            </Pressable>
            <Pressable
              style={() => [
                {
                  backgroundColor: method === 'cheque' ? '#DFE8F4' : '#EFEFEF',
                  borderColor: method === 'cheque' ? '#2760B6' : '#EFEFEF',
                },
                styles.textcard,
              ]}
              onPress={() => {
                setMethod('cheque');
              }}>
              <View>
                <Text style={styles.paymentModeText}>Cheque</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Pressable
          onPress={() => {
            if (
              method.length !== 0 &&
              amount > 0 &&
              amount <= route.params.pendingAmount &&
              amountText.length !== 0
            ) {
              updateData(billNo, {
                pendingAmount: pendingAmount - amount,
                payments: updatedPayments,
              })
                .then(result => {
                  console.log(result.status);
                })
                .catch(error => {
                  console.log(error.message);
                });
              navigation.navigate('Success', {
                billNo: billNo,
                retailerName: retailerName,
                amount: amount,
                method: method.toUpperCase(),
              });
              setTimeout(() => {
                navigation.navigate('Home');
              }, 2500);
            } else if (method.length === 0) {
              ToastAndroid.show(
                'Please choose one payment method !',
                ToastAndroid.SHORT,
              );
            } else if (amount > route.params.pendingAmount) {
              ToastAndroid.show(
                'Please add amount less than pending amount',
                ToastAndroid.SHORT,
              );
            } else if (amount <= 0 || amountText.length === 0) {
              ToastAndroid.show(
                'Please add valid amount for payment',
                ToastAndroid.SHORT,
              );
            }
          }}
          style={styles.button}
          backgroundColor={
            method.length !== 0 &&
            amount > 0 &&
            amount <= route.params.pendingAmount &&
            amountText.length !== 0
              ? '#2760B6'
              : '#EFEFEF'
          }>
          <View>
            <Text style={styles.buttonText}>Confirm</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {backgroundColor: '#2A2D31'},
  amountText: {
    fontSize: 11,
    color: '#C3C3C3',
    marginLeft: 31,
    marginTop: 18,
    lineHeight: 16.5,
  },
  inputBox: {
    height: 50,
    marginHorizontal: 24,
    marginTop: 2,
    marginBottom: 60,
    borderWidth: 0.0,
    borderRadius: 6,
    backgroundColor: '#24262A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#C8C8C8',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
  },
  ruppeSign: {
    color: '#C8C8C8',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    paddingLeft: 20,
  },
  chooseText: {
    fontSize: 14,
    color: '#2F2F2F',
    paddingLeft: 12,
    textAlign: 'center',
    marginHorizontal: 44,
    marginTop: 121,
    fontWeight: 700,
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 51,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textcard: {
    borderRadius: 12,
    width: 120,
    height: 160,
    borderWidth: 1,
  },
  pressedCard: {
    backgroundColor: '#DFE8F4',
    borderRadius: 12,
    width: 120,
    height: 160,
    borderColor: '#DFE8F4',
    borderWidth: 1,
  },
  paymentModeText: {
    textAlign: 'center',
    paddingVertical: 70,
    color: '#2F2F2F',
    fontSize: 16,
    fontWeight: 400,
  },
  buttonView: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 56,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
  },
});
export default Payment;
